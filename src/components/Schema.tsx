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
  const address = document.linkedLocation.address;
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
  console.log(faqsList);

  if (document.c_ourServices) {
    document.c_ourServices.items.map((item: any) =>
      offerCatalog.push({
        "@type": "Offer",
        itemListElement: {
          "@type": "Service",
          name: item.name,
          description: getHtmlFromLexicalJSON(
            JSON.stringify(item.description.json)
          ),
        },
      })
    );
  }

  return (
    <>
      <JsonLd<LocalBusiness>
        item={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          description: description,
          openingHours: document.hours
            ? buildHoursSchema(document.hours)
            : "Mo,Tu,We,Th 09:00-12:00",
          telephone: telephone,
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

      {document.geocodedCoordinate && (
        <JsonLd<Place>
          item={{
            "@context": "https://schema.org",
            "@type": "Place",
            geo: {
              "@type": "GeoCoordinates",
              latitude: document.geocodedCoordinate.latitude,
              longitude: document.geocodedCoordinate.longitude,
            },
          }}
        />
      )}
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
