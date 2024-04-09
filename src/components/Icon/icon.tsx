import styles from './icon.module.css';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { IconInterface } from '@/data/interfaces';

export default function Icon({ href, src, alt }: IconInterface) {
  return (
    <Link
      href={href}
      target="blank"
      className={cn(styles.icon_wrapper, 'hover')}
    >
      <Image src={src} alt={`${alt} icon`} fill className={styles.icon_img} />
    </Link>
  );
}
