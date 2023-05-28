import React from "react";
import Link from "next/link";

const Icon = ({ reactIcon, url }) => {
  return (
    <Link href={url} className="neon rounded-full cursor-pointer p-3">
      {reactIcon}
    </Link>
  );
};

export default Icon;
