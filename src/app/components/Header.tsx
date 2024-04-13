"use client";
import profile from "@/assets/profile.jpeg";
import VerifiedIcon from "@mui/icons-material/Verified";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();

  return (
    <div className='flex justify-between'>
      <Link href='/'>
        <div className="flex items-center gap-2">
          <Image src={profile} alt='' className="rounded-full w-7 h-7"/>
          <p className="font-bold font-sans hover:text-prettyBlue">Rafael Fernandes</p>
          <VerifiedIcon className='animate-changeColors'/>
        </div>
      </Link>
      <ul className='inline-flex gap-4'>
        <li
          className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[5px] after:bg-prettyPink 
            ${pathname === "/" ? "border-b-[5px] border-cyan-300 after:w-0 after:h-0" : ""}
          after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}>
          <Link href='/'>
            <span className="font-semibold">01 </span> 
            Home
          </Link>
        </li>
        <li 
          className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[5px] after:bg-prettyPink 
          ${pathname === "/Sobre" ? "border-b-[5px] border-cyan-300 after:w-0 after:h-0" : ""}
          after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}>
          <Link href='/Sobre'>
            <span className="font-semibold">02 </span> 
          Sobre mim
          </Link>
        </li>
        <li
          className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[5px] after:bg-prettyPink 
          ${pathname === "/Contato" ? "border-b-[5px] border-cyan-300 after:w-0 after:h-0" : ""}
          after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}>
          <Link href='/Contato'>
            <span className="font-semibold">03 </span> 
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
}
  