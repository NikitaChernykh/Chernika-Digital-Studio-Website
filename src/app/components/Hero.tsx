import { ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-background to-purple-600/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.08),transparent_50%)]" />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        <div className="space-y-8">
          {/* Fun badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Mobile Apps That People Actually Enjoy</span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">
            We Make Apps
            <span className="block bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Fun & Fast
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Gamified experiences, educational adventures, and delightful mobile apps.
            We turn ideas into engaging products that users love to interact with.
          </p>

          {/* Quick stats/features */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground">Rapid MVP Launch</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground">Gamification Experts</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Rocket className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground">iOS & Android</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
            >
              See What We've Built
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-border text-foreground rounded-lg hover:bg-card transition-all hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
}
