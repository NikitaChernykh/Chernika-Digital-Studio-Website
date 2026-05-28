import { Smartphone, Zap, Rocket } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App MVPs",
      description: "iOS and Android apps built for speed. We focus on core features that matter, getting your product to market fast."
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description: "Quick results without waste. Our streamlined process means you see progress daily, not quarterly."
    },
    {
      icon: Rocket,
      title: "Launch Ready",
      description: "From concept to app store submission. We handle the technical details so you can focus on your users."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl mb-6">
            Mobile-First Digital Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We specialize in building engaging mobile experiences that users love.
            Fast, focused, and built to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all hover:scale-105"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
