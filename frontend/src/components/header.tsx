"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const linkStyles =
    "no-underline hover:!bg-[#471D19] hover:!text-white active:!bg-[#471D19] active:!text-white focus:!bg-[#471D19] focus:!text-white transition-all text-[#4a3933] font-medium px-3 py-2 rounded-md";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`navbar bg-[#f5f1e8] py-6 w-full fixed top-0 left-0 z-50 transition-transform duration-300 shadow-sm ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex-1 justify-center">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/favicon.ico"
              alt="Fonda Safaja"
              width={100}
              height={100}
              className="object-contain"
            />
            <ul className="menu menu-horizontal px-1 gap-6">
              <li>
                <Link href="/" className={linkStyles}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about_us" className={linkStyles}>
                  Sobre Nosaltres
                </Link>
              </li>
              <li>
                <Link href="/la_carta" className={linkStyles}>
                  La carta
                </Link>
              </li>
              <li>
                <Link href="/allotjament" className={linkStyles}>
                  Allotjament
                </Link>
              </li>
              <li>
                <Link href="/portal_wikilok" className={linkStyles}>
                  Portal Wikilok
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[180px]"></div>
    </>
  );
};

export default Header;