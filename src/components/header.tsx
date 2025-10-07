import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./nav-items";
import UserDropdown from "./user-dropdown";

const Header = () => {
  return (
    <header className="top-0 sticky header">
      <div className="container header-wrapper">
        <Link href={"/"}>
          <Image
            src={"/assets/icons/logo.svg"}
            alt="logo"
            width={140}
            height={32}
            className="w-auto h-8 cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
