/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { navbarItems } from "../core/data/nav.data";
import { PATHS } from "../core/enums/paths.enum";
import { INavItem } from "../core/models/nav.model";
import Brand from "../shared/Brand.component";

const PublicNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  //----------------------------------------------------------------------------------------------------------------
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === `ar` ? `en` : `ar`);
    document.body.dir = i18n.dir();
    document.body.lang = i18n.language === `ar` ? `ar` : `en`;
    localStorage.setItem(`lang`, i18n.language || `en`);
    setIsMenuOpen(false);
  };
  //----------------------------------------------------------------------------------------------------------------
  return (
    <header className="border-b border-b-black pb-2 pt-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-5 lg:flex">
        <div className="flex w-full items-center justify-start gap-10">
          <Link
            to={PATHS.HOME}
            className="inline-flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Brand width={100} height={80} />
          </Link>
          <ul className="hidden items-center justify-start gap-6 lg:flex">
            {navbarItems.map((item: INavItem) => (
              <li
                key={item.path}
                className="text-sm font-normal leading-7 text-gray decoration-main
                                decoration-2 underline-offset-12 transition duration-300
                                hover:text-main hover:underline"
              >
                <Link to={item.path} className="nav-item">
                  {t(`${item.title}`)}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleLang}
                className="text-sm font-normal leading-7 text-gray decoration-main
                                decoration-2 underline-offset-12 transition duration-300
                                hover:text-main hover:underline"
              >
                {t(`LANGUAGE`)}
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden w-44 items-center justify-end gap-5 lg:flex">
          <button className="main-button">{t(`BECOME_PARTNER`)}</button>
        </div>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="focus:shadow-outline rounded transition
                            duration-300 focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              className="h-5 w-5"
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
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#861889"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 h-full w-full bg-white">
              <div className="container mx-auto flex h-full flex-col gap-8 px-3 py-5">
                <div className="flex items-center justify-between gap-10">
                  <div className="flex w-full items-center justify-between">
                    <Link to={PATHS.HOME} className="inline-flex items-center">
                      <Brand width={100} height={80} />
                    </Link>
                  </div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="focus:shadow-outline rounded transition
                                                    duration-300 focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      className="h-5 w-5"
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
                          d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386
                                                    8.00395C8.39438 7.61342 9.02755 7.61342
                                                    9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813
                                                    7.61605 15.6144 7.61605 16.0049 8.00657C16.3955
                                                    8.3971 16.3955 9.03026 16.0049 9.42079L13.4199
                                                    12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134
                                                    16.0039 16.0039C15.6133 16.3945 14.9802 16.3945
                                                    14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045
                                                    16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142
                                                    7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
                          fill="#861889"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23
                                                    1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1
                                                    23 5.92487 23 12ZM3.00683 12C3.00683 16.9668
                                                    7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932
                                                    16.9668 20.9932 12C20.9932 7.03321 16.9668
                                                    3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                          fill="#861889"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
                <nav className="flex h-full flex-col justify-between">
                  <ul className="space-y-4">
                    {navbarItems.map((item: INavItem) => (
                      <li
                        key={item.path}
                        className="border-b border-dashed border-[#4f5665] pb-3"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Link to={item.path} className="nav-item">
                          {t(`${item.title}`)}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button onClick={toggleLang}>{t(`LANGUAGE`)}</button>
                    </li>
                  </ul>
                  <button className="main-button">{t(`BECOME_PARTNER`)}</button>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
