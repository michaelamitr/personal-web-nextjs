import Link from 'next/link';
import { TextLinkProps } from '@/data/interfaces';

export default function TextLink({ href, isBlank, text }: TextLinkProps) {
  return (
    <Link
      href={href}
      className="link_text"
      target={isBlank ? '_blank' : '_self'}
    >
      {text}
    </Link>
  );
}
