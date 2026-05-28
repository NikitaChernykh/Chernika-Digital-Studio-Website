import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "GeoGenius",
      tagline: "The best way to learn geography",
      description: "Gamified geography learning app for iOS. Learn countries and capitals through continent-based lessons with progressive advancement and a friendly companion character.",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop&auto=format",
      tags: ["Education", "iOS", "Gamification"],
      link: "https://geogenius.app/",
      stats: [
        { label: "Category", value: "Education" },
        { label: "Platform", value: "iOS" },
        { label: "Type", value: "Mobile App" }
      ]
    },
    {
      title: "Handy",
      tagline: "Discover best smartwatch clock faces",
      description: "Premium clock face marketplace for Fitbit devices. Browse and discover beautiful watch faces for Versa, Versa 2, Versa 3, Sense, and Ionic models.",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=600&fit=crop&auto=format",
      tags: ["Wearables", "E-commerce", "Design"],
      link: "https://handy.watch/",
      stats: [
        { label: "Category", value: "Wearables" },
        { label: "Platform", value: "Web" },
        { label: "Type", value: "Marketplace" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl mb-6">
            Current Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Live products we've shipped. Real apps solving real problems for real users.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-4xl lg:text-5xl">
                    {project.title}
                  </h3>

                  <p className="text-xl text-primary/80">
                    {project.tagline}
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-border">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-sm text-muted-foreground mb-1">
                          {stat.label}
                        </div>
                        <div className="font-medium">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-all hover:scale-105 group"
                  >
                    Visit Project
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
