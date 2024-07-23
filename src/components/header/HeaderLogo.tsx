import Image from "next/image";

const HeaderLogo: React.FC = () => {
  return (
    <>
      <Image
        alt="devlinks logo"
        src="/header-logo.svg"
        height={32}
        width={146}
        className="hidden md:inline-block"
      />
      <Image
        alt="devlinks logo"
        src="/header-logo-mobile.svg"
        height={26.67}
        width={26.67}
        className="md:hidden"
      />
    </>
  );
};

export default HeaderLogo;
