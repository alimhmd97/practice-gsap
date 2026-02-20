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
    <nav className='w-full flex justify-between items-center px-2'>
      <Link href="/" className='flex items-center gap-2'>
      <Image src="/images/logo.png" alt="Velvet pour" width={30} height={30} />
      <p>Velvet pour</p>
      </Link>
      <ul className="flex items-center gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            className="flex items-center gap-2"
          >
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
