import { LexicalRichText } from "@yext/pages-components";
import { BsChevronRight } from "react-icons/bs";
import { Image } from "@yext/pages-components";
const GridItems = ({ items, shapeCTA = false }: any) => {
 
  const { sectionTitle, items: _items } = items;
  return (
    <div className="w-full space-y-8">
      <div className="text-4xl mx-auto text-center justify-center flex">
        {sectionTitle}
      </div>
      <div className="w-full md:w-28 border-t-2 border-[#ffd100] mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
        {_items.map((item: any, index: number) => (
          <div className=" px-3 py-5  text-[#333] flex flex-col" key={index}>
            {item.image && (
              <div className="w-full">
                <Image image={item.image} />
              </div>
            )}
            <div
              className="p-4  md:p-8 flex-grow "
              style={{ boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15);" }}
            >
              <h3 className="text-2xl font-normal ">{item.title}</h3>
              <div className="pt-5">
                <LexicalRichText
                  serializedAST={JSON.stringify(item.description.json)}
                />
              </div>
              {item.cTA && (
                <div
                  className={`!mt-5 mx-auto ${shapeCTA && `w-full text-center pb-4 md:pb-4`} pt-5`}
                >
                  <a
                    href={item.cTA.link}
                    className={`${shapeCTA ? `mx-auto  w-full px-8 py-4 text-white font-bold bg-[#518415] hover:bg-[#446e12] rounded-full hover:underline` : `uppercase text-[#008198] hover:underline flex gap-1 items-center`}`}
                  >
                    {item.cTA.label} {!shapeCTA && <BsChevronRight />}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridItems;
