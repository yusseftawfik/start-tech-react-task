import { PATHS } from '../enums/paths.enum';
import { INavItem, ISocialLink } from '../models/nav.model';

export const socialLink: Array<ISocialLink> = [
    { link: `/`, path: `/icons/instagram.svg`, alt: `instagram` },
    { link: `/`, path: `/icons/twitter.svg`, alt: `twitter` },
    { link: `/`, path: `/icons/linkedin.svg`, alt: `linkedin` },
    { link: `/`, path: `/icons/tiktok.svg`, alt: `tiktok` },
    { link: `/`, path: `/icons/facebook.svg`, alt: `facebook` },
];

export const navbarItems: Array<INavItem> = [
    { path: PATHS.BUY, title: `BUY` },
    { path: `/`, title: `DISCOVER` },
    { path: `/`, title: `HOW_IT_WORKS` },
    { path: `/`, title: `PARTNERS` },
    { path: `/`, title: `BLOG` },
];

export const appLink: Array<ISocialLink> = [
    { link: `/`, path: `/images/app-store-black.png`, alt: `app-store` },
    { link: `/`, path: `/images/google-play-black.png`, alt: `google-play` },
];

export const footerAppLink: Array<ISocialLink> = [
    { link: `/`, path: `/images/app-store-white.png`, alt: `app-store` },
    { link: `/`, path: `/images/google-play-white.png`, alt: `google-play` },
];

export const bannerAppLink: Array<ISocialLink> = [
    { link: `/`, path: `/images/app-store-transparent.png`, alt: `app-store` },
    { link: `/`, path: `/images/google-play-transparent.png`, alt: `google-play` },
];

export const footerNavItems: Array<INavItem> = [
    { path: `/`, title: `HOME` },
    { path: `/`, title: `ABOUT_US` },
    { path: `/`, title: `HOW_IT_WORKS` },
    { path: `/`, title: `FAQ` },
    { path: `/`, title: `CONTACT_US` },
    { path: `/`, title: `PRIVACY_POLICY` },
    { path: `/`, title: `TERMS_CONDITIONS` },
];
