import React from "react";
import Image from "next/image";
const BrandLogo = () => {
  return (
    <div>
      <Image
        src="/images/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="hidden lg:block"
      />
      <Image
        src="/images/logo-sm.png"
        alt="logo_sm"
        width={90}
        height={90}
        className="lg:hidden"
      />
    </div>
  );
};

export default BrandLogo;
