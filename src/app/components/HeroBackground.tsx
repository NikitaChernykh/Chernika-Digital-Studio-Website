import { lazy, Suspense, useEffect, useState } from "react";

const HeroScene3D = lazy(() =>
  import("./HeroScene3D").then((m) => ({ default: m.HeroScene3D }))
);

function StaticFallback() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/12 via-background to-violet-700/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_45%,rgba(99,102,241,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_65%,rgba(139,92,246,0.12),transparent_50%)]" />
      <div className="absolute top-[18%] left-[12%] h-20 w-20 rounded-full bg-indigo-500/20 blur-2xl motion-safe:animate-pulse md:h-28 md:w-28 md:blur-3xl" />
      <div className="absolute bottom-[28%] right-[10%] h-24 w-24 rounded-full bg-violet-600/20 blur-2xl motion-safe:animate-pulse md:h-36 md:w-36 md:blur-3xl" />
    </>
  );
}

function useHeroSceneConfig() {
  const [config, setConfig] = useState<{ enabled: boolean; quality: "mobile" | "desktop" }>({
    enabled: false,
    quality: "desktop",
  });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");

    const update = () => {
      setConfig({
        enabled: !reducedMotion.matches,
        quality: mobile.matches ? "mobile" : "desktop",
      });
    };

    update();
    reducedMotion.addEventListener("change", update);
    mobile.addEventListener("change", update);

    return () => {
      reducedMotion.removeEventListener("change", update);
      mobile.removeEventListener("change", update);
    };
  }, []);

  return config;
}

export function HeroBackground() {
  const { enabled, quality } = useHeroSceneConfig();
  const isMobile = quality === "mobile";

  if (!enabled) {
    return <StaticFallback />;
  }

  return (
    <>
      <StaticFallback />
      <div className={`absolute inset-0 ${isMobile ? "opacity-95" : "opacity-85"}`}>
        <Suspense fallback={null}>
          <HeroScene3D quality={quality} />
        </Suspense>
      </div>
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${
          isMobile
            ? "from-background/5 via-transparent to-background/90"
            : "from-background/30 via-transparent to-background"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-0 ${
          isMobile
            ? "bg-[radial-gradient(ellipse_at_50%_28%,transparent_10%,var(--background)_72%)]"
            : "bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_75%)]"
        }`}
      />
    </>
  );
}
