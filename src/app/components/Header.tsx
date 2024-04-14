"use client";
import profile from "@/assets/profile.jpeg";
import VerifiedIcon from "@mui/icons-material/Verified";
import Image from "next/image";
import Link from "next/link";
import { MenuOverlay } from "./MenuOverlay";

export default function Header() {


  return (
    <header className='flex justify-between text-lg max-md:text-base'>
      <Link href='/'>
        <div className="flex items-center gap-2">
          <Image src={profile} alt='' className="rounded-full w-7 h-7"/>
          <p className="font-bold font-sans hover:text-prettyBlue max-sm:text-sm">Rafael Fernandes</p>
          <VerifiedIcon className='animate-changeColors'/>
        </div>
      </Link>
      <ul className='inline-flex gap-4 max-md:hidden'>
        <li
          className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[5px] after:bg-prettyPink 
          after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}>
          <Link href='#about'>
            <span className="font-semibold">01 </span> 
            Sobre mim
          </Link>
        </li>
        <li 
          className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[5px] after:bg-prettyPink 
          after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}>
          <Link href='#projects'>
            <span className="font-semibold">02 </span> 
              Projetos
          </Link>
        </li>
        <li
          className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[5px] after:bg-prettyPink 
          after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}>
          <Link href='#contact'>
            <span className="font-semibold">03 </span> 
              Contato
          </Link>
        </li>
      </ul>
      <MenuOverlay />
    </header>
  );
}
  