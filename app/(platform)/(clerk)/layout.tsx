import React from "react";

type Props = {
  children: React.ReactNode;
};

const ClerkLayout = ({ children }: Props) => {
  return (
    <div className="h-full flex items-center justify-center bg-slate-950">
      {children}
    </div>
  );
};

export default ClerkLayout;
