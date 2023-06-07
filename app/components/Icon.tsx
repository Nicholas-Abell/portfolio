import React from "react";
import Link from "next/link";

type IconPops = {
  reactIcon: any;
  url: string;
};

const Icon: React.FC<IconPops> = ({ reactIcon, url }) => {
  return (
    <Link href={url} className="neon rounded-full cursor-pointer p-3">
      {reactIcon}
    </Link>
  );
};

export default Icon;
