"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || isOpen
          ? "bg-[#060d1f]/70 backdrop-blur-md shadow-[0_0_40px_rgba(48,90,208,0.20)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* logo */}
        <Link href="/" className="text-2xl font-extrabold text-[#305AD0]">
          JP
        </Link>

        {/* desktop naviation menu */}
        <nav className="hidden md:flex space-x-10 font-medium text-lg text-white/80">
          <Link
            href="#home"
            className="hover:text-[#5a8af5] transition duration-200"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#5a8af5] transition duration-200"
          >
            Experience
          </Link>
          <Link
            href="#lab"
            className="hover:text-[#5a8af5] transition duration-200"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="hover:text-[#5a8af5] transition duration-200"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#5a8af5] transition duration-200"
          >
            Contact
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded text-white/80 hover:text-[#5a8af5] trasition duration-200"
        >
          <HiBars3 className="size-6" />
        </button>
      </div>

      {/* mobile menu  */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-3 text-base font-medium text-white/80">
            <Link
              href="#home"
              className="hover:text-[#5a8af5] transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-[#5a8af5] transition duration-200"
                  onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#lab"
              className="hover:text-[#5a8af5] transition duration-200"
                  onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#projects"
                  onClick={() => setIsOpen(false)}
              className="hover:text-[#5a8af5] transition duration-200"
            >
              Projects
            </Link>
            <Link
              href="#contact"
                  onClick={() => setIsOpen(false)}
              className="hover:text-[#5a8af5] transition duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
