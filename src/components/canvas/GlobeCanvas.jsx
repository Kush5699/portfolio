import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GlobeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Wireframe sphere
    const sphereGeo = new THREE.SphereGeometry(1.5, 24, 24);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const globeMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(globeMesh);

    // 2. Inner dot sphere
    const innerPointsGeo = new THREE.SphereGeometry(1.48, 36, 36);
    const innerPointsMat = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
    });
    const innerPoints = new THREE.Points(innerPointsGeo, innerPointsMat);
    globeGroup.add(innerPoints);

    // 3. Highlighted location pins on globe
    // Lat / Lon conversion to 3D sphere point
    const latLonToVector3 = (lat, lon, radius = 1.52) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -(radius * Math.sin(phi) * Math.cos(theta)),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    const pinLocations = [
      { name: 'DA-IICT (India)', lat: 23.19, lon: 72.63, color: 0x00f0ff },
      { name: 'ICPR 2026 Global', lat: 45.46, lon: 9.19, color: 0xa855f7 },
      { name: 'Amazon ML School', lat: 12.97, lon: 77.59, color: 0x38bdf8 },
      { name: 'Kaggle Competitions', lat: 37.77, lon: -122.41, color: 0x10b981 },
    ];

    const pinMeshes = [];
    pinLocations.forEach((loc) => {
      const pos = latLonToVector3(loc.lat, loc.lon);
      const pinGeo = new THREE.SphereGeometry(0.065, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({ color: loc.color });
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.copy(pos);
      globeGroup.add(pin);
      pinMeshes.push(pin);

      // Connecting beam
      const beamGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.35);
      const beamMat = new THREE.MeshBasicMaterial({ color: loc.color, transparent: true, opacity: 0.8 });
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.copy(pos.clone().multiplyScalar(1.08));
      beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize());
      globeGroup.add(beam);
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Mouse drag interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      globeGroup.rotation.y += deltaX * 0.005;
      globeGroup.rotation.x += deltaY * 0.005;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => { isDragging = false; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newW = entry.contentRect.width;
        const newH = entry.contentRect.height;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isDragging) {
        globeGroup.rotation.y += 0.0035;
      }

      // Pulse pin sizes
      const t = clock.getElapsedTime();
      const pulse = 1 + Math.sin(t * 4) * 0.25;
      pinMeshes.forEach((pin) => pin.scale.set(pulse, pulse, pulse));

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      resizeObserver.disconnect();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      innerPointsGeo.dispose();
      innerPointsMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute bottom-1 text-center pointer-events-none">
        <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">
          3D Global Nodes | Drag to rotate
        </span>
      </div>
    </div>
  );
}
