import { Smartphone, Zap, Rocket } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App MVPs",
      description:
        "iOS and Android apps built for speed. We focus on core features that matter, getting your product to market fast.",
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description:
        "Quick results without waste. Our streamlined process means you see progress daily, not quarterly.",
    },
    {
      icon: Rocket,
      title: "Launch Ready",
      description:
        "From concept to app store submission. We handle the technical details so you can focus on your users.",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6">
            Mobile-First Digital Products
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            We specialize in building engaging mobile experiences that users love.
            Fast, focused, and built to scale.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors md:hover:scale-[1.02]"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
