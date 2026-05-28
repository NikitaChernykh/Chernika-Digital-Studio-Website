import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6">
            Let's Build Together
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to ship your mobile app MVP? Get in touch and let's make it happen.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl mb-6 sm:mb-8">Start Your Project</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3.5 text-base bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3.5 text-base bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-3.5 text-base bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>Mobile App MVP</option>
                  <option>iOS App</option>
                  <option>Android App</option>
                  <option>Cross-Platform App</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3.5 text-base bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-12 px-8 py-4 text-base bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all sm:hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">Email</h4>
                  <a
                    href="mailto:hello@chernikadigital.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@chernikadigital.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">Location</h4>
                  <p className="text-muted-foreground">
                    Building A1, DDP<br />
                    Dubai Digital Park<br />
                    Dubai Silicon Oasis<br />
                    Dubai, UAE
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-card to-purple-600/10 rounded-2xl p-5 sm:p-8 border border-primary/20">
              <h4 className="text-xl mb-4">Why Choose Us?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ship MVPs in weeks, not months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Experienced mobile app specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Quality without compromise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Based in Dubai, serving globally</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
