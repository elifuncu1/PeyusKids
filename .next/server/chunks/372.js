"use strict";
exports.id = 372;
exports.ids = [372];
exports.modules = {

/***/ 8372:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rm": () => (/* binding */ heroSlider),
/* harmony export */   "z_": () => (/* binding */ themesflatcarousel),
/* harmony export */   "TO": () => (/* binding */ fourSlider),
/* harmony export */   "wj": () => (/* binding */ twoSlider),
/* harmony export */   "A4": () => (/* binding */ testimonialSlider),
/* harmony export */   "mI": () => (/* binding */ brandSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay
]);
const heroSlider = {
    loop: true,
    autoplay: {
        delay: 60000,
        disableOnInteraction: false
    }
};
const themesflatcarousel = {
    loop: true,
    speed: 1400,
    spaceBetween: 30,
    autoplay: {
        delay: 60000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".owl-dots",
        clickable: true
    },
    navigation: {
        nextEl: ".owl-prev",
        prevEl: ".owl-next"
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
};
const fourSlider = {
    loop: true,
    speed: 1400,
    spaceBetween: 30,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1790: {
            slidesPerView: 4
        }
    }
};
const twoSlider = {
    loop: true,
    speed: 1400,
    spaceBetween: 66,
    pagination: {
        el: ".owl-dots",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 2
        }
    }
};
const testimonialSlider = {
    loop: true,
    speed: 1400,
    spaceBetween: 90,
    pagination: {
        el: ".owl-dots",
        clickable: true
    }
};
const brandSlider = {
    loop: true,
    speed: 1400,
    spaceBetween: 60,
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        600: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;