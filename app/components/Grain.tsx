/* eslint-disable @next/next/no-img-element */
const grainSvg =
  'url("data:image/svg+xml;utf8,%3Csvg viewBox=%270 0 240 240%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.92%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3CfeColorMatrix values=%270 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")';

const paperSvg =
  'url("data:image/svg+xml;utf8,%3Csvg viewBox=%270 0 420 420%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27p%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.55%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3CfeColorMatrix values=%270 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23p)%27/%3E%3C/svg%3E")';

export default function Grain() {
  return (
    <>
      {/* Animated film grain — top layer */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] mix-blend-multiply opacity-[0.04] grain-animated"
        style={{
          backgroundImage: grainSvg,
          backgroundSize: "240px 240px",
        }}
      />
      {/* Static paper-fibre texture — barely visible cream-on-cream */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[5] mix-blend-multiply opacity-[0.025]"
        style={{
          backgroundImage: paperSvg,
          backgroundSize: "420px 420px",
        }}
      />
    </>
  );
}
