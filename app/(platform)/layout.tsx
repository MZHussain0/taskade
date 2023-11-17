import { ClerkProvider } from "@clerk/nextjs";
type Props = {
  children: React.ReactNode;
};

const PlatformLayout = ({ children }: Props) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
