import React from "react";

const StreetView = () => {
  return (
    <div className="relative w-full h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1723568424846!6m8!1m7!1sCAoSLEFGMVFpcE9TZzhuZFZfR1Q4SllJX2FWQ2FwdlhCZ2dWUThRaGZpTEF0aXJY!2m2!1d41.1489334!2d-8.614613499999999!3f84.03295810538297!4f-4.363316723675823!5f0.7820865974627469"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default StreetView;
