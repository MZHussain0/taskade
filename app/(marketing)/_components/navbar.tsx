import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b border-slate-800 shadow-sm bg-slate-900 flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <Logo />

        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button
            variant={"outline"}
            className="bg-slate-900 border-slate-700"
            size={"sm"}
            asChild>
            <Link href={"/sign-in"}>Login</Link>
          </Button>
          <Button
            size={"sm"}
            asChild
            className="border-slate-700 bg-white text-black">
            <Link href={"/sign-up"}>Get Taskade for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
