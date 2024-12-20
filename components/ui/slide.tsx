import { cn } from '@/lib/utils';
import { IcChevronLeft, IcChevronRight, IcClose } from '@/ui/img-resource/ExIcon';
import { DefaultImg } from '@/ui/img-resource/ImageResources';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Button } from './button';
import Row from './row';

export type SlideComponent = {
  showSlide: (index?: number) => void;
  closeSlide: () => void;
};

type SlideProps = {
  images: Array<string | StaticImageData>;
  selectedIndex?: number;
  onClose?: () => void;
};

const Slide = forwardRef<SlideComponent, SlideProps>(({ images, selectedIndex = 0 }, ref) => {
  const imageRefs = useRef<Map<string, any> | null>(null);

  const [data, setData] = useState({
    showSlide: false,
    index: selectedIndex,
  });
  useImperativeHandle(
    ref,
    () => ({
      showSlide: open,
      closeSlide: close,
    }),
    [],
  );

  const open = (index?: number) => {
    document.body.style.overflow = 'hidden';
    setData({
      showSlide: true,
      index: index || 0,
    });
    showImage(index);
  };

  useEffect(() => {
    if (data.showSlide) {
      showImage(data.index);
    }
  }, [data.index]);

  const close = () => {
    setData({
      showSlide: false,
      index: 0,
    });
    document.body.style.overflow = 'auto';
  };

  const showImage = index => {
    const refs = imageRefs.current;
    if (refs) {
      const nextImage = refs.get(`image-${index}`);
      nextImage?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const onNext = () => {
    const nextIndex = data.index == images.length - 1 ? 0 : data.index + 1;
    setData(prev => ({ ...prev, index: nextIndex }));
  };

  const onPrev = () => {
    const prevIndex = Math.max(0, data.index - 1);
    setData(prev => ({ ...prev, index: prevIndex }));
  };

  const ImageLists = useMemo(() => {
    return images.map((item, index) => {
      const key = `image-${index}`;
      return (
        <motion.div
          ref={ref => {
            const images = imageRefs.current || new Map();
            images.set(key, ref);
            imageRefs.current = images;

            return () => {
              images?.delete(key);
              imageRefs.current = images;
            };
          }}
          key={key}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          draggable={false}
          className="block min-w-full"
        >
          <Image
            src={item || DefaultImg}
            alt="pos-pic"
            className="w-full h-full aspect-square object-contain rounded-lg"
            draggable={false}
            width={700}
            height={700}
            blurDataURL={DefaultImg}
            placeholder="blur"
          />
        </motion.div>
      );
    });
  }, [images]);
  return (
    <motion.div
      initial={{
        opacity: data.showSlide ? 0 : 1,
      }}
      transition={{ duration: 1 }}
      animate={{
        opacity: data.showSlide ? 1 : 0,
      }}
      className={cn(
        'fixed  hidden justify-center items-center top-0 left-0  w-full  z-40 h-full bg-black/75',
        data.showSlide && 'flex',
      )}
    >
      <div className="absolute top-3 left-3 text-white">
        {data.index + 1}/{images.length}
      </div>
      <Button variant={'outline'} className="absolute z-10 top-8  right-8" onClick={close}>
        <IcClose />
      </Button>
      <Button
        variant={'outline'}
        className="absolute z-10 bottom-10 right-5 md:top-[50%]"
        onClick={onNext}
      >
        <IcChevronRight />
      </Button>
      <Button
        variant={'outline'}
        className="absolute z-10 bottom-10 left-5 md:top-[50%]"
        onClick={onPrev}
      >
        <IcChevronLeft />
      </Button>

      <Row className=" flex max-w-screen-md overflow-hidden items-start">{ImageLists}</Row>
    </motion.div>
  );
});

export default Slide;
