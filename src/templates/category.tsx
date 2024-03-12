/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import { LexicalRichText, getDirections } from "@yext/pages-components";
import { BiPackage } from "react-icons/bi";
import { FaEnvelope, FaFax, FaPhone } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { SiGoogleforms } from "react-icons/si";
import FAQAccordion from "../components/FAQAccordion";
import GridItems from "../components/GridItems";
import HoursText from "../components/HoursText";
import MailingList from "../components/MailingList";
import OtherOffers from "../components/OtherOffers";
import PageLayout from "../components/page-layout";
import "../index.css";
import { Image } from "@yext/pages-components";
import Schema from "../components/Schema";
/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",

    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "c_cityName",
      "c_stateName",
      "linkedLocation.address",
      "linkedLocation.name",
      "linkedLocation.timezone",
      "linkedLocation.hours",
      "linkedLocation.mainPhone",
      "linkedLocation.geocodedCoordinate",
      "linkedLocation.fax",
      "linkedLocation.emails",
      "linkedLocation.c_dLocationDirectionsOrCrossStreets",
      "slug",
      "c_ourServices",
      "c_ourOffers",
      "c_fAQs",
      "services",
      "c_topCTA",
      "c_topCTA2",
      "c_topDescription",
      "c_topDescription2",
      "c_topImage",
      "c_topTitle",
      "c_topTitle2",
      "c_middleCTA",
      "c_middleCTA2",
      "c_middleDescription",
      "c_middleDescription2",
      "c_middleImage",
      "c_middleTitle",
      "c_middleTitle2",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["ce_categoryPages"],
    },

    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ? document.slug : document.c_slug;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Category: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const cpy = document;
  const {
    _site,
    slug,
    name,
    c_cityName,
    linkedLocation,
    services,
    c_ourServices,
    c_ourOffers,
    c_fAQs,
    c_topCTA,
    c_topCTA2,
    c_topDescription,
    c_topDescription2,
    c_topImage,
    c_topTitle2,
    c_middleCTA,
    c_middleCTA2,
    c_middleDescription,
    c_middleDescription2,
    c_middleImage,
    c_middleTitle,
    c_middleTitle2,
  } = document;

  return (
    <>
      <Schema document={cpy} />
      <PageLayout _site={_site}>
        <div className="centered-container">
          <div className="bg-white space-y-8">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="w-full md:w-3/5">
                <div className="flex flex-col gap-4">
                  <div>
                    <h1 className="text-4xl ">{name}</h1>
                  </div>
                  <div>
                    <h2 className="text-2xl ">The UPS Store {c_cityName}</h2>
                  </div>
                  <div
                    className="p-4 pb-6 md:p-8 bg-[#fafafa] text-[#333] text-base"
                    style={{ boxShadow: "0 .125rem .375rem rgba(0,0,0,.15)" }}
                  >
                    <div>
                      {c_topDescription && c_topDescription}
                      {services && (
                        <ul className="columns-2 mt-4 space-y-1 list-disc pl-4 md:pl-8 marker:text-[#028198] ">
                          {services.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {c_topTitle2 && (
                        <h3 className="text-lg my-2  font-medium">
                          {c_topTitle2}
                        </h3>
                      )}
                      <div>{c_topDescription2 && c_topDescription2}</div>
                      {c_topCTA && (
                        <div className="!mt-4 w-fit flex gap-4 justify-start">
                          <a
                            href={"#"}
                            className={`mx-auto  w-fit px-8 py-4 text-white font-bold bg-[#009cbd] hover:bg-[#404040] rounded-full`}
                          >
                            {c_topCTA.label}
                          </a>
                          {c_topCTA2 && (
                            <a
                              href={"#"}
                              className={`mx-auto  w-fit px-8 py-4 text-white font-bold bg-[#009cbd] hover:bg-[#404040] rounded-full`}
                            >
                              {c_topCTA2.label}
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {c_topImage && (
                <div className="w-full md:w-2/5">
                  <Image image={c_topImage} />
                </div>
              )}
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 w-full  text-lg font-light">
              <div
                className="w-full md:w-3/4 flex flex-col gap-4 bg-transparent md:bg-[#fafafa] p-4 md:p-8"
                style={{ boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15);" }}
              >
                <div className="px-4 md:p-4">
                  <HoursText
                    timezone={linkedLocation.timezone}
                    hours={linkedLocation.hours}
                  />
                </div>
                <div
                  className="text-sm bg-white flex flex-col md:flex-row md:justify-between gap-4 px-3   md:p-6 py-3"
                  style={{
                    boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15);",
                  }}
                >
                  <div className="w-full md:w-1/3 space-y-4">
                    <div className="flex gap-4 text-lg text-[#028198]">
                      <IoMdPin className="mt-2 h-[22px] w-[23px]" />
                      <div>
                        <a
                          className=" hover:underline text-base"
                          href={getDirections(linkedLocation.address)}
                        >
                          <div>{linkedLocation.address.line1}</div>
                          <div>
                            {linkedLocation.address.city},{" "}
                            {linkedLocation.address.region}{" "}
                            {linkedLocation.address.postalCode}
                          </div>
                        </a>
                        <div className="text-[#333] text-sm mt-4">
                          {linkedLocation.c_dLocationDirectionsOrCrossStreets}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 space-y-4">
                    <div className="flex gap-4  w-full">
                      <FaPhone className="text-[#028198] h-[22px] md:w-[23px]" />
                      {linkedLocation.mainPhone &&
                        linkedLocation.mainPhone
                          .replace("+1", "")
                          .replace(/\D+/g, "")
                          .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                    </div>
                    <div className="flex gap-4 items-center  w-full">
                      <FaFax className="text-[#028198] h-[22px] md:w-[23px]" />
                      {linkedLocation.fax &&
                        linkedLocation.fax
                          .replace("+1", "")
                          .replace(/\D+/g, "")
                          .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                    </div>
                    {linkedLocation.emails && (
                      <div className="flex  w-full gap-4 items-center font-bold text-[#028198]">
                        <FaEnvelope className="h-[22px] md:w-[23px] " />
                        <a
                          className="underline hover:no-underline	"
                          href={`mailto:${linkedLocation.emails[0]}`}
                        >
                          {linkedLocation.emails[0]}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-1/3 space-y-4 text-[#028198] font-bold ">
                    <div className="flex gap-4 items-center hover:underline hover:cursor-pointer">
                      <BiPackage className="h-[22px] w-[23px]" />
                      Estimate Shipping Cost
                    </div>
                    <div className="flex gap-4 items-center hover:underline hover:cursor-pointer">
                      <SiGoogleforms className="h-[22px] w-[23px]" /> Contact Us
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 my-4 md:my-0">
                  <div className="md:!mt-4">
                    <a
                      href={`/${slug}`}
                      className={`mx-auto  w-full px-8 py-4 text-white font-bold bg-[#009cbd] hover:bg-[#404040] rounded-full`}
                    >
                      Store Home Page
                    </a>
                  </div>
                  <div className="md:!mt-4">
                    <a
                      href={"#"}
                      className={`mx-auto  w-full px-8 py-4 text-white font-bold bg-[#518415] hover:bg-[#446e12] rounded-full`}
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#fafafa] w-full md:w-1/4  space-y-8 p-10"
                style={{ boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15);" }}
              >
                <div className="pt-8">Hours of Operation</div>

                <div className="space-y-8">
                  <div>
                    <div className="font-bold">Store Hours</div>
                    <div>Closed Now - Open Tomorrow at 8:30 AM</div>
                  </div>
                  <div>
                    <div className="font-bold">Store Hours</div>
                    <div>Closed Now - Open Tomorrow at 8:30 AM</div>
                  </div>
                  <div>
                    <div className="font-bold">Store Hours</div>
                    <div>Closed Now - Open Tomorrow at 8:30 AM</div>
                  </div>
                </div>
              </div>
            </div>
            {c_middleTitle && (
              <div className="w-full text-[#333]">
                <div className="w-full flex flex-col md:flex-row gap-8 py-10 items-center">
                  {c_middleImage && (
                    <div className="w-full md:w-[26.6875rem]">
                      <Image image={c_middleImage}></Image>
                    </div>
                  )}
                  <div className="flex flex-col w-full md:w-3/5 gap-2 md:pl-10">
                    <div className="text-4xl font-normal">{c_middleTitle}</div>
                    <div>
                      {c_middleDescription && (
                        <LexicalRichText
                          serializedAST={JSON.stringify(
                            c_middleDescription.json
                          )}
                        />
                      )}
                    </div>
                    <div className="text-2xl">{c_middleTitle2}</div>
                    <div>
                      {c_middleDescription2 && (
                        <LexicalRichText
                          serializedAST={JSON.stringify(
                            c_middleDescription2.json
                          )}
                        />
                      )}
                    </div>
                    {c_middleCTA && (
                      <div className="!mt-8 w-fit flex gap-4">
                        <a
                          href={"#"}
                          className={`mx-auto  w-fit px-8 py-4 text-white font-bold bg-[#518415] hover:bg-[#446e12] rounded-full`}
                        >
                          {c_middleCTA.label}
                        </a>
                        {c_middleCTA2 && (
                          <a
                            href={"#"}
                            className={`mx-auto  w-fit px-8 py-4 text-white font-bold bg-[#009cbd] hover:bg-[#404040] rounded-full`}
                          >
                            {c_middleCTA2.label}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {c_ourServices && (
          <div className="bg-[#fafafa] p-2 md:p-10">
            <GridItems items={c_ourServices} />
          </div>
        )}
        {c_ourOffers && (
          <div className="bg-white p-2 md:p-10">
            <GridItems items={c_ourOffers} shapeCTA={true} />
          </div>
        )}
        <div className="bg-[#fafafa] ">
          <div className="centered-container">
            {c_fAQs && (
              <div className="  md:p-10 w-full">
                <div className="text-4xl mx-auto text-center justify-center flex mb-8">
                  Frequently Asked Questions
                </div>
                <div className="w-full md:w-28 border-t-2 border-[#ffd100] mx-auto"></div>
                <div className="flex flex-col gap-8">
                  {c_fAQs.map((item: any, index: any) => (
                    <FAQAccordion key={index} FAQs={item} />
                  ))}
                </div>
              </div>
            )}
            <div className="my-8">
              <MailingList />
            </div>
            <OtherOffers />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Category;
