/* eslint-disable max-len */
import { FC } from "react";

import { useTranslation } from "react-i18next";

import Label from "../shared/Label.component";
import SectionContainer from "../shared/SectionContainer.component";

const pricing: Array<string> = [`BUY5`, `BUY6`, `BUY7`, `BUY8`];

const Pricing: FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <SectionContainer wrapperClass="flex flex-col items-center justify-center gap-8">
      <Label label="BUY1" extraClass="lg:!justify-center" />
      <h2 className="title !max-w-2xl !text-center !font-medium">
        {t(`BUY2`)}
        <span className="!bg-gradient-to-r !from-main !to-yellow !bg-clip-text !text-transparent">
          {t(`BUY3`)}
        </span>
      </h2>
      <div
        className="flex w-4/5 flex-col items-center justify-center
            gap-10 rounded-2xl border border-black p-10"
      >
        <h3 className="text-center text-5xl font-medium text-black">
          {t(`PRICING2`)}
          <sub className="text-lg font-normal">
            {i18n.language === `en` ? `/` : `\\`}
            {t(`PRICING`)}
          </sub>
          <br />
          <span className="text-base font-normal">{t(`BUY4`)}</span>
        </h3>
        <div className="w2/5 flex flex-col gap-4 border-t border-black px-4 py-5">
          {pricing.map((i) => (
            <div key={i} className="flex items-center justify-start gap-5">
              <div>
                <svg
                  className="h-6 w-6 md:h-5 md:w-5"
                  fill="#000000"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" />
                  </g>
                </svg>
              </div>
              <span className="text-base font-normal text-black lg:text-2xl">
                {t(`${i}`)}
              </span>
            </div>
          ))}
          <button className="main-button mt-16 !w-full">{t(`BUY9`)}</button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Pricing;
