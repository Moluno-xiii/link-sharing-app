"use client";

import HeaderLinks from "@/components/header/HeaderLinks";
import HeaderLogo from "@/components/header/HeaderLogo";
import Button from "@/components/UI/Button";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <header className="left-0  right-0 md:m-6 flex flex-row items-center justify-between md:rounded-xl bg-white p-4 md:p-6">
      <HeaderLogo />
      <HeaderLinks />
      <div className="hidden md:inline-block">
        <Button variant="secondary" text="preview" />
      </div>
      <div className="inline-block md:hidden">
        <Button variant="icon" icon={MdOutlineRemoveRedEye} />
      </div>
    </header>
  );
};

export default Header;
