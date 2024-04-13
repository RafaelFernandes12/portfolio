import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
        <div className="flex flex-col mt-6">
          <span className="font-semibold">Social</span>
          <div className="flex">
            <Link href="https://github.com/RafaelFernandes12">
              <span className="border-b-[1px] border-prettyYellow hover:border-b-0">Github|</span>
            </Link>
            <Link href="https://www.linkedin.com/in/rafaelfernandes-7aba69221/">
              <span className="border-b-[1px] border-prettyYellow hover:border-b-0">Linkedin</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mt-6 gap-2">
        <Link href="https://github.com/RafaelFernandes12">
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/rafaelfernandes-7aba69221/">
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  );
}
  