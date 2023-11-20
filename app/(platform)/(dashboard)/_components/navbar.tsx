import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { PlusIcon } from "lucide-react";
import MobileSidebar from "./mobileSiudebar";

type Props = {};

const DashboardNavbar = (props: Props) => {
  return (
    <nav className="fixed z-50 px-4 top-0 w-full h-14 border-b border-slate-600 shadow-sm bg-slate-900 flex items-center">
      {/* Mobile sidebar */}
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>

        <Button
          variant={"primary"}
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
          size={"sm"}>
          Create
        </Button>

        <Button
          variant={"primary"}
          size={"sm"}
          className=" rounded-sm  md:hidden h-auto py-1.5 px-2">
          <PlusIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl={"/organization/:id"}
          appearance={{
            baseTheme: dark,
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />

        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: "2rem",
                width: "2rem",
              },
            },
          }}
        />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
