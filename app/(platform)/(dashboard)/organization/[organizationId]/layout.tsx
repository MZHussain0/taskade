import OrgControl from "./_components/OrgControl";

type Props = {
  children: React.ReactNode;
};

const OrganisationIdLayout = ({ children }: Props) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganisationIdLayout;
