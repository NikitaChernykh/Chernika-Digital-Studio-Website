import { ExternalLink } from "lucide-react";
import geoGeniusImage from "@/assets/img/portfolio/geo_genius_project.jpg";
import geoGeniusSplash from "@/assets/img/portfolio/geo_genius_splash.png";
import handyWatchImage from "@/assets/img/portfolio/handy_watch_project.jpg";
import handyWatchPromo from "@/assets/img/portfolio/handy_watch_promo.png";
import { ProjectVisual } from "./ProjectVisual";

const projects = [
  {
    title: "GeoGenius",
    tagline: "The best way to learn geography",
    description:
      "Gamified geography learning app for iOS. Learn countries and capitals through continent-based lessons with progressive advancement and a friendly companion character.",
    image: geoGeniusImage,
    images: [geoGeniusImage, geoGeniusSplash],
    visual: "browser" as const,
    tags: ["Education", "iOS", "Gamification"],
    link: "https://geogenius.app/",
    stats: [
      { label: "Category", value: "Education" },
      { label: "Platform", value: "iOS" },
      { label: "Type", value: "Mobile App" },
    ],
  },
  {
    title: "Handy.Watch",
    tagline: "Discover best smartwatch clock faces",
    description:
      "Premium clock face marketplace for Fitbit devices. Browse and discover beautiful watch faces for Versa, Versa 2, Versa 3, Sense, and Ionic models.",
    image: handyWatchImage,
    images: [handyWatchImage, handyWatchPromo],
    visual: "phone" as const,
    tags: ["Wearables", "E-commerce", "Design"],
    link: "https://handy.watch/",
    stats: [
      { label: "Category", value: "Wearables" },
      { label: "Platform", value: "Web" },
      { label: "Type", value: "Marketplace" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(139,92,246,0.06),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary mb-3 sm:mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6">Current Projects</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Live products we&apos;ve shipped. Real apps solving real problems for real users.
          </p>
        </div>

        <div className="space-y-10 sm:space-y-16 lg:space-y-24">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;

            return (
              <article
                key={project.title}
                className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-card/40 p-4 sm:p-6 lg:p-10 backdrop-blur-sm transition hover:border-primary/30"
              >
                <div
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-14 items-center ${
                    reversed ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block order-1 ${reversed ? "lg:col-start-1 lg:row-start-1" : ""}`}
                    aria-label={`View ${project.title}`}
                  >
                    <ProjectVisual
                      src={project.image}
                      images={project.images}
                      alt={project.title}
                      url={project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      variant={project.visual}
                    />
                  </a>

                  <div className={`space-y-5 sm:space-y-6 order-2 ${reversed ? "lg:col-start-2" : ""}`}>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-2 sm:mt-3 text-lg sm:text-xl text-primary/90">{project.tagline}</p>
                    </div>

                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 rounded-xl border border-white/10 bg-background/40 p-4 sm:p-5">
                      {project.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-xs sm:text-sm text-muted-foreground mb-1">
                            {stat.label}
                          </div>
                          <div className="font-medium text-sm sm:text-base">{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full sm:w-auto sm:inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all sm:hover:gap-3"
                    >
                      Visit Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
