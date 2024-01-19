import { StaticImageData } from 'next/image';
import { FC } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

interface Props {
  images: StaticImageData[] | Array<{ src: string }> | undefined;
  onClose: VoidFunction;
  open: boolean;
  startIndex?: number;
}

export const ImageLightBox: FC<Props> = ({ onClose, open, images, startIndex }) => {
  return (
    <Lightbox
      plugins={[Counter, Zoom]}
      open={open}
      close={onClose}
      slides={images}
      index={startIndex}
    />
  );
};
