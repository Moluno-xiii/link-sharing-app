"use client";

import HeaderLinks from "@/components/header/HeaderLinks";
import HeaderLogo from "@/components/header/HeaderLogo";
import Button from "@/components/UI/Button";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="left-0 right-0 m-6 flex flex-row items-center justify-between rounded-xl bg-white p-6">
      <HeaderLogo />
      <HeaderLinks />
      <Button variant="secondary" text="preview" />
    </header>
  );
};

export default Header;
