import { Image } from "@yext/pages-components";
const Header = ({ _site }: any) => {
  return (
    <>
      <div className="hidden md:block">
        <Image image={_site.c_deskHeader}></Image>
      </div>
      <div className="md:hidden block">
        <Image image={_site.c_mobHeader}></Image>
      </div>
    </>
  );
};

export default Header;
