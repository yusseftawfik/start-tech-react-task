import { FC } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { appLink } from "../core/data/nav.data";
import { ISocialLink } from "../core/models/nav.model";

const Header: FC = () => {
  const { i18n } = useTranslation();
  return (
    <main
      className="container mx-auto flex w-full flex-col items-center
        justify-between px-6 py-10 md:flex-row md:py-16"
    >
      <div className="flex flex-col gap-12 lg:w-1/2">
        {i18n.language === `en` ? (
          <div className="flex flex-col gap-5">
            <h2 className="title text-center lg:text-start">
              Get the best deals and offers in your favorite
              <br />
              <span className="!bg-gradient-to-r !from-main !to-yellow !bg-clip-text !text-transparent">
                premium stores!
              </span>
            </h2>
            <p className="w-full text-center text-sm text-gray md:text-base lg:max-w-xl lg:text-start">
              Premitto is your best shopping ally, enjoy a whole year of
              discounts, new offers, and exclusive access to online promo codes
              for the top best products and services. Your options are endless!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <h2 className="title text-center !text-3xl lg:text-start">
              بريميتو أفضل
              <span className="text-yellow">{` تطبيق خصومات`}</span>
              <br />
              <span>مستمرة طيلة أيام السنة!</span>
            </h2>
            <h2
              className="text-center text-3xl font-semibold leading-tight
                        tracking-tight text-black lg:text-start"
            >
              احصل على أفضل العروض في
              <span className="!bg-gradient-to-r !from-main !to-yellow !bg-clip-text !text-transparent">
                {` المتاجر المميزة `}
              </span>
              المفضلة لديك من خلال تطبيق الخصومات الأول!
            </h2>
            <p className="max-w-xl text-center text-sm text-gray md:text-base lg:text-start">
              بريميتو هو أفضل مساعد تسوق لك؛ استمتع بسنة كاملة من الخصومات
              والعروض الجديدة والوصول الحصري إلى الأكواد الترويجية عبر الإنترنت
              لأفضل المنتجات والخدمات.
            </p>
            <p className="max-w-xl text-center text-sm text-gray md:text-base lg:text-start">
              خياراتك لا حصر لها! التسوق لم يكن أسهل من أي وقت مضى!
            </p>
          </div>
        )}
        <div className="flex w-full items-center justify-center gap-3 lg:justify-start">
          {appLink.map((i: ISocialLink) => (
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
      <div className="hidden w-1/2 items-center justify-end lg:flex">
        <div className="relative h-[25rem] w-[30rem]">
          <img
            src={`/images/banner.png`}
            alt={`Premitto App`}
            className="absolute object-contain"
          />
        </div>
      </div>
    </main>
  );
};
export default Header;
