import { FC } from "react";

import { useTranslation } from "react-i18next";

import { discover } from "../core/data/discover.data";
import Label from "../shared/Label.component";
import SectionContainer from "../shared/SectionContainer.component";

const Discover: FC = () => {
  const { t } = useTranslation();
  return (
    <SectionContainer wrapperClass="flex flex-col gap-12 items-start">
      <Label label="DISCOVER1" />
      <h2 className="title max-w-3xl text-center lg:text-start">
        {" "}
        {t(`DISCOVER2`)}
      </h2>
      <p className="max-w-3xl text-center text-xl text-black md:text-start">
        {t(`DISCOVER3`)}
      </p>
      <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
        <div className="flex flex-wrap items-center justify-center gap-y-12 md:justify-between lg:w-1/2">
          {discover.map((i) => (
            <div
              key={i.id}
              className="flex max-w-xs flex-col items-start justify-center gap-2 md:w-1/2 md:gap-5"
            >
              <div className="flex w-full items-center justify-center lg:w-1/2 lg:justify-start">
                <div className="relative h-12 w-12">
                  <img
                    src={i.img}
                    alt={i.title}
                    className="absolute object-contain"
                  />
                </div>
              </div>
              <div className="text-md w-full text-center text-black lg:text-start">
                {t(`${i.title}`)}
              </div>
              <div className="w-full max-w-[225px] text-center text-sm leading-loose lg:text-start">
                {t(`${i.desc}`)}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden w-full items-center justify-end md:w-1/2 lg:flex">
          <div className="relative h-[30rem] w-[15rem]">
            <img
              src={`/images/mockup.png`}
              alt={`Premitto App`}
              className="absolute object-contain"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Discover;
