import CodeIcon from "@mui/icons-material/Code";
import Link from "next/link";
interface cardProps {
    bg: string,
    title: string,
    text: string,
    textColor:string,
    tech1: string,
    tech2: string,
    link:string 
}
export default function Card({bg,title,text,textColor,tech1,tech2,link}:cardProps){
  return(
    <div>
      <div 
        className={`transition ease-in-out hover:-translate-y-1 hover:scale-[1.03] w-56 h-72 
        bg-${bg} bg-cover bg-center rounded-xl flex items-center flex-col gap-6
        hover:brightness-50`}
      >
        <p className="text-xl mt-2 text-white font-semibold">{title}</p>
        <p className={`opacity-0 hover:opacity-100 text-${textColor} break-words h-96 px-3 font-semibold hover:cursor-default`}>
          {text}
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <div className="text-white bg-prettyPink py-0.5 font-semibold px-1 mt-2 text-sm rounded"><p>{tech1}</p></div>
          <div className="text-white bg-prettyPink py-0.5 font-semibold px-1 mt-2 text-sm rounded"><p>{tech2}</p></div>
        </div>
        <Link href={link}>
          <div className="flex items-center justify-between text-white gap-1 mt-2 bg-prettyPink p-2 rounded font-semibold">
            <p className="text-sm">Código</p>
            <CodeIcon className="text-sm"/>
          </div>
        </Link>
      </div>
    </div>

  );
}
