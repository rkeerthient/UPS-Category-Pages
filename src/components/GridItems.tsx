import { BsChevronRight } from "react-icons/bs";
import {
  C_ourOffers,
  C_ourServices,
  SectionItem,
} from "../types/category_pages";
import { LexicalRichText } from "@yext/pages-components";

const GridItems = ({ items, shapeCTA = false }: any) => {
  const { sectionTitle, sectionItem } = items;
  return (
    <div className="w-full space-y-8">
      <div className="text-4xl mx-auto text-center justify-center flex">
        {sectionTitle}
      </div>
      <div className="w-28 border-t-2 border-[#ffd100] mx-auto"></div>
      <div className="grid grid-cols-3 w-full gap-4">
        {sectionItem.map((item: SectionItem, index: number) => (
          <div className=" px-3 py-5  text-[#333] flex flex-col" key={index}>
            <div className="w-full">
              <img src={item.image?.url} alt="" className="w-full" />
            </div>
            <div
              className="p-8 flex-grow space-y-4"
              style={{ boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15);" }}
            >
              <h3 className="text-2xl font-normal ">{item.title}</h3>
              <div>
                <LexicalRichText
                  serializedAST={JSON.stringify(item.description.json)}
                />
              </div>
              {item.cTA && (
                <div
                  className={`!mt-10 mx-auto ${shapeCTA && `w-full text-center`}`}
                >
                  <a
                    href={item.cTA.link}
                    className={`${shapeCTA ? `mx-auto  w-full px-8 py-4 text-white font-bold bg-[#518415] hover:bg-[#446e12] rounded-full` : `uppercase text-[#008198] hover:underline flex gap-1 items-center`}`}
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
