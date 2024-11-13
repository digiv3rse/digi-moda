import { useEffect } from 'react';
  
  const AdBanner = (props) => {
    useEffect(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.log(err);
      }
    }, []);
  
    return (
      <ins
        className="adsbygoogle adbanner-customize"
        style={{
          display: 'block',
          overflow: 'hidden',
        }}
        data-ad-client="ca-pub-6589975999855442"
        data-ad-slot="1388089584"
        data-ad-format="auto"
        data-full-width-responsive="true"
        {...props}
      />
    );
  };
  export default AdBanner;