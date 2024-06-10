import "@/app/css/index.scss";

type LayoutProps = {
  children?: React.ReactNode;
};

const CommonLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="mx-7p">{children}</div>
    </>
  );
};

export default CommonLayout;
