import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* Adsense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1436861775123746"
      />
      {/* Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-G9QQ3ZVQPR`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'G-G9QQ3ZVQPR', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
      {/* Microsoft Clarity */}
      <Script
        dangerouslySetInnerHTML={{
          __html: `
         (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ik57b2cutd")`,
        }}
      />
    </>
  );
}
