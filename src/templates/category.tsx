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
import { getDirections } from "@yext/pages-components";
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
/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  slugField: "c_slug",
  stream: {
    $id: "my-stream-id-1",

    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "c_cityName",
      "c_stateName",
      "c_corporatePageHeaderSection",
      "c_mainLocation.address",
      "c_mainLocation.name",
      "c_mainLocation.timezone",
      "c_mainLocation.hours",
      "c_mainLocation.c_dataFeedUPSAirPickupTimes",
      "c_mainLocation.c_dataFeedUPSGroundPickupTimes",
      "c_mainLocation.c_storeWebsiteURL",
      "c_mainLocation.c_dLocationDirectionsOrCrossStreets",
      "c_mainLocation.mainPhone",
      "c_mainLocation.fax",
      "c_mainLocation.emails",
      "c_corporateMidPageSection",
      "c_featuredServiceTitle",
      "c_searchableFeaturedServices",
      "c_corporateService1ImageAndCopy",
      "c_corporateService2ImageAndCopy",
      "c_corporateService3ImageAndCopy",
      "c_corporateService4ImageAndCopy",
      "c_corporateService5ImageAndCopy",
      "c_corporateService6ImageAndCopy",
      "c_specialOffers",
      "c_defaultFAQGroup1",
      "c_defaultFAQGroup2",
      "c_defaultFAQGroup3",
      "c_pageHeaderSection",
      "slug",
      "c_slug",
      "c_corporateService1Link2",
      "c_corporateService2Link2",
      "c_corporateService3Link2",
      "c_corporateService4Link2",
      "c_corporateService5Link2",
      "c_corporateService6Link2",
      "c_ourServices",
      "c_ourOffers",
      "c_centerHomePageURL",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["categoryPage"],
      entityIds: ["1043-Printing", "1043-Notary"],
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
  const {
    _site,

    c_cityName,
    c_corporatePageHeaderSection,
    c_mainLocation,
    c_corporateMidPageSection,

    c_defaultFAQGroup1,
    c_defaultFAQGroup2,
    c_defaultFAQGroup3,
    c_pageHeaderSection,
    c_ourServices,
    c_ourOffers,
    c_centerHomePageURL,
  } = document;

  return (
    <>
      <PageLayout>
        <div className="centered-container">
          <div className="bg-white space-y-8">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="w-full md:w-3/5">
                <div className="flex flex-col gap-4">
                  <div>
                    <h1 className="text-4xl ">
                      {c_corporatePageHeaderSection.pageTitle}
                    </h1>
                  </div>
                  <div>
                    <h2 className="text-2xl ">The UPS Store {c_cityName}</h2>
                  </div>
                  <div
                    className="p-4 pb-6 md:p-8 bg-[#fafafa] text-[#333] text-base"
                    style={{ boxShadow: "0 .125rem .375rem rgba(0,0,0,.15)" }}
                  >
                    <div>
                      <div>
                        {c_corporatePageHeaderSection.defaultIntroduction}
                      </div>
                      {c_pageHeaderSection && (
                        <ul className="columns-2 space-y-1 list-disc pl-4 md:pl-8 marker:text-[#028198] mt-4">
                          {c_pageHeaderSection.serviceHighlights.map(
                            (item: string, index: number) => (
                              <li key={index}>{item}</li>
                            )
                          )}
                        </ul>
                      )}
                      <div className="!mt-8">
                        <a
                          href={"#"}
                          className={`mx-auto  w-full px-8 py-4 text-white font-bold bg-[#009cbd] hover:bg-[#404040] rounded-full`}
                        >
                          {c_pageHeaderSection["pageHeaderButton1"]}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/5">
                <img
                  src={
                    c_corporatePageHeaderSection.heroImageGallery[0].image.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 w-full  text-lg font-light">
              <div
                className="w-full md:w-3/4 flex flex-col gap-4 bg-transparent md:bg-[#fafafa] p-4 md:p-8"
                style={{ boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15);" }}
              >
                <div className="px-4 md:p-4">
                  <HoursText
                    timezone={c_mainLocation[0].timezone}
                    hours={c_mainLocation[0].hours}
                  />
                </div>
                <div
                  className=" bg-white flex flex-col md:flex-row md:justify-between gap-4 px-3   md:p-6 py-3"
                  style={{
                    boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15);",
                  }}
                >
                  <div className="w-full md:w-1/3 space-y-2">
                    <div className="flex gap-4 text-lg text-[#028198]">
                      <IoMdPin className="mt-2 h-[22px] w-[23px]" />
                      <div>
                        <a
                          className=" hover:underline"
                          href={getDirections(c_mainLocation[0].address)}
                        >
                          <div>{c_mainLocation[0].address.line1}</div>
                          <div>
                            {c_mainLocation[0].address.city},{" "}
                            {c_mainLocation[0].address.region}{" "}
                            {c_mainLocation[0].address.postalCode}
                          </div>
                        </a>
                        <div className="text-[#333]">
                          {
                            c_mainLocation[0]
                              .c_dLocationDirectionsOrCrossStreets
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 space-y-2">
                    <div className="flex gap-4  w-full">
                      <FaPhone className="text-[#028198] h-[22px] md:w-[23px]" />
                      {c_mainLocation[0].mainPhone &&
                        c_mainLocation[0].mainPhone
                          .replace("+1", "")
                          .replace(/\D+/g, "")
                          .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                    </div>
                    <div className="flex gap-4 items-center  w-full">
                      <FaFax className="text-[#028198] h-[22px] md:w-[23px]" />
                      {c_mainLocation[0].fax &&
                        c_mainLocation[0].fax
                          .replace("+1", "")
                          .replace(/\D+/g, "")
                          .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                    </div>
                    {c_mainLocation[0].emails && (
                      <div className="flex  w-full gap-4 items-center font-bold text-[#028198]">
                        <FaEnvelope className="h-[22px] md:w-[23px] " />
                        <a
                          className="underline hover:no-underline	"
                          href={`mailto:${c_mainLocation[0].emails[0]}`}
                        >
                          {c_mainLocation[0].emails[0]}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-1/3 space-y-2 text-[#028198] font-bold ">
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
                      href={c_centerHomePageURL}
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
            {c_corporateMidPageSection && (
              <div className="w-full text-[#333]">
                <div className="w-full flex flex-col md:flex-row gap-8 py-10 items-center">
                  <div className="w-full md:w-[26.6875rem]">
                    <img
                      src={
                        c_corporateMidPageSection["mid-pageFeaturedImage"].url
                      }
                      alt=""
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-3/5 gap-2 md:pl-10">
                    <div className="text-4xl font-normal">
                      {c_corporateMidPageSection.sectionTitle}
                    </div>
                    <div>
                      <div>{c_corporateMidPageSection.details1}</div>
                      {c_corporateMidPageSection.serviceHighlights && (
                        <ul className="md:columns-2 space-y-1 list-disc	pl-8 marker:text-[#028198] mt-4">
                          {c_corporateMidPageSection.serviceHighlights.map(
                            (item: string, index: number) => (
                              <li key={index}>{item}</li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                    <div className="text-2xl">
                      {c_corporateMidPageSection.boldTextAboveButtons}
                    </div>
                    <div>
                      {c_corporateMidPageSection.smallerTextAboveButtons}
                    </div>
                    {c_corporateMidPageSection["mid-pageButton2"] && (
                      <div className="!mt-8">
                        <a
                          href={"#"}
                          className={`mx-auto  w-full px-8 py-4 text-white font-bold bg-[#518415] hover:bg-[#446e12] rounded-full`}
                        >
                          {c_corporateMidPageSection["mid-pageButton2"]}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-[#fafafa] p-2 md:p-10">
          <GridItems items={c_ourServices} />
        </div>
        <div className="bg-white p-2 md:p-10">
          <GridItems items={c_ourOffers} shapeCTA={true} />
        </div>
        <div className="bg-[#fafafa] ">
          <div className="centered-container">
            {c_defaultFAQGroup1 && (
              <div className="  md:p-10 w-full">
                <div className="text-4xl mx-auto text-center justify-center flex">
                  Frequently Asked Questions
                </div>
                <div className="w-28 border-t-2 border-[#ffd100] mx-auto"></div>
                <div className="flex flex-col gap-8">
                  {c_defaultFAQGroup1 && (
                    <FAQAccordion FAQs={c_defaultFAQGroup1} />
                  )}
                  {c_defaultFAQGroup2 && (
                    <FAQAccordion FAQs={c_defaultFAQGroup2} />
                  )}
                  {c_defaultFAQGroup3 && (
                    <FAQAccordion FAQs={c_defaultFAQGroup3} />
                  )}
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
