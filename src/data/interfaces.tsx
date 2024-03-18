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
  readonly id: number;
  readonly slug: string;
  readonly year: number;
  readonly name: string;
  readonly description: string;
  readonly technologies: string[];
  readonly links?: Links[];
  readonly personalContribution: string;
  readonly smallImage: string;
  readonly galleryImages: string[];
}
