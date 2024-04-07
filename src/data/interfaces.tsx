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
  readonly id: number;
  readonly slug: string;
  readonly smallImage: string;
  readonly isIllustrationalImage?: boolean;
  readonly name: string;
  readonly year: number;
  readonly description: string;
  readonly technologies: string[];
}

export interface Project extends PortfolioItem {
  readonly links?: Links[];
  readonly personalContribution: string;
  readonly galleryImages: string[];
}

export interface ContactFormValues {
  readonly fullName: string;
  readonly email: string;
  readonly phone?: string;
  readonly subject: string;
  readonly message: string;
}
