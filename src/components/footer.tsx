import { Image } from "@yext/pages-components";
const Footer = ({ _site }: any) => {
  return (
    <>
      <div className="hidden md:block">
        <Image image={_site.c_deskFooter}></Image>
      </div>
      <div className="md:hidden block">
        <Image image={_site.c_mobFooter}></Image>
      </div>
    </>
  );
};

export default Footer;
