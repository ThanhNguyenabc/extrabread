import classNames from 'classnames';
import { mapModifiers } from 'helpers/component';
import Image from 'next/image';
import styles from './Banner.module.scss';

type BannerType = 'business' | 'align-left' | 'product' | 'home';
interface Props {
  hasBackground?: boolean;
  content: JSX.Element;
  button: JSX.Element;
  descriptions?: JSX.Element;
  tag?: JSX.Element;
  tagText?: string;
  type?: BannerType | BannerType[];
  src: string;
  className?: string;
  extractComponent?: JSX.Element;
}

export const Banner = ({
  hasBackground,
  content,
  button,
  descriptions,
  tagText,
  className,
  src,
  type,
  extractComponent,
}: Props) => {
  const _className = mapModifiers(
    'banner',
    styles,
    Array.isArray(type) ? [...type] : type,
    hasBackground && 'has-bg',
  );

  return (
    <div className={classNames(_className, className)}>
      <div className={styles['banner-inner']}>
        <div className={styles['banner-text']}>
          {tagText ? <div className={styles['banner-tag']}>{tagText}</div> : null}
          <div className={styles['banner-content']}>{content}</div>
          {descriptions ? (
            <div className={styles['banner-descriptions']}>{descriptions}</div>
          ) : null}
          <div className={styles['banner-btn']}>{button}</div>
        </div>
        <div className={styles['banner-img']}>
          <Image width={682} height={600} src={src} alt="banner" quality={100} />
        </div>
      </div>
      {extractComponent && <div className={styles['banner-extract']}>{extractComponent}</div>}
    </div>
  );
};
