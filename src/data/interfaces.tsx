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
  readonly text: number | string | undefined;
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
  readonly description: string;
  readonly technologies: string[];
}

export interface Project {
  readonly id: number | undefined;
  readonly slug: string | undefined;
  readonly year: number | undefined;
  readonly name: string | undefined;
  readonly description: string | undefined;
  readonly technologies: string[] | undefined;
  readonly links: Links[] | undefined;
  readonly personalContribution: string | undefined;
  readonly smallImage: string | undefined;
  readonly galleryImages: string[] | undefined;
}
