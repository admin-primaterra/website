import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Primaterra',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 px-6 py-24">
      <div className="max-w-2xl mx-auto space-y-8">

        <div>
          <Link href="/" className="text-sm text-gray-500 hover:text-white transition">
            ← Back to site
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-white uppercase tracking-widest">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm">Last updated: June 2026</p>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Who we are</h2>
          <p>
            We&apos;re Primaterra, an independent band based in Berlin. This website is our
            personal project — not a company. We try to keep data collection as minimal
            as possible.
          </p>
          <p>
            For any questions about your data, email us at{' '}
            <a href="mailto:privacy@primaterraband.com" className="underline hover:text-white transition">
              privacy@primaterraband.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Meta Pixel (Facebook/Instagram)</h2>
          <p>
            If you click <strong className="text-white">Accept</strong> on our cookie banner,
            we load the Meta Pixel — a small tracking script from Meta (Facebook/Instagram).
            It helps us understand how people discover our music through Meta ads, without
            us seeing who you are personally.
          </p>
          <p>
            If you click <strong className="text-white">Decline</strong>, the pixel is never
            loaded and no data is sent to Meta from your visit. Your choice is saved in your
            browser so we don&apos;t ask again.
          </p>
          <p>
            Meta&apos;s own privacy policy applies to data they collect:{' '}
            <a
              href="https://www.facebook.com/privacy/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              facebook.com/privacy/policy
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Email collection</h2>
          <p>
            If you sign up for updates through our site, we collect your email address.
            We use it only to send you news about Primaterra — new music, shows, that
            kind of thing. Nothing else.
          </p>
          <p>
            Your email is stored in Google Sheets, which is hosted by Google on EU-compliant
            infrastructure. We don&apos;t share it with anyone.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Your rights</h2>
          <p>
            You can unsubscribe from our emails at any time — every message we send
            includes an unsubscribe link.
          </p>
          <p>
            You can also email us at{' '}
            <a href="mailto:privacy@primaterraband.com" className="underline hover:text-white transition">
              privacy@primaterraband.com
            </a>{' '}
            to ask us to delete your data, correct it, or just to know what we have.
            We&apos;ll respond within 30 days.
          </p>
          <p>
            If you&apos;re in the EU, you also have the right to lodge a complaint with your
            local data protection authority. In Germany, that&apos;s the{' '}
            <a
              href="https://www.bfdi.bund.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              Bundesbeauftragter für den Datenschutz
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Cookies</h2>
          <p>
            We use a single first-party cookie (<code className="text-red-400">cookie_consent</code>)
            to remember that you&apos;ve accepted tracking. No tracking cookies are set if you decline.
            Your consent choice is stored in your browser&apos;s local storage.
          </p>
        </section>

      </div>
    </main>
  );
}
