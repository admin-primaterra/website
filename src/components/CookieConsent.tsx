'use client';
import { useState, useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const CONSENT_KEY = 'cookie_consent_choice';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === 'accepted') {
      setConsented(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    document.cookie = 'cookie_consent=true; max-age=2592000; path=/; SameSite=Lax';
    setConsented(true);
    setVisible(false);
    window.dispatchEvent(new CustomEvent('cookieConsentAccepted'));
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  };

  return (
    <>
      {consented && PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 px-6 py-5">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-gray-300 text-sm flex-1">
              We use a Meta Pixel cookie to understand how people find our music online.
              No data is collected without your consent.{' '}
              <Link href="/privacy" className="underline text-white hover:text-red-400 transition">
                Privacy Policy
              </Link>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 text-sm text-gray-400 border border-gray-600 hover:border-gray-400 transition rounded"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 text-sm font-semibold bg-red-600 hover:bg-red-700 text-white transition rounded"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
