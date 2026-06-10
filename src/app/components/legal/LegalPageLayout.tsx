import { Header } from "../Header";
import { CTA } from "../CTA";

type LegalPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
          </div>
        </section>
        <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-12">
              {children}
            </article>
          </div>
        </section>
      </main>
      <CTA />
    </div>
  );
}
