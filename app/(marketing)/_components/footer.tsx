import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="fixed bottom-0 w-full  p-4 border-t border-slate-800 ">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <Logo />

        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button variant={"ghost"} size={"sm"}>
            Privacy Policy
          </Button>
          <Button size={"sm"} variant={"ghost"}>
            Terms of service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
