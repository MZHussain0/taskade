import DashboardNavbar from "./_components/navbar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="h-full bg-slate-950 text-white">
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
