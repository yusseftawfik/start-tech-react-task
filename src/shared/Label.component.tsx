import { FC } from "react";

import { useTranslation } from "react-i18next";

type IProps = {
  label: string;
  extraClass?: string;
};

const Label: FC<IProps> = ({ label, extraClass }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`${
        extraClass || ``
      } flex w-full items-center justify-center lg:justify-start`}
    >
      <p
        className="inline-block rounded-full !bg-gradient-to-r
            !from-yellow !to-main px-5 py-3 text-center text-sm
            font-normal tracking-wider text-white shadow-lg md:text-base"
      >
        {t(`${label}`)}
      </p>
    </div>
  );
};

export default Label;
