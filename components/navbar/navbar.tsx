'use client';
import Link from 'next/link';
import { navLinks } from './consts';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Navbar() {
  useGSAP(() => {
const navTween=gsap.timeline({
  scrollTrigger:{
    trigger:'nav',
    start:'bottom top',
   
  }});
  navTween.fromTo('nav',{backgroundColor:'transparent'}, {
    backgroundColor:'#00000050',
    backdropFilter:'blur(10px)',
    duration:1.5,
    ease:'power1.inOut'})

  });
  return (
    <nav
      className="w-full flex justify-between items-center min-h-16 sm:min-h-18 transition-[background-color,backdrop-filter] duration-500 ease-out"
      aria-label="Main navigation"
    >
      <div className="nav-inner w-full container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 py-4 px-4 sm:px-6 lg:px-8 2xl:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
        >
          <Image
            src="/images/logo.png"
            alt="Velvet pour"
            width={32}
            height={32}
            className="shrink-0"
          />
          <span className="font-modern-negra text-2xl sm:text-3xl -mb-1">
            Velvet pour
          </span>
        </Link>
        <ul className="flex items-center gap-6 sm:gap-8 lg:gap-10" role="list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                className="text-sm sm:text-base text-white/90 hover:text-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded py-1 transition-colors"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
