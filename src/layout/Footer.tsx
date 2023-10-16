import React from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import {
  footerAppLink,
  footerNavItems,
  socialLink,
} from "../core/data/nav.data";
import { INavItem, ISocialLink } from "../core/models/nav.model";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col">
      <div
        className="container mx-auto flex flex-col
            items-start justify-between gap-8 p-5 md:flex-row md:gap-0"
      >
        <div className="flex flex-col justify-between gap-8">
          <div className="flex max-w-md flex-col items-start gap-3 md:max-w-lg">
            <img
              src={`/images/footer-logo.png`}
              alt="premitto"
              width={100}
              height={80}
            />
            <p className="text-sm text-gray">{t(`FOOTER`)}</p>
          </div>
          <div
            className="flex flex-col flex-wrap items-start
                     justify-start gap-x-12 gap-y-3 md:flex-row md:items-center lg:gap-3"
          >
            {footerNavItems.map((i: INavItem) => (
              <Link
                to={i.path}
                key={i.title}
                className="text-sm text-gray hover:text-main"
              >
                {t(`${i.title}`)}
              </Link>
            ))}
          </div>
        </div>
        <div
          className="flex w-full flex-row items-center justify-center
                gap-3 md:w-1/5 md:flex-col md:items-end"
        >
          {footerAppLink.map((i: ISocialLink) => (
            <Link to={i.link} key={i.alt}>
              <img
                src={i.path}
                alt={i.alt}
                width={150}
                height={125}
                className="transition duration-300 hover:scale-[1.01] hover:opacity-90 hover:shadow-lg"
              />
            </Link>
          ))}
        </div>
      </div>
      <hr className="border-black" />
      <div
        className="container mx-auto flex flex-col-reverse items-start
             justify-between gap-5 p-5 md:flex-row md:items-center"
      >
        <div className="text-xs text-gray opacity-75">
          &copy;{`${new Date().getFullYear()} ${t(`COPYRIGHT`)}`}
        </div>
        <div className="flex items-center justify-center gap-5">
          {socialLink.map((i: ISocialLink) => (
            <Link to={i.link} key={i.alt}>
              <img
                src={i.path}
                alt={i.alt}
                width={15}
                height={15}
                className="fill-[#292929] transition duration-300
                                hover:scale-105 hover:!fill-main hover:stroke-main hover:opacity-90 hover:shadow-lg"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
