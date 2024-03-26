import { LuminousGallery } from "luminous-lightbox";
import "luminous-lightbox/dist/luminous-basic.css";

import docReady from "./docready";

docReady(() => {
    new LuminousGallery(document.querySelectorAll(".gallery-image"), {}, {
        caption: (trigger: HTMLElement) => {
            return trigger.querySelector("img").alt
        }
    });
});