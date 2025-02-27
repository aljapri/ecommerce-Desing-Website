import React from "react";

function Map() {
  return (
    <div className="z-50">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.174045078521!2d50.046876700000006!3d26.450118199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fda8da080ac1%3A0xed655d86332f4621!2z2YXYtdmG2Lkg2KfZhNix2YjZitmE2Yog2YTYo9mG2LjZhdipINin2YTYp9mE2YXZhtmK2YjZhQ!5e0!3m2!1sar!2s!4v1740665632605!5m2!1sar!2s"
        width="100%"
        height="480"
        className="rounded-lg max-w-[300px] w-full mx-auto"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
