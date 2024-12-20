import React, { memo, useRef } from 'react';

const ImageGrid = memo(({ images }: { images?: Array<string> }) => {
  const ref = useRef<SlideComponent>(null);

  if (!images) return <></>;
  const imageGrid = [];

  const onShowSlide = (index: number) => () => {
    ref.current?.showSlide(index);
  };

  for (let i = 1; i < images!.length; i++) {
    if (i > 4) break;
    imageGrid.push(
      <div className="block" key={`detail-image-${i}`}>
        <Image
          src={images[i] || DefaultImg}
          alt="pos-pic"
          className="w-full object-cover aspect-[3/2] lg:h-full cursor-pointer hover:scale-105 transition rounded-lg"
          width={290}
          onClick={onShowSlide(i)}
          height={192}
          blurDataURL={DefaultImg.src}
          placeholder="blur"
        />
      </div>,
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-rows-2 lg:grid-cols-4 lg:h-[400px]">
        <div className="block col-span-2 lg:row-span-2">
          <Image
            src={images?.[0] || DefaultImg}
            alt="pos-pic"
            style={{
              height: 'auto',
            }}
            onClick={onShowSlide(0)}
            blurDataURL={DefaultImg.src}
            placeholder="blur"
            className="w-full aspect-[1.42] object-contain transition hover:scale-105 cursor-pointer"
            width={592}
            height={400}
          />
        </div>
        {imageGrid}
      </div>
      {images && <Slide ref={ref} images={images} />}
    </>
  );
});
ImageGrid.displayName = 'ImageGrid';
