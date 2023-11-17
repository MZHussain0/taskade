import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

const Logo = (props: Props) => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex md:items-center ">
        <Image src={"/logo.svg"} alt="Logo" width={30} height={30} />
        <p className={cn("text-lg text-neutral-200", headingFont.className)}>
          Taskade
        </p>
      </div>
    </Link>
  );
};

export default Logo;
