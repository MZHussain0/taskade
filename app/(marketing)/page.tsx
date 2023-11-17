import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MedalIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

type Props = {};

const headingFont = localFont({
  src: [
    {
      path: "../../public/fonts/font.woff2",
    },
  ],
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = (props: Props) => {
  return (
    <div className=" flex items-center justify-center flex-col">
      <div
        className={cn(
          " flex items-center justify-center flex-col",
          headingFont.className
        )}>
        <div className="mb-4 flex items-center border p-4 shadow-sm bg-amber-100 text-amber-700 rounded-full uppercase">
          <MedalIcon className="h-6 w-6 mr-2" />
          No 1 task management app
        </div>

        <h1 className=" text-3xl md:text-6xl text-center text-neutral-200 mb-6">
          Taskade helps team move
        </h1>

        <div className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-4">
          work forward.
        </div>
      </div>

      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}>
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to home office, the way your team works is unique -
        accomplish it all with taskade.
      </div>

      <Button
        className="mt-6 bg-amber-200 hover:bg-amber-300 text-black"
        size={"lg"}>
        <Link href={"/sign-up"}>Get Taskade for free.</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
