import { JsonLd } from "react-schemaorg";
import {
  LocalBusiness,
  FAQPage,
  Place,
  ItemList,
  OfferCatalog,
} from "schema-dts";
import getHtmlFromLexicalJSON from "./LexDeSerialise/LexToHTML";
const Schema = (props: any) => {
  const { document } = props;

  const name = `${document.name}`;
  const address = document.linkedLocation;
  const telephone = document.linkedLocation.mainPhone;
  const description = document.decription;
  const faqsList: any = [];
  const itemListElement: any = [];
  const offerCatalog: any = [];
  if (document.services) {
    document.services.forEach((item: any) => {
      itemListElement.push({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item,
        },
      });
    });
  }
  if (document.c_fAQs) {
    document.c_fAQs.map((itemS: any) =>
      itemS.fAQs.map((item1: any) =>
        faqsList.push({
          "@type": "Question",
          name: item1.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: getHtmlFromLexicalJSON(JSON.stringify(item1.answer.json)),
          },
        })
      )
    );
  }

  if (document.c_ourServices) {
    document.c_ourServices.items.map((item: any) => {
      return offerCatalog.push({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          image: item.image.url,
          description: getHtmlFromLexicalJSON(
            JSON.stringify(item.description.json)
          ),
        },
      });
    });
  }

  return (
    <>
      <JsonLd<LocalBusiness>
        item={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name,
          logo: "https://locations.theupsstore.com/permanent-b0b701/assets/images/logo.9bc0be0f.svg",
          image: document.c_topImage.url,
          brand: {
            "@type": "Brand",
            logo: "https://locations.theupsstore.com/permanent-b0b701/assets/images/logo.9bc0be0f.svg",
            name: "The UPS Store",
            url: "https://www.theupsstore.com/",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: {
              "@type": "Country",
              name: address.countryCode,
            },
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: document.linkedLocation.geocodedCoordinate.latitude,
            longitude: document.linkedLocation.geocodedCoordinate.longitude,
          },
          description: description,
          openingHours: document.linkedLocation.hours
            ? buildHoursSchema(document.linkedLocation.hours)
            : "Mo,Tu,We,Th 09:00-12:00",
          telephone: telephone
            .replace("+1", "")
            .replace(/\D+/g, "")
            .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"),
          faxNumber: document.linkedLocation.fax
            .replace("+1", "")
            .replace(/\D+/g, "")
            .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"),
          email: `mailto:${document.linkedLocation.emails[0]}`,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Store services",
            itemListElement: offerCatalog,
          },
        }}
      />

      <JsonLd<FAQPage>
        item={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqsList,
        }}
      />
    </>
  );
};

const buildHoursSchema = (hoursData: any) => {
  const nHrs: any = [];
  Object.keys(hoursData).forEach((item) =>
    nHrs.push(
      hoursData[item].openIntervals &&
        `${item.substring(0, 2).replace(/./, (c) => c.toUpperCase())} ${
          hoursData[item].openIntervals[0].start
        }-${hoursData[item].openIntervals[0].end}`
    )
  );
  return nHrs;
};

export default Schema;
