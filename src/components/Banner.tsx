import { FC } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { bannerAppLink } from "../core/data/nav.data";
import { ISocialLink } from "../core/models/nav.model";
import SectionContainer from "../shared/SectionContainer.component";

const Banner: FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <SectionContainer>
      <div
        className={`${
          i18n.language === `en`
            ? `!bg-gradient-to-r py-28`
            : `!bg-gradient-to-l py-32`
        } relative overflow-hidden rounded-3xl !bg-gradient-to-r
                !from-main via-yellow !to-yellow px-10 shadow-2xl 2xl:px-24`}
      >
        <div className="flex flex-col overflow-hidden 2xl:flex-row">
          <div className="flex flex-col items-start justify-center gap-10">
            <h2
              className={`${
                i18n.language === `en` ? `2xl:!max-w-2xl` : `2xl:!max-w-lg`
              } title text-center !text-white 2xl:text-start`}
            >
              <span className="opacity-60">{t(`BANNER1`)}</span>
              <span>{t(`BANNER2`)}</span>
            </h2>
            <div className="flex w-full items-center justify-center gap-3 2xl:justify-start">
              {bannerAppLink.map((i: ISocialLink) => (
                <Link
                  to={i.link}
                  key={i.alt}
                  className="w-40 transition duration-300 hover:opacity-90 hover:shadow-lg"
                >
                  <img
                    src={i.path}
                    alt={i.alt}
                    width={150}
                    height={125}
                    className="mx-auto h-auto w-full object-cover object-top hover:scale-[1.01] hover:opacity-90 hover:drop-shadow-sm"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div
            className={`${
              i18n.language === `en`
                ? `left-auto right-16`
                : `left-16 right-auto`
            } absolute -bottom-5 hidden h-[28rem] w-[35rem] 2xl:block`}
          >
            <img
              className="absolute object-contain"
              src={`/images/banner2.png`}
              alt="Premitto App"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Banner;
