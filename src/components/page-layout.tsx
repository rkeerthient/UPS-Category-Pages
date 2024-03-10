import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
type Props = {
  _site?: any;
  children?: React.ReactNode;
};
const PageLayout = ({ _site, children }: Props) => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen">
      <Header _site={_site} />
      <div className="py-8">{children}</div>
      <Footer _site={_site}></Footer>
    </div>
  );
};

export default PageLayout;
