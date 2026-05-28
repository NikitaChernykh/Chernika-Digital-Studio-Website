import { ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";
import { HeroBackground } from "./HeroBackground";

function BerryIcon() {
  return (
    <span className="relative flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden>
      <span className="absolute h-3.5 w-3.5 rounded-full bg-primary shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25)]" />
      <span className="absolute -top-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-emerald-400/90" />
      <span className="absolute left-1 top-0.5 h-1 w-1 rounded-full bg-white/70" />
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden pt-[calc(4.5rem+env(safe-area-inset-top))] md:items-center md:justify-center">
      <HeroBackground />

      <div className="relative z-10 flex w-full flex-1 flex-col md:justify-center">
        {/* Mobile: reserve upper area for the 3D berry */}
        <div className="min-h-[36vh] flex-1 md:hidden" aria-hidden />

        <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 md:px-8 md:py-16 lg:py-24 text-center">
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            <div className="mx-auto inline-flex max-w-full items-center gap-2 px-3 py-2 sm:px-4 bg-primary/10 border border-primary/25 rounded-full text-xs sm:text-sm text-primary/90 backdrop-blur-md">
              <BerryIcon />
              <span className="text-left sm:text-center">Mobile Apps That People Actually Enjoy</span>
            </div>

            <h1 className="text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight drop-shadow-sm">
              We Ship Apps
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Fast
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-1">
              Gamified experiences, educational adventures, and delightful mobile apps.
              <span className="hidden sm:inline">
                {" "}
                We turn ideas into engaging products that users love to interact with.
              </span>
            </p>

            {/* Desktop / tablet only — mobile shows 3D instead */}
            <div className="hidden md:flex flex-wrap justify-center gap-4 pt-2 md:pt-4">
              <div className="flex items-center justify-center gap-2 text-sm rounded-full border border-primary/15 bg-primary/5 px-4 py-2.5 backdrop-blur-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Rapid MVP Launch</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm rounded-full border border-primary/15 bg-primary/5 px-4 py-2.5 backdrop-blur-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Gamification Experts</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm rounded-full border border-primary/15 bg-primary/5 px-4 py-2.5 backdrop-blur-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Rocket className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">iOS & Android</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-4 md:pt-8 max-w-sm sm:max-w-none mx-auto">
              <a
                href="#projects"
                className="group flex min-h-12 items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 active:scale-[0.98] transition-all sm:hover:scale-105 shadow-lg shadow-primary/30 text-base"
              >
                See What We&apos;ve Built
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex min-h-12 items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border border-primary/25 text-foreground rounded-full hover:bg-primary/10 active:scale-[0.98] transition-all sm:hover:scale-105 backdrop-blur-md text-base"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-12 left-1/2 z-10 hidden sm:block -translate-x-1/2 motion-safe:animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
}
