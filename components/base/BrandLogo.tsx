import React from "react";
import Image from "next/image";
const BrandLogo = () => {
  return (
    <div>
      <Image src="/images/logo.png" alt="logo" width={100} height={100} />
    </div>
  );
};

export default BrandLogo;
