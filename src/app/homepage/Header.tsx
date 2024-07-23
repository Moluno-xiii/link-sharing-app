"use client"

import HeaderLinks from "@/components/header/HeaderLinks";
import HeaderLogo from "@/components/header/HeaderLogo";
import Button from "@/components/UI/Button";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="p-6 flex flex-row justify-between items-center rounded-xl m-6 left-0 right-0 bg-white">
        <HeaderLogo />
        <HeaderLinks />
        <Button variant="secondary" text="preview" />
    </header>
  );
};

export default Header;
