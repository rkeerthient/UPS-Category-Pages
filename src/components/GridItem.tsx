import { BsChevronRight } from "react-icons/bs";
import { C_corporateService1Link2 } from "../types/category_pages";
export interface Root {
  clickthroughUrl: string;
  description: string;
  details: string;
  image: Image;
}

export interface Image {
  alternateText: string;
  height: number;
  url: string;
  width: number;
}

const GridItem = ({ gridItem, linkTitle }: any) => {
  const { clickthroughUrl, description, details, image } = gridItem;

  return (
    <div className=" px-3 py-5  text-[#333]">
      <div className="w-full">
        <img src={image.url} alt="" className="w-full" />
      </div>
      <div
        className="p-8 space-y-4"
        style={{ boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15);" }}
      >
        <h3 className="text-2xl font-normal">{description}</h3>
        <div>{details}</div>
        {clickthroughUrl && (
          <a
            href={clickthroughUrl}
            className="uppercase text-[#008198] hover:underline flex gap-1 items-center"
          >
            {
              C_corporateService1Link2[
                linkTitle.replaceAll(/[&\/\\#,+()$~%.'":*?<>{}]/g, "_")
              ]
            }
            <BsChevronRight />
          </a>
        )}
      </div>
    </div>
  );
};

export default GridItem;
