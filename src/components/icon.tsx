export function Icon({ name = "arrow", className = "" }: { name?: "arrow" | "down" | "sun" | "moon" | "menu" | "close" | "copy"; className?: string }) {
  const paths = { arrow: "M5 19 19 5M5 5h14v14", down: "M12 4v16m-6-6 6 6 6-6", sun: "M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5", moon: "M20.5 13A8.5 8.5 0 0 1 11 3.5a8.5 8.5 0 1 0 9.5 9.5Z", menu: "M4 8h16M4 16h16", close: "m6 6 12 12M6 18 18 6", copy: "M8 8h12v12H8ZM16 8V4H4v12h4" };
  return <svg className={`icon ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} />{name === "sun" && <circle cx="12" cy="12" r="4" />}</svg>;
}
