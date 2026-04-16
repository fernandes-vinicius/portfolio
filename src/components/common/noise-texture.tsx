export function NoiseTexture() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-2 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.018, mixBlendMode: "multiply" }}
    >
      <title className="sr-only">Noise Texture</title>
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.70"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}
