export function CTA() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <div>
            <span className="font-medium text-foreground">Chernika Digital</span> · Dubai, UAE · Mobile App MVPs
          </div>
          <div className="flex gap-8">
            <a href="https://geogenius.app/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              GeoGenius
            </a>
            <a href="https://handy.watch/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Handy
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
