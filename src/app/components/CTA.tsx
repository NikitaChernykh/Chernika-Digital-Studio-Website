export function CTA() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-border pb-[calc(3rem+env(safe-area-inset-bottom))]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-sm text-muted-foreground text-center md:text-left">
          <div className="max-w-sm md:max-w-none">
            <span className="font-medium text-foreground">Chernika Digital</span> · Dubai, UAE · Mobile App MVPs
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <a href="https://geogenius.app/" target="_blank" rel="noopener noreferrer" className="min-h-11 inline-flex items-center hover:text-foreground transition-colors">
              GeoGenius
            </a>
            <a href="https://handy.watch/" target="_blank" rel="noopener noreferrer" className="min-h-11 inline-flex items-center hover:text-foreground transition-colors">
              Handy.Watch
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {year} Chernika Digital - FZCO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
