/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useState } from "react";

import { useTranslation } from "react-i18next";

import Label from "../shared/Label.component";
import SectionContainer from "../shared/SectionContainer.component";

const tabs: Array<{ title: string; desc: string }> = [
  { title: `HOW_IT_WORKS4`, desc: `HOW_IT_WORKS5` },
  { title: `HOW_IT_WORKS6`, desc: `HOW_IT_WORKS7` },
  { title: `HOW_IT_WORKS8`, desc: `HOW_IT_WORKS9` },
];

const HowItWorks: FC = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<number>(1);
  return (
    <SectionContainer wrapperClass="flex items-center justify-center flex-col gap-8">
      <Label label="HOW_IT_WORKS" extraClass="lg:!justify-center" />
      <h2 className="title max-w-2xl text-center">{t(`HOW_IT_WORKS1`)}</h2>
      <p className="text-center text-2xl font-normal">{t(`HOW_IT_WORKS2`)}</p>
      <p className="max-w-2xl text-center text-sm font-light leading-loose">
        {t(`HOW_IT_WORKS3`)}
      </p>
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="relative h-[30rem] w-[30rem]">
          <img
            src={`/images/mockup2.png`}
            alt={`Premitto App`}
            className="absolute object-contain"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center md:flex-row md:items-start">
        {tabs.map((i, index) => (
          <div
            key={i.title}
            className={`flex h-full w-full cursor-pointer flex-row items-center
                        justify-center gap-5 text-center md:w-1/3
                        md:flex-col md:pt-5 ${
                          index + 1 === active && `!text-main`
                        }`}
            onClick={() => setActive(index + 1)}
          >
            <div
              className={`h-[175px] w-3 bg-gray50 md:h-1 md:w-full ${
                index + 1 === active &&
                `!bg-gradient-to-b !from-yellow !to-main md:!bg-gradient-to-r `
              }`}
            />
            <div className="flex flex-col items-start justify-between gap-3 md:items-center">
              <div
                className={`${
                  index + 1 === active && `!text-main`
                } min-w-[100px] text-start text-2xl text-black md:text-center`}
              >
                {t(`${i.title}`)}
              </div>
              <div className="text-start text-sm md:text-center lg:text-lg">
                {t(`${i.desc}`)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
export default HowItWorks;
