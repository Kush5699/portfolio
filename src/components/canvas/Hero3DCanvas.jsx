import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Outer Icosahedron Wireframe (Cybernetic Neural Cage)
    const icoGeometry = new THREE.IcosahedronGeometry(1.65, 1);
    const wireframeGeometry = new THREE.WireframeGeometry(icoGeometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8, // Sky Cyan
      transparent: true,
      opacity: 0.7,
      linewidth: 1.5,
    });
    const icosahedronLines = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    rootGroup.add(icosahedronLines);

    // 2. Vertex Points (Glow Nodes)
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.08,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(icoGeometry, pointsMaterial);
    rootGroup.add(points);

    // 3. Inner Pulsing Core Sphere
    const coreGeometry = new THREE.SphereGeometry(0.72, 32, 32);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6, // Neon Violet
      emissive: 0x4f46e5,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    rootGroup.add(coreMesh);

    // 4. Orbiting Rings (Data Satellites)
    const ringGeometry1 = new THREE.TorusGeometry(2.1, 0.012, 16, 100);
    const ringMaterial1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    rootGroup.add(ring1);

    const ringGeometry2 = new THREE.TorusGeometry(2.35, 0.012, 16, 100);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7, // Violet Ring
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    rootGroup.add(ring2);

    // 5. Orbiting Satellites (Small glowing spheres)
    const satelliteCount = 5;
    const satellites = [];
    const satGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const satMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    for (let i = 0; i < satelliteCount; i++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      rootGroup.add(sat);
      satellites.push({
        mesh: sat,
        speed: 0.015 + i * 0.005,
        radius: 2.1 + (i % 2) * 0.25,
        offset: (i * Math.PI * 2) / satelliteCount,
        plane: i % 2 === 0 ? 'xy' : 'xz',
      });
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x00f0ff, 3, 50);
    pointLightCyan.position.set(3, 4, 4);
    scene.add(pointLightCyan);

    const pointLightViolet = new THREE.PointLight(0x8b5cf6, 2.5, 50);
    pointLightViolet.position.set(-3, -3, 3);
    scene.add(pointLightViolet);

    // Mouse Tracking / Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isHovered = false;

    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetRotationY = x * 0.8;
      targetRotationX = -y * 0.8;
    };

    const onMouseEnter = () => { isHovered = true; };
    const onMouseLeave = () => {
      isHovered = false;
      mouseX = 0;
      mouseY = 0;
      targetRotationX = 0;
      targetRotationY = 0;
    };

    window.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);

    // Responsive ResizeObserver
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

    // IntersectionObserver to pause rendering when offscreen
    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });
    intersectionObserver.observe(container);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Damped rotation to mouse target
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.05;

      // Base idle continuous rotation
      const rotationSpeed = isHovered ? 0.015 : 0.005;
      icosahedronLines.rotation.y += rotationSpeed;
      icosahedronLines.rotation.x += rotationSpeed * 0.5;
      points.rotation.y += rotationSpeed;
      points.rotation.x += rotationSpeed * 0.5;

      coreMesh.rotation.y -= rotationSpeed * 1.5;
      coreMesh.rotation.z += rotationSpeed * 0.8;

      // Pulse inner core scale slightly
      const pulseScale = 1 + Math.sin(elapsedTime * 2.5) * 0.06;
      coreMesh.scale.set(pulseScale, pulseScale, pulseScale);

      // Rotate rings
      ring1.rotation.z += 0.004;
      ring2.rotation.z -= 0.003;

      // Update orbiting satellites
      satellites.forEach((sat) => {
        const angle = elapsedTime * sat.speed * 20 + sat.offset;
        if (sat.plane === 'xy') {
          sat.mesh.position.x = Math.cos(angle) * sat.radius;
          sat.mesh.position.y = Math.sin(angle) * sat.radius;
          sat.mesh.position.z = Math.sin(angle * 0.5) * 0.5;
        } else {
          sat.mesh.position.x = Math.cos(angle) * sat.radius;
          sat.mesh.position.z = Math.sin(angle) * sat.radius;
          sat.mesh.position.y = Math.cos(angle * 0.5) * 0.5;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      icoGeometry.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      pointsMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringGeometry1.dispose();
      ringMaterial1.dispose();
      ringGeometry2.dispose();
      ringMaterial2.dispose();
      satGeo.dispose();
      satMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      <div ref={mountRef} className="w-full h-full" />
      {/* Subtle indicator pill */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-900/60 dark:bg-black/60 border border-slate-700/40 text-slate-400 backdrop-blur-md">
          Interactive 3D Neural Core | Move cursor to tilt
        </span>
      </div>
    </div>
  );
}
