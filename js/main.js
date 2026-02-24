import { SpeedInsights } from "@vercel/speed-insights/next";
import { implementNav } from "./modules/navHandler.js";
import { implementFooter } from "./modules/footerHandler.js";
import { handleAnimations } from "./modules/handleAnimations.js";

const navWrapper = document.querySelector("#nav-wrapper"),
    footerWrapper = document.querySelector("#footer-wrapper");

implementNav(navWrapper);
implementFooter(footerWrapper);
handleAnimations();
