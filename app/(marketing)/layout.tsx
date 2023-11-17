import React from "react";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="h-full bg-slate-950 text-white">
      {/* Navbar */}
      <Navbar />
      <div className="pt-40 pb-20 ">{children}</div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
