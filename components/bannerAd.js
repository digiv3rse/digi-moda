"use client";
import Script from "next/script";

export default function BannerAd() {
  return (
    <>
      <div>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6589975999855442"
          crossorigin="anonymous"
        />
        <ins
          className="adsbygoogle"
          style="display:block"
          dataAdClient="ca-pub-6589975999855442"
          dataAdSlot="1388089584"
          data-ad-format="auto"
          dataFullWidthResponsive="true">
        </ins>
        <Script id="Adsence" strategy="worker">{`(adsbygoogle = window.adsbygoogle || []).push({ });`}</Script>
      </div>
    </>
  );
}
