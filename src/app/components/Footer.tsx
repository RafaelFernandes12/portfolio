import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex justify-between mb-10 text-sm" >
      <hr className="border-prettyPink absolute w-full left-0" />
      <div className="flex gap-8">
        <div className="flex flex-col  mt-6">
          <span className="font-semibold">© Desde 2024</span>
          <Link href="/">
            <span className="border-b-[1px] border-prettyYellow hover:border-b-0">Rafael Fernandes</span>
          </Link>
        </div>

      </div>
      <div className="flex mt-6 gap-2">
        <p>Todos os direitos reservados <br/> a Rafael Fernandes</p>
      </div>
    </div>
  );
}
  