import { FC, useRef } from "react";

import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { blog } from "../core/data/blog.data";
import { IArticle } from "../core/models/article.model";
import Label from "../shared/Label.component";
import SectionContainer from "../shared/SectionContainer.component";

const Carousel: FC = () => {
  const swiperRef = useRef<any>();
  const { t, i18n } = useTranslation();
  //----------------------------------------------------------------------------------------------------------------
  return (
    <SectionContainer wrapperClass="flex flex-col items-center lg:items-start gap-5 lg:gap-8">
      <Label label="CAROUSEL1" />
      <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
        <h2 className="title max-w-xl text-center lg:text-start">
          {t(`CAROUSEL2`)}
        </h2>
        <p className="max-w-[200px] text-center text-xs font-extralight lg:text-start">
          {t(`CAROUSEL3`)}
        </p>
      </div>
      <Swiper
        spaceBetween={25}
        loop
        onBeforeInit={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        grabCursor
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
          865: {
            slidesPerView: 4,
          },
        }}
      >
        {blog.map((i: IArticle) => (
          <SwiperSlide key={i.id}>
            <div className="flex max-w-sm flex-col gap-5">
              <div className="relative h-32 w-full xl:h-64">
                <img
                  src={i.pic}
                  alt={i.title}
                  className="absolute object-contain"
                />
              </div>
              <div className="flex items-center justify-start gap-1 text-xs text-main">
                <span>{t(`${i.author}`)}</span>
                <span>•</span>
                <span>{i.date}</span>
              </div>
              <div className="flex w-full items-center justify-between">
                <span className="max-w-xs text-lg text-black">
                  {t(`${i.title}`)}
                </span>
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="max-h-20 overflow-clip">
                <span className="overflow-clip text-xs">{t(`${i.desc}`)}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`${
          i18n.language === `en` ? `flex-row` : `flex-row-reverse`
        } flex w-full items-center justify-center gap-3 lg:justify-start`}
      >
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-12 w-12 items-center justify-center rounded-full border shadow-md"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.3508 12.7499L11.2096 17.4615L10.1654 18.5383L3.42264 11.9999L10.1654
                                    5.46148L11.2096 6.53833L6.3508 11.2499L21 11.2499L21 12.7499L6.3508 12.7499Z"
                fill="#000000"
              />
            </g>
          </svg>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-12 w-12 items-center justify-center rounded-full border shadow-md"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346
                                    18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                fill="#000000"
              />
            </g>
          </svg>
        </button>
      </div>
    </SectionContainer>
  );
};
export default Carousel;
