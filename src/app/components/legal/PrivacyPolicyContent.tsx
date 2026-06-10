import { Link } from "react-router";

export function PrivacyPolicyContent() {
  return (
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <section>
        <h2 className="text-xl sm:text-2xl text-foreground mb-4">1. About this Privacy Policy</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg text-foreground mb-2">1.1 Who we are</h3>
            <p>
              Chernika Digital - FZCO ("Chernika Digital," "we," or "us") is a studio that designs, builds, and operates mobile apps, games, websites, and related digital products. We are the controller of personal information processed through our Services. Our registered address is Building A1, DDP, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">1.2 What this policy covers</h3>
            <p>
              This Privacy Policy explains how we collect, use, share, and protect personal information when you use the digital products and services we publish. In this policy, <strong className="text-foreground">"Services"</strong> means all apps, games, websites, subscriptions, and related digital services we operate or publish, including our Products and our studio website. <strong className="text-foreground">"Products"</strong> means the individual apps, games, websites, and digital offerings we publish under the Chernika Digital name or our product brands. <strong className="text-foreground">"Apps"</strong> means our mobile applications. <strong className="text-foreground">"Websites"</strong> means websites and online properties we control.
            </p>
            <p className="mt-2">
              This policy applies to all Services unless we provide a separate privacy notice for a specific Product. Where a separate notice applies, that notice applies in addition to or instead of this policy as stated for that Product.
            </p>
            <p className="mt-2">
              Our Services may link to third-party websites or services. Those third-party properties are not operated by Chernika Digital and are not covered by this policy.
            </p>
            <p className="mt-2">
              Your use of the Services is also governed by our{" "}
              <Link to="/terms-of-service" className="text-primary hover:text-primary/80 transition-colors">
                Terms of Service
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">1.3 Legal framework</h3>
            <p>
              We process personal information in accordance with applicable data protection laws, including the General Data Protection Regulation ("GDPR"), the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data ("UAE PDPL"), and, where applicable, the California Consumer Privacy Act as amended by the California Privacy Rights Act ("CCPA/CPRA").
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">1.4 Security</h3>
            <p>
              We use technical and organizational measures designed to protect personal information, including encrypted transmission and encrypted storage where appropriate. We review these measures regularly as technology and risks evolve.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">1.5 Changes to this policy</h3>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will post the updated policy on our website and update the "last updated" date below. Where required by law, we will provide additional notice or request consent before changes take effect.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl text-foreground mb-4">2. Our Products</h2>
        <div className="space-y-4">
          <p>We publish multiple Products under the Chernika Digital studio. Our current Products include, for example:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-foreground">Chernika Digital</strong> — our studio website at{" "}
              <a href="https://chernikadigital.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                chernikadigital.com
              </a>
            </li>
            <li>
              <strong className="text-foreground">GeoGenius</strong> — a geography learning app at{" "}
              <a href="https://geogenius.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                geogenius.app
              </a>
            </li>
            <li>
              <strong className="text-foreground">Handy.Watch</strong> — a smartwatch clock face marketplace at{" "}
              <a href="https://handy.watch" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                handy.watch
              </a>
            </li>
          </ul>
          <p>
            We may launch additional apps, games, websites, and digital products in the future. Unless we state otherwise, this Privacy Policy also applies to those future Products.
          </p>
          <p>
            The data we collect may vary depending on the Product you use. For example, an education app may collect learning progress, while a marketplace may collect browsing and purchase activity. The sections below describe the categories of data we may process across our Services.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl text-foreground mb-4">3. Information we collect</h2>
        <p className="mb-4">When you use the Services, we may process the following categories of personal information ("Data").</p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg text-foreground mb-2">3.1 Website usage data</h3>
            <p>If you visit our websites, we may collect technical information needed to operate, secure, and improve them, such as:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP address;</li>
              <li>date and time of access;</li>
              <li>pages viewed and actions taken;</li>
              <li>browser type and version;</li>
              <li>operating system and device information;</li>
              <li>referring URL; and</li>
              <li>language settings.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">3.2 Account and authentication data</h3>
            <p>Depending on how you register or sign in, we may process:</p>

            <div className="mt-2">
              <h4 className="text-foreground font-medium">Direct registration with Chernika Digital:</h4>
              <ul className="list-disc pl-6">
                <li>email address and name.</li>
              </ul>
            </div>

            <div className="mt-2">
              <h4 className="text-foreground font-medium">Apple, Google, or Meta/Facebook sign-in:</h4>
              <ul className="list-disc pl-6">
                <li>email address and name, if provided by the sign-in provider;</li>
                <li>language, country, and time zone;</li>
                <li>device, browser, and IP address; and</li>
                <li>profile information made available by the provider, such as a profile picture.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">3.3 Purchase and subscription data</h3>
            <p>When you make purchases in the Services, we may process:</p>
            <ul className="list-disc pl-6">
              <li>country and billing region;</li>
              <li>subscription status, plan, and transaction identifiers;</li>
              <li>purchase history and renewal status; and</li>
              <li>limited payment-related information provided by Apple, Google, Stripe, RevenueCat, or other authorized payment and subscription processors.</li>
            </ul>
            <p className="mt-2">We do not store your full payment card details on our own systems.</p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">3.4 App and product usage data</h3>
            <p>When you use our apps and products, we may process information such as:</p>
            <ul className="list-disc pl-6">
              <li>app launches, sign-ups, logins, and logouts;</li>
              <li>in-app purchases and subscription events;</li>
              <li>progress, lessons, features, purchases, or content completed within a Product;</li>
              <li>crash reports and performance data; and</li>
              <li>support requests and communications with us.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl text-foreground mb-4">4. How we use information</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg text-foreground mb-2">4.1 Purposes</h3>
            <p>We use Data for the following purposes:</p>
            <ul className="list-disc pl-6">
              <li>providing and operating the Services;</li>
              <li>creating and managing accounts;</li>
              <li>processing subscriptions, trials, and purchases;</li>
              <li>customer support and communications;</li>
              <li>personalizing your experience;</li>
              <li>analytics, product improvement, and research;</li>
              <li>marketing our own products, where permitted by law;</li>
              <li>security, fraud prevention, and abuse detection; and</li>
              <li>complying with legal obligations and enforcing our terms.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">4.2 Legal bases</h3>
            <p>Where GDPR applies, we rely on one or more of the following legal bases:</p>
            <ul className="list-disc pl-6">
              <li>your consent;</li>
              <li>performance of a contract with you;</li>
              <li>compliance with legal obligations; and/or</li>
              <li>our legitimate interests, such as improving and securing the Services, provided those interests are not overridden by your rights.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl text-foreground mb-4">5. How we share information</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg text-foreground mb-2">5.1 General sharing</h3>
            <p>We share Data only when necessary to operate the Services, comply with law, respond to lawful requests, protect rights and safety, or with your consent.</p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">5.2 Service providers</h3>
            <p>We use carefully selected third-party providers to help us operate the Services. These may process Data on our behalf for hosting, analytics, authentication, payment processing, and customer support.</p>
            <p className="mt-2">Our current key service providers include:</p>
            <ul className="list-disc pl-6">
              <li>Google Firebase / Google Ireland Limited — app analytics, crash reporting, and performance monitoring;</li>
              <li>Mixpanel, Inc. — product analytics and usage insights;</li>
              <li>RevenueCat, Inc. — subscription management, entitlement validation, and purchase status;</li>
              <li>Meta Platforms, Inc. — authentication, analytics, and marketing measurement, where enabled.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">5.3 International transfers</h3>
            <p>
              Some of our service providers are located outside your country, including in the United States. Where required, we use appropriate safeguards for international transfers, such as the EU-US Data Privacy Framework, Standard Contractual Clauses, or other lawful transfer mechanisms.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl text-foreground mb-4">6. Retention</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg text-foreground mb-2">6.1 Active accounts</h3>
            <p>We retain Data for as long as your account is active and as needed to provide the Services.</p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">6.2 After account deletion</h3>
            <p>When you delete your account, we delete or anonymize Data unless retention is required for legal, tax, accounting, fraud prevention, or dispute resolution purposes.</p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">6.3 Aggregated data</h3>
            <p>We may retain aggregated or de-identified information that no longer identifies you for analytics and product improvement.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl text-foreground mb-4">7. Your rights</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg text-foreground mb-2">7.1 How to exercise your rights</h3>
            <p>
              To exercise the rights below, contact us at{" "}
              <a href="mailto:hello+legal@chernikadigital.com" className="text-primary hover:text-primary/80 transition-colors">
                hello+legal@chernikadigital.com
              </a>{" "}
              or write to Chernika Digital - FZCO, Building A1, DDP, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">7.2 Access and portability</h3>
            <p>You may request confirmation of whether we process your Data and receive a copy of it in a commonly used electronic format, where applicable.</p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">7.3 Correction and deletion</h3>
            <p>You may request correction of inaccurate Data or deletion of Data, subject to legal exceptions.</p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">7.4 Restriction and objection</h3>
            <p>You may request restriction of processing or object to processing based on legitimate interests, including direct marketing where applicable.</p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">7.5 Withdraw consent</h3>
            <p>Where processing is based on consent, you may withdraw consent at any time. Withdrawal does not affect processing that was lawful before withdrawal.</p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">7.6 California residents</h3>
            <p>
              If you are a California resident, you may have additional rights under CCPA/CPRA, including the right to know, delete, correct, and opt out of certain sharing for cross-context behavioral advertising, where applicable. We do not sell personal information for money.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">7.7 Complaints</h3>
            <p>You may lodge a complaint with your local data protection authority if you believe our processing violates applicable law.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl text-foreground mb-4">8. Cookies and similar technologies</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg text-foreground mb-2">8.1 What we use</h3>
            <p>
              Our websites may use cookies and similar technologies to operate the site, remember preferences, measure traffic, and improve performance. Cookies are small text files stored on your device by your browser.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">8.2 Types of cookies</h3>
            <ul className="list-disc pl-6">
              <li>Essential cookies needed for site functionality and security;</li>
              <li>Analytics cookies that help us understand how the site is used; and</li>
              <li>Preference cookies that remember settings such as language.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">8.3 Your choices</h3>
            <p>
              You can control cookies through your browser settings. Disabling certain cookies may affect site functionality. On mobile devices, you may also manage tracking permissions through your device or app settings, including Apple App Tracking Transparency where applicable.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl text-foreground mb-4">9. Analytics, subscriptions, and advertising</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg text-foreground mb-2">9.1 Firebase</h3>
            <p>
              We use Google Firebase to understand app usage, monitor crashes, and improve performance. Firebase may collect device identifiers, app events, and diagnostic data. Learn more in Google's privacy documentation at{" "}
              <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                firebase.google.com/support/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">9.2 Mixpanel</h3>
            <p>
              We use Mixpanel to understand how users interact with our apps and websites, measure feature usage, and improve the Services. Mixpanel may collect event data, device information, and identifiers associated with your use of the Services. Learn more at{" "}
              <a href="https://mixpanel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                mixpanel.com/legal/privacy-policy
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">9.3 RevenueCat</h3>
            <p>
              We use RevenueCat to manage subscriptions, validate purchases, and determine access to paid features. RevenueCat may process app user identifiers, subscription status, transaction metadata, and related purchase information received from Apple, Google, or other authorized payment providers. Learn more at{" "}
              <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                revenuecat.com/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">9.4 Meta/Facebook</h3>
            <p>
              Where enabled, we use Meta technologies for sign-in, analytics, and marketing measurement. Meta may receive device and event data related to your use of the Services. You can learn more in Meta's privacy materials and manage certain settings through your Meta account or device privacy controls.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl text-foreground mb-4">10. Children</h2>
        <div className="space-y-4">
          <p>
            The Services are not directed to children under thirteen (13), and we do not knowingly collect personal information from children under 13 without appropriate parental consent. If you believe a child has provided us personal information without consent, contact us and we will take appropriate steps to delete it.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl text-foreground mb-4">11. Contact</h2>
        <div className="space-y-4">
          <p>
            For privacy questions, data subject requests, or complaints, contact us at{" "}
            <a href="mailto:hello+legal@chernikadigital.com" className="text-primary hover:text-primary/80 transition-colors">
              hello+legal@chernikadigital.com
            </a>
            .
          </p>
          <p>
            For general support, contact{" "}
            <a href="mailto:hello@chernikadigital.com" className="text-primary hover:text-primary/80 transition-colors">
              hello@chernikadigital.com
            </a>
            .
          </p>
        </div>
      </section>

      <p className="text-sm pt-4 border-t border-border">
        This Privacy Policy was last updated on June 11, 2026.
      </p>
    </div>
  );
}
