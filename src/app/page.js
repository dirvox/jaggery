import Main from "@/components/main/Main";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Meta Pixel Script 1 */}
      <Script id="meta-pixel-1" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '1564365828053343');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Meta Pixel Script 2 (Your NEW Pixel: 1859104931369446) */}
      <Script id="meta-pixel-2" strategy="afterInteractive">
        {`
          fbq('init', '1859104931369446');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Meta Pixel NoScript */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1564365828053343&ev=PageView&noscript=1"
        />
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1859104931369446&ev=PageView&noscript=1"
        />
      </noscript>

      <div>
        <Main />
      </div>
    </>
  );
}
