import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import docReady from "./docready";

docReady(() => {
    Swiper.use([Navigation, Pagination, Autoplay]);
    // Instantiate swiper plugin
    new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination"
        },
        grabCursor: true,
        autoplay: {
            delay: 5000
        }
    });
});