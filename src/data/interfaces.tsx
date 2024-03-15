export interface Icon {
  readonly src: string;
  readonly alt: string;
  readonly href: string;
}

export interface Button {
  readonly text: string;
  readonly href: string;
}

interface Links {
  readonly href: string;
  readonly src: string;
  readonly alt: string;
}

export interface TagProps {
  readonly text: number | string;
}

export interface ReferenceItem {
  readonly name: string;
  readonly links: Links[];
  readonly role: string;
  readonly reference: string;
  readonly year: number;
}
export interface PortfolioItem {
  readonly slug: string;
  readonly imgUrl: string;
  readonly name: string;
  readonly year: number;
  readonly shortDescription: string;
  readonly Technologies: string[];
}
