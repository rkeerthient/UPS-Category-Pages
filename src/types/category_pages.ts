export interface EntityReference {
	entityId: string,
	name: string,
}

export interface FAQs {
	question?: string,
	answer?: any,
}

export interface C_fAQs {
	title?: string,
	fAQs?: FAQs[],
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_middleCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface CTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface Items {
	title?: string,
	image?: Image,
	description?: any,
	cTA?: CTA,
}

export interface C_ourOffers {
	sectionTitle?: string,
	items?: Items[],
}

export interface C_ourServices {
	sectionTitle?: string,
	items?: Items[],
}

export interface CTA1 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface CTA2 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_sectionMiddle {
	title?: string,
	description?: any,
	subTitle?: string,
	subDescription?: any,
	image?: Image,
	cTA1?: CTA1,
	cTA2?: CTA2,
}

export interface C_sectionTop {
	title?: string,
	description?: any,
	subTitle?: string,
	subDescription?: any,
	image?: Image,
	cTA1?: CTA1,
	cTA2?: CTA2,
}

export interface C_topCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export default interface Ce_categoryPages {
	richTextDescriptionV2?: any,
	slug?: string,
	linkedLocation?: EntityReference,
	name: string,
	c_centerNumber?: string,
	c_cityName?: string,
	c_fAQs?: C_fAQs[],
	c_middleCTA?: C_middleCTA,
	c_middleDescription?: any,
	c_middleDescription2?: any,
	c_middleImage?: Image,
	c_middleTitle?: string,
	c_middleTitle2?: string,
	c_ourOffers?: C_ourOffers,
	c_ourServices?: C_ourServices,
	c_sectionMiddle?: C_sectionMiddle,
	c_sectionTop?: C_sectionTop,
	c_slugName?: string,
	c_slugAddress?: string,
	c_stateName?: string,
	c_storeAddress?: string,
	c_topCTA?: C_topCTA,
	c_topDescription?: any,
	c_topDescription2?: any,
	c_topImage?: Image,
	c_topTitle?: string,
	c_topTitle2?: string,
	services?: string[],
	id: string,
}
