"use client";
import Script from "next/script";

export default function inArticle() {
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
          style="display:block; text-align:center;"
          dataAdLayout="in-article"
          dataAdFormat="fluid"
          dataAdClient="ca-pub-6589975999855442"
          dataAdSlot="8570906614"></ins>
        <Script
          id="Adsence"
          strategy="worker">{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
      </div>
    </>
  );
}
