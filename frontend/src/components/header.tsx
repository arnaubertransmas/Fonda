"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyles =
    "no-underline hover:!bg-[#471D19] hover:!text-white active:!bg-[#471D19] active:!text-white focus:!bg-[#471D19] focus:!text-white transition-all text-[#4a3933] font-medium px-3 py-2 rounded-md";

  const links = [
    { href: "/", label: "Inici" },
    { href: "/about_us", label: "Sobre Nosaltres" },
    { href: "/la_carta", label: "La carta" },
    { href: "/allotjament", label: "Allotjament" },
    { href: "/portal_wikilok", label: "Descobreix el Territori" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setVisible(false);
        setMenuOpen(false);
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
        className={`bg-[#f5f1e8] w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Desktop */}
        <div className="hidden md:flex flex-col items-center gap-4 py-6">
          <Link href="/">
            <Image
              src="/favicon.ico"
              alt="Fonda Safaja"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
          <ul className="menu menu-horizontal px-1 gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={linkStyles}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          <Link href="/">
            <Image
              src="/favicon.ico"
              alt="Fonda Safaja"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost btn-sm"
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-[#f5f1e8] border-t border-[#4a3933]/10 px-4 pb-4">
            <ul className="flex flex-col gap-1">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${linkStyles} block w-full`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="h-[70px] md:h-[180px]"></div>
    </>
  );
};

export default Header;