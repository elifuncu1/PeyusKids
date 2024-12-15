"use strict";
exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 1431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_HeaderSearchForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const components_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/HeaderSearchForm.js


const HeaderSearchForm = ({ show , handleClose  })=>{
    let domNode = components_useClickOutside(()=>{
        handleClose(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        role: "search",
        method: "get",
        className: `header-search-form ${show ? "show" : ""}`,
        action: "#",
        ref: domNode,
        onSubmit: (e)=>{
            e.preventDefault();
            handleClose();
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                defaultValue: "",
                name: "s",
                className: "header-search-field",
                placeholder: "Search..."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                className: "header-search-submit",
                title: "Search",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fa fa-search"
                })
            })
        ]
    });
};
/* harmony default export */ const components_HeaderSearchForm = (HeaderSearchForm);


/***/ }),

/***/ 2208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);


const Sidebar = ({ show , close  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "sidebar2",
        className: `side-menu__block ${show ? "active" : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "side-menu__block-overlay custom-cursor__overlay",
                onClick: close
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "inner-sidebar side-menu__block-inner fl-st-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "side-menu__top justify-content-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            className: "side-menu__toggler side-menu__close-btn",
                            onClick: close,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "assets/images/common/close.png",
                                alt: "images"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "wrap",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget widget-quote",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "box-feature",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "inner",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "assets/images/post/post-quotes2.jpg",
                                                    alt: "Image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "box-icon jus-ali-ct",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "far fa-quote-right"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "box-content",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                className: "author clr-pri-2",
                                                children: "Patrick D. Smith"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "wrap f-rubik",
                                                children: "Sit amet consectetur adipiscing elit sed do eiusmod tempor didunt ut labore et dolore magna"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget widget-search st-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                        className: "title-widget fl-ctm-1",
                                        children: [
                                            "Search",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "ctm-inner"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "form-search-widget",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            action: "#",
                                            onSubmit: (e)=>e.preventDefault()
                                            ,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    placeholder: "Search Here"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fas fa-search"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget widget-category st-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                        className: "title-widget fl-ctm-1",
                                        children: [
                                            "category",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "ctm-inner"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "list-category",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "fx",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st wd-ctm",
                                                            children: "Arts & Drawing"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st",
                                                            children: "05"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "fx",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st wd-ctm",
                                                            children: "Basic Language"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st",
                                                            children: "02"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "fx",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st wd-ctm",
                                                            children: "Graphics Design"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st",
                                                            children: "07"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "fx",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st wd-ctm",
                                                            children: "Web Development"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st",
                                                            children: "04"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "fx",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st wd-ctm",
                                                            children: "Lifestyle"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st",
                                                            children: "06"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "fx",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st wd-ctm",
                                                            children: "GYM & Gaming"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st",
                                                            children: "05"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "fx",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st wd-ctm",
                                                            children: "Events & Party"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "st",
                                                            children: "05"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget widget-news st-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                        className: "title-widget fl-ctm-1",
                                        children: [
                                            "recent news",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "ctm-inner"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "list-news",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "fx",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "assets/images/thumbnails/widget1.jpg",
                                                        alt: "Image",
                                                        className: "feature"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "box-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                        href: "/blog-single",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            children: "Bake Layers Accesilit Testing Supporte"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                    href: "/blog-single",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        className: "fx meta-news clr-pri-4",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "far fa-calendar-alt"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "f-rubik",
                                                                                children: "25 nov 2021"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "fx",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "assets/images/thumbnails/widget2.jpg",
                                                        alt: "Image",
                                                        className: "feature"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "box-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                        href: "/blog-single",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            children: "Bake Layers Accesilit Testin Supporte"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                    href: "/blog-single",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        className: "fx meta-news clr-pri-4",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "far fa-calendar-alt"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "f-rubik",
                                                                                children: "25 nov 2021"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "fx",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "assets/images/thumbnails/widget3.jpg",
                                                        alt: "Image",
                                                        className: "feature"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "box-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                        href: "/blog-single",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            children: "Bake Layers Accesilit Testin Supporte"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                    href: "/blog-single",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        className: "fx meta-news clr-pri-4",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "far fa-calendar-alt"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "f-rubik",
                                                                                children: "25 nov 2021"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "fx",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "assets/images/thumbnails/widget4.jpg",
                                                        alt: "Image",
                                                        className: "feature"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "box-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                        href: "/blog-single",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            children: "Bake Layers Accesilit Testin Supporte"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                    href: "/blog-single",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        className: "fx meta-news clr-pri-4",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "far fa-calendar-alt"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "f-rubik",
                                                                                children: "25 nov 2021"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget widget-tag st-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                        className: "title-widget fl-ctm-1",
                                        children: [
                                            "best tags",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "ctm-inner"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "list-tag",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                    href: "/shop-details",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "f-rubik active",
                                                        children: "Technology"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                    href: "/shop-details",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "f-rubik active",
                                                        children: "service"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                    href: "/shop-details",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "f-rubik active",
                                                        children: "team"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                    href: "/shop-details",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "f-rubik active",
                                                        children: "solutions"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                    href: "/shop-details",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "f-rubik active",
                                                        children: "consultancy"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                    href: "/shop-details",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "f-rubik active",
                                                        children: "It Company"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                    href: "/shop-details",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "f-rubik active",
                                                        children: "agency"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget widget-gallery st-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                        className: "title-widget fl-ctm-1",
                                        children: [
                                            "photo gallery",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "ctm-inner"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "list-gallery fx",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "box-photo",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "overlay fx",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fal fa-plus"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "assets/images/thumbnails/widget5.jpg",
                                                        alt: "Image"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "box-photo active",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "overlay fx",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fal fa-plus"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "assets/images/thumbnails/widget1.jpg",
                                                        alt: "Image"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "box-photo",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "overlay fx",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fal fa-plus"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "assets/images/thumbnails/widget6.jpg",
                                                        alt: "Image"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "box-photo",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "overlay fx",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fal fa-plus"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "assets/images/thumbnails/widget7.jpg",
                                                        alt: "Image"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "box-photo",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "overlay fx",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fal fa-plus"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "assets/images/thumbnails/widget3.jpg",
                                                        alt: "Image"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "box-photo",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "overlay fx",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fal fa-plus"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "assets/images/thumbnails/widget8.jpg",
                                                        alt: "Image"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ }),

/***/ 289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/VideoPopup.js


let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close()
                                        ,
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: "https://www.youtube.com/embed/nfP5N9Yc72A?autoplay=1",
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const { 0: video , 1: setVideo  } = (0,external_react_.useState)(false);
    const { 0: videoValue , 1: setVideoValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a1 = document.querySelectorAll("a");
            a1.forEach((a)=>{
                if (a.href.includes("https://www.youtube.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false)
            ,
            videoID: videoValue
        })
    });
};
/* harmony default export */ const components_VideoPopup = (VideoPopup);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(8603);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/layouts/Footer.js


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        id: "footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "tf-subcribe",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 col-md-12 col-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "subcribe-wp",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "title",
                                            children: "Subscribe Our Newsletter"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "sub f-mulish",
                                            children: "Beet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 col-md-12 col-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "subcribe-form fx",
                                    id: "subscribe-form",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        action: "#",
                                        onSubmit: (e)=>e.preventDefault()
                                        ,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "email",
                                                id: "subscribe-email",
                                                placeholder: "Email Address"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "fl-btn st-7",
                                                id: "subscribe-button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "inner",
                                                    children: "Subscribe"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer-inner",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "widget-footer",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "widget widget-logo",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "logo-bottom",
                                                    id: "logo-footer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/logo/logofootert.png",
                                                                alt: "kinco"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "wrap f-mulish",
                                                    children: "Sit amet consectetur adipiscing elit sed do eiusmod teminci idunt ut labore et dolore magna"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "list-contact",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "fx",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-map-marker-alt"
                                                                        }),
                                                                        " 55 Main Street, New York"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "fx",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "mailto:hotline@gmail.com",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-envelope"
                                                                        }),
                                                                        " hotline@gmail.com"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "fx",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "tel:012345678",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fal fa-phone"
                                                                        }),
                                                                        " +012 (345) 678"
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "widget widget-business",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "inner",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "op-time",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "title-widget",
                                                                children: "opening hours"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "f-mulish",
                                                                            children: "Sunday - Friday"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "f-mulish",
                                                                            children: "08 am - 05 pm"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "cls-time",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Every Satarday and Govt Holiday"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "title-widget",
                                                                children: "closed"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "widget widget-link",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "title-widget",
                                                    children: "Our Program"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "list-link",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "fx",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/program",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "wd-ctm f-mulish",
                                                                    children: "Arts & Drawing"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "fx",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/program",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "wd-ctm f-mulish",
                                                                    children: "Computer Engineering "
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "fx",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/program",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "wd-ctm f-mulish",
                                                                    children: "Digital Mathematics"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "fx",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/program",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "wd-ctm f-mulish",
                                                                    children: "Physical Exercise"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "fx",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/program",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "wd-ctm f-mulish",
                                                                    children: "General Science"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "fx",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/program",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "wd-ctm f-mulish",
                                                                    children: "English Basic"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "fx",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/program",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "wd-ctm f-mulish",
                                                                    children: "Social Science"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "widget widget-news st-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "title-widget",
                                                    children: "recent news"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "list-news",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "fx",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/thumbnails/widget9.jpg",
                                                                    alt: "Image",
                                                                    className: "feature"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: "box-content",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                                className: "title",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "/blog-grid",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        children: "Useful Code Extened End Developers"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/blog-grid",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                    className: "fx meta-news clr-pri-6",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                            className: "far fa-calendar-alt"
                                                                                        }),
                                                                                        "25 dec 2021"
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "fx",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/thumbnails/widget10.jpg",
                                                                    alt: "Image",
                                                                    className: "feature"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: "box-content",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                                className: "title",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "/blog-grid",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        children: "Useful Code Extened End Developers"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/blog-grid",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                    className: "fx meta-news clr-pri-6",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                            className: "far fa-calendar-alt"
                                                                                        }),
                                                                                        "25 dec 2021"
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-bottom jus-ct",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "copy-right",
                                        children: [
                                            "Copyright \xa9 ",
                                            new Date().getFullYear(),
                                            ", Kinco - Kindergarten HTML Template. Designed by",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://themeforest.net/user/webtend/portfolio",
                                                children: "Webtend"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const layouts_Footer = (Footer);

// EXTERNAL MODULE: ./src/components/HeaderSearchForm.js + 1 modules
var HeaderSearchForm = __webpack_require__(1431);
// EXTERNAL MODULE: ./src/components/Sidebar.js
var Sidebar = __webpack_require__(2208);
// EXTERNAL MODULE: ./src/layouts/header/Menus.js
var Menus = __webpack_require__(2297);
;// CONCATENATED MODULE: ./src/layouts/header/Header.js






const Header = ()=>{
    (0,external_react_.useEffect)(()=>{
        document.querySelector("body").className = "counter-scroll header-fixed inner-page";
    }, []);
    const { 0: form , 1: setForm  } = (0,external_react_.useState)(false);
    const { 0: sidebarToggle , 1: setSidebarToggle  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        id: "header",
        className: "d-none d-xl-block",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "top-bar",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "inner jus-ct",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "clr-pri-1",
                        children: "Working Jours : Sun - Friday, 08:00 am - 05:00 pm"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "site-header",
                className: "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "site-header-inner fx",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "site-logo",
                                            className: "clearfix",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/logo/logodark.png",
                                                        alt: "Kinco"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "btn-menu",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "nav-wrap",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                id: "mainnav",
                                                className: "mainnav st-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "menu",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "menu-item-has-children",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: "HOME"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                    className: "sub-menu",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menus/* Home */.SK, {})
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "menu-item",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Menus/* About */.CL, {})
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "menu-item-has-children",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "PAGES"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: "sub-menu",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            className: "inner-menu-item",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    children: "Teachers"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                                    className: "sub-menu",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menus/* Teacher */.J$, {})
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            className: "inner-menu-item ",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    children: "Classes"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                                    className: "sub-menu",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menus/* Classes */.PZ, {})
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            className: "inner-menu-item",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    children: "Events"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                                    className: "sub-menu",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menus/* Event */.ju, {})
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Menus/* Pages */.iY, {})
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "menu-item-has-children",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Programs"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                    className: "sub-menu",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menus/* Program */.$r, {})
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "menu-item-has-children",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "BLOG"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                    className: "sub-menu",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menus/* Blog */.l3, {})
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "menu-item-has-children",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "SHOP"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                    className: "sub-menu",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menus/* Shop */.k3, {})
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "inner",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Menus/* Contact */.r8, {})
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "header-right fx",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    id: "header-search",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "search-box header-search-icon",
                                                            onClick: ()=>setForm(!form)
                                                            ,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-search"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(HeaderSearchForm/* default */.Z, {
                                                            show: form,
                                                            handleClose: ()=>setForm(false)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "header-contact fx",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "menu-bar-right header-menu",
                                                            onClick: ()=>setSidebarToggle(true)
                                                            ,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                "data-name": "Hero Area",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: 58,
                                                                height: 58,
                                                                viewBox: "0 0 58 58",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("style", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: "\n                                                        .cls-1 {\n                                                        fill: #b250fe;\n                                                        }\n                                                \n                                                        .cls-1, .cls-2 {\n                                                        fill-rule: evenodd;\n                                                        }\n                                                \n                                                        .cls-2 {\n                                                        fill: #fff;\n                                                        }\n                                                    "
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                        id: "Menu_Area2",
                                                                        "data-name": "Menu Area",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                            id: "Menu_bar",
                                                                            "data-name": "Menu bar",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                    id: "Bg",
                                                                                    className: "cls-1",
                                                                                    d: "M7.853,2.283c14.9-3.89,29.969-1.4,43.467.819a7.923,7.923,0,0,1,5.735,5.422c3.111,14.141-.428,28.636-1.166,42.981a5.157,5.157,0,0,1-4.773,4.875c-13.49.568-23.463,3.285-41.787,0.9C5.948,56.807,2.348,54.2,1.9,51.7-0.683,37.877.2,23.508,2.194,8.757a8.71,8.71,0,0,1,5.66-6.473"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                    id: "Bar",
                                                                                    className: "cls-2",
                                                                                    d: "M16,17H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,17Zm0,10H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,27Zm0,10H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,37Z"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "inner-contact fx",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    id: "Hero_Area2",
                                                                    "data-name": "Hero Area",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                                    width: 49,
                                                                    height: 47,
                                                                    viewBox: "0 0 49 47",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                        "data-name": "Menu Area",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("image", {
                                                                                id: "helpline2",
                                                                                width: 49,
                                                                                height: 47,
                                                                                xlinkHref: "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAvCAYAAABKQCL3AAAG10lEQVRogc2aCbCVYxjHf11JN5HKNUhj39eEm20sNylFwtiSfTDIMiPb2Mk2yJR1hoQKZatJRFnGTiJE1pTRlCRyQ0nMY37fzDefc+75jnvu1X/mzrnn297n/77P9v6/02LF+SfTTGgJ9AG6Ae2AVsCawHKgRcaEX4BlwCLgVWBSQya2bAb7Y4zBQC9gdeBDYDrwBfA58KNGV0muI7AlsBWwM3AssFAyd3tfs5KoBZ4HJgLnAi+VuH6en2+kjoWN+wMHAKOAeuA4YG5yQVXT2P4POgFvATcCx+QgUAzLnYhBwMGu3AfAoc1B4n7gNuCGCj5zPnAEcBLwFNCbJnSn8OO9gJ5N9PxngO7AWGCbpiJxDvBw5th5wObAH8DlBnOCAWatP4FhmeC9xmCP6y9OHZ8CvBlxUsqdugBneXP4ZA9g1RL3VAM/AVemjj1uYIc/twZmATt67kHgDs9Fqp0cs+u5iKm+Zqc9gE8llCAmY7NiK3GpwfgN8C3wM9BGUkOA980QhVAH/AB877nL9N3q1LXh06do/J7A+sASz50GXAt8BawBbJu6bxpwK3Bi6vu0LImO+ll74CZT2l+Za+rMOG/r84sy5zuZBhMcZYDjDAeB+4DZQD9guARi7EuAZ4ENgMOAI70vUvUqBva6mfF+z7rTfFNazPjIAgTQF3c1KYwqcH5eZtYnm1E2dubDwK2Nj+eAfUyddwFtdbdYhTFW+E6p1ews+QRR9ddPk5gAjNPvcca2KmBkgq4u9dGZ4y9qaI3fLwIWA18buLsA+zoB0z02HjjICn0gcDvQH9gJmAls6Pe1gVtSY4WNmyYk+sv0cAcZ56wsbIBE4GmzRxqRRVYzdrAH2lUXWgp8BmxvG4HGxzOm6gVB8B3/r3O1Ir4+BnbIZK5IOiOSBvBlBxnp0g52VpaXILGTqbRL5tquGrWWSaEpcJWZq0uVbFdIINLiJjLOU0O+AxZobBrv2RZ8rv9XGhdo6/Fo6Fmp9Bau9KX//55j4BqzSn2Bc7Hs69i5VgrtjZfj9YKPsHeK4H0hioZN2qAyBjzBVcgSjpQ4Q5ecWgECYeOd1qwa9yHTk5MtrcBTzL89DLh3Czwo9gNnGjMJBri0WUQVvtqimOAME0i9q/Sme4uoM79aB9o5KWH0diaA1azk882EE7KDJSS+c+YeS1XaLFqn0m/gdQ0ZnbluoC55ld93sQPoZsJYKpmoD7/qyn9oaLVGV6fITjYFLy62TC0N6mW6U+tMMUljqkWou8a0sWXIop8TsblVP6551Aqc4D4/V7e1aK0d9ZJaWszgQqiyKtc4K3UOXgjfWpiiTXjFpS6EgR67wRWutfkrhCVW+OjR5tgElkUgWYnlzm5sYp7ItMhZRM5/MtOhZjFD361ydpscVQZMrQOF397rEhfCBFuAPGgWAkhisq0wSiPvFpBQEgy3L8oWt/8VQWKEgYWqxJ+22G0KGBYB28GucqUiMcdgOsls0cHs0a3IPUPd0Kw0SLrY8ba4S6yMA+w2C2GE5b7ZpMNSSEjca6rtZ7obZ3oshgvNZu1WJhJYRW/Oed9bVuoXmsiuspAmMcmsNDTnA/obPw810oZIIBs3ptvN7hm6uwe4B/gkx/21KhvhgleUOXZvE8QWttiLHHu0Ek9uZEl8Y6c6o4FakcZCW5a56kh9cw4804buIZWTBe6faxXZrpdcLhR7P/GwD6nN+Zw17WiXKmHOLHJdO6WeWa5Esao+zna8WwFJ6F8opgAOsDK/kpPEYpWPN9ysDLalzuJOO+ZeJdqSvna0uZT0hmTMzrrKazmJBM629d5SdWKEogGubGf373nQ1YnYvTEkVvigjYBHyiAyVbHsbPfYsad4wJ4sXGQ/j+fBrWoADaKUovGbblWvFrRbGWQm+ddK5WOBEzLcND6kxP2hP51uW9QoEgnaKmIlhizJd9s/WKYkOSZ1rLqB60lJnW1NGg2inDdFPdWT5jSwq8uL30pc18qt8Ng8E1bu666eKtwfllETysUq1qioO3u7PagoCUyfvXWPYRU0vpWfByo2P2NL8i+JJov/+uJxourIseq4jUHYsK7xOdRdYy/F6nnpV72VJoHqRyJhLku9vsqL5LVBGH+PyngH3/700bZcLluJF4993K4+rwsU6mP2skudaY3Yzgx1lCrhJJ9zmMphvNNYL68BlXqPfZ0usK8Vvs7UuJYxdIjd7hT12VN1k7V9pfWSNWG2ck9N6tcFzUYC3WATg/J2i+NcRbmJEhui0d1tTQb564CQROMNU7QpUYeCcG401a9sItOEEhh9VKh6offGCkQLEm4TLUik0k09F9eEKJf+TUc+AH8DJu6XCnzb/8QAAAAASUVORK5CYII="
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "clr-pri-2",
                                                                            children: "Hotline"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "clr-pri-2",
                                                                            children: "+012 (345) 678"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar/* default */.Z, {
                        show: sidebarToggle,
                        close: ()=>setSidebarToggle(false)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {})
        ]
    });
};
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./src/layouts/header/MobileMenu.js




const MobileMenu = ()=>{
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(false);
    const { 0: activeMenu , 1: setActiveMenu  } = (0,external_react_.useState)("");
    const { 0: subMenus , 1: setSubMenus  } = (0,external_react_.useState)("");
    const activeMenuSet = (value)=>setActiveMenu(activeMenu === value ? "" : value)
    , activeBtn = (value)=>value === activeMenu ? "active" : ""
    , activeLi = (value)=>value === activeMenu ? {
            display: "block"
        } : {
            display: "none"
        }
    , setSub = (value, motherMenu)=>motherMenu === activeMenu && value == subMenus ? setSubMenus("") : setSubMenus(value)
    , activeSub = (value)=>value === subMenus ? {
            display: "block"
        } : {
            display: "none"
        }
    ;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        id: "header",
        className: "d-block d-xl-none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "top-bar",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "inner jus-ct",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "clr-pri-1",
                        children: "Working Jours : Sun - Friday, 08:00 am - 05:00 pm"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "site-header",
                className: "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "site-header-inner fx",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "site-logo",
                                            className: "clearfix",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/logo/mainLogo.png",
                                                        alt: "Kinco",
                                                        style: {
                                                            height: "100px"
                                                        }
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "btn-menu",
                                            style: {
                                                display: "block"
                                            },
                                            onClick: ()=>setToggle(!toggle)
                                            ,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "nav-wrap"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "header-right fx",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    id: "header-search",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "search-box header-search-icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-search"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                            role: "search",
                                                            method: "get",
                                                            className: "header-search-form",
                                                            action: "#",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "text",
                                                                    defaultValue: "",
                                                                    name: "s",
                                                                    className: "header-search-field",
                                                                    placeholder: "Search..."
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    type: "submit",
                                                                    className: "header-search-submit",
                                                                    title: "Search",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa fa-search"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "header-contact fx",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "menu-bar-right header-menu",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                "data-name": "Hero Area",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: 58,
                                                                height: 58,
                                                                viewBox: "0 0 58 58",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("style", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: "\n                                                        .cls-1 {\n                                                        fill: #b250fe;\n                                                        }\n                                                \n                                                        .cls-1, .cls-2 {\n                                                        fill-rule: evenodd;\n                                                        }\n                                                \n                                                        .cls-2 {\n                                                        fill: #fff;\n                                                        }\n                                                    "
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                        id: "Menu_Area2",
                                                                        "data-name": "Menu Area",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                            id: "Menu_bar",
                                                                            "data-name": "Menu bar",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                    id: "Bg",
                                                                                    className: "cls-1",
                                                                                    d: "M7.853,2.283c14.9-3.89,29.969-1.4,43.467.819a7.923,7.923,0,0,1,5.735,5.422c3.111,14.141-.428,28.636-1.166,42.981a5.157,5.157,0,0,1-4.773,4.875c-13.49.568-23.463,3.285-41.787,0.9C5.948,56.807,2.348,54.2,1.9,51.7-0.683,37.877.2,23.508,2.194,8.757a8.71,8.71,0,0,1,5.66-6.473"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                    id: "Bar",
                                                                                    className: "cls-2",
                                                                                    d: "M16,17H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,17Zm0,10H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,27Zm0,10H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,37Z"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "inner-contact fx",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    id: "Hero_Area2",
                                                                    "data-name": "Hero Area",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                                    width: 49,
                                                                    height: 47,
                                                                    viewBox: "0 0 49 47",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                        "data-name": "Menu Area",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("image", {
                                                                                id: "helpline2",
                                                                                width: 49,
                                                                                height: 47,
                                                                                xlinkHref: "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAvCAYAAABKQCL3AAAG10lEQVRogc2aCbCVYxjHf11JN5HKNUhj39eEm20sNylFwtiSfTDIMiPb2Mk2yJR1hoQKZatJRFnGTiJE1pTRlCRyQ0nMY37fzDefc+75jnvu1X/mzrnn297n/77P9v6/02LF+SfTTGgJ9AG6Ae2AVsCawHKgRcaEX4BlwCLgVWBSQya2bAb7Y4zBQC9gdeBDYDrwBfA58KNGV0muI7AlsBWwM3AssFAyd3tfs5KoBZ4HJgLnAi+VuH6en2+kjoWN+wMHAKOAeuA4YG5yQVXT2P4POgFvATcCx+QgUAzLnYhBwMGu3AfAoc1B4n7gNuCGCj5zPnAEcBLwFNCbJnSn8OO9gJ5N9PxngO7AWGCbpiJxDvBw5th5wObAH8DlBnOCAWatP4FhmeC9xmCP6y9OHZ8CvBlxUsqdugBneXP4ZA9g1RL3VAM/AVemjj1uYIc/twZmATt67kHgDs9Fqp0cs+u5iKm+Zqc9gE8llCAmY7NiK3GpwfgN8C3wM9BGUkOA980QhVAH/AB877nL9N3q1LXh06do/J7A+sASz50GXAt8BawBbJu6bxpwK3Bi6vu0LImO+ll74CZT2l+Za+rMOG/r84sy5zuZBhMcZYDjDAeB+4DZQD9guARi7EuAZ4ENgMOAI70vUvUqBva6mfF+z7rTfFNazPjIAgTQF3c1KYwqcH5eZtYnm1E2dubDwK2Nj+eAfUyddwFtdbdYhTFW+E6p1ews+QRR9ddPk5gAjNPvcca2KmBkgq4u9dGZ4y9qaI3fLwIWA18buLsA+zoB0z02HjjICn0gcDvQH9gJmAls6Pe1gVtSY4WNmyYk+sv0cAcZ56wsbIBE4GmzRxqRRVYzdrAH2lUXWgp8BmxvG4HGxzOm6gVB8B3/r3O1Ir4+BnbIZK5IOiOSBvBlBxnp0g52VpaXILGTqbRL5tquGrWWSaEpcJWZq0uVbFdIINLiJjLOU0O+AxZobBrv2RZ8rv9XGhdo6/Fo6Fmp9Bau9KX//55j4BqzSn2Bc7Hs69i5VgrtjZfj9YKPsHeK4H0hioZN2qAyBjzBVcgSjpQ4Q5ecWgECYeOd1qwa9yHTk5MtrcBTzL89DLh3Czwo9gNnGjMJBri0WUQVvtqimOAME0i9q/Sme4uoM79aB9o5KWH0diaA1azk882EE7KDJSS+c+YeS1XaLFqn0m/gdQ0ZnbluoC55ld93sQPoZsJYKpmoD7/qyn9oaLVGV6fITjYFLy62TC0N6mW6U+tMMUljqkWou8a0sWXIop8TsblVP6551Aqc4D4/V7e1aK0d9ZJaWszgQqiyKtc4K3UOXgjfWpiiTXjFpS6EgR67wRWutfkrhCVW+OjR5tgElkUgWYnlzm5sYp7ItMhZRM5/MtOhZjFD361ydpscVQZMrQOF397rEhfCBFuAPGgWAkhisq0wSiPvFpBQEgy3L8oWt/8VQWKEgYWqxJ+22G0KGBYB28GucqUiMcdgOsls0cHs0a3IPUPd0Kw0SLrY8ba4S6yMA+w2C2GE5b7ZpMNSSEjca6rtZ7obZ3oshgvNZu1WJhJYRW/Oed9bVuoXmsiuspAmMcmsNDTnA/obPw810oZIIBs3ptvN7hm6uwe4B/gkx/21KhvhgleUOXZvE8QWttiLHHu0Ek9uZEl8Y6c6o4FakcZCW5a56kh9cw4804buIZWTBe6faxXZrpdcLhR7P/GwD6nN+Zw17WiXKmHOLHJdO6WeWa5Esao+zna8WwFJ6F8opgAOsDK/kpPEYpWPN9ysDLalzuJOO+ZeJdqSvna0uZT0hmTMzrrKazmJBM629d5SdWKEogGubGf373nQ1YnYvTEkVvigjYBHyiAyVbHsbPfYsad4wJ4sXGQ/j+fBrWoADaKUovGbblWvFrRbGWQm+ddK5WOBEzLcND6kxP2hP51uW9QoEgnaKmIlhizJd9s/WKYkOSZ1rLqB60lJnW1NGg2inDdFPdWT5jSwq8uL30pc18qt8Ng8E1bu666eKtwfllETysUq1qioO3u7PagoCUyfvXWPYRU0vpWfByo2P2NL8i+JJov/+uJxourIseq4jUHYsK7xOdRdYy/F6nnpV72VJoHqRyJhLku9vsqL5LVBGH+PyngH3/700bZcLluJF4993K4+rwsU6mP2skudaY3Yzgx1lCrhJJ9zmMphvNNYL68BlXqPfZ0usK8Vvs7UuJYxdIjd7hT12VN1k7V9pfWSNWG2ck9N6tcFzUYC3WATg/J2i+NcRbmJEhui0d1tTQb564CQROMNU7QpUYeCcG401a9sItOEEhh9VKh6offGCkQLEm4TLUik0k09F9eEKJf+TUc+AH8DJu6XCnzb/8QAAAAASUVORK5CYII="
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "clr-pri-2",
                                                                            children: "Hotline"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "clr-pri-2",
                                                                            children: "+012 (345) 678"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        id: "mainnav-mobi",
                        className: "mainnav st-2",
                        style: {
                            display: toggle ? "block" : "none"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "menu",
                            id: "mainnav",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "menu-item-has-children",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/",
                                        children: "Anasayfa"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "menu-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menus/* About */.CL, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "menu-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/teacher",
                                        children: "\xd6ğretmenlerimiz"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "menu-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/gallery",
                                        children: "Galeri"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "inner",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menus/* Contact */.r8, {})
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    display: "none"
                }
            })
        ]
    });
};
/* harmony default export */ const header_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./src/layouts/ScrollTop.js



const ScrollTop = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* scrollTopFun */.h1)();
    }, []);
    const onClick = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            id: "scroll-top",
            onClick: ()=>onClick()
        })
    });
};
/* harmony default export */ const layouts_ScrollTop = (ScrollTop);

;// CONCATENATED MODULE: ./src/layouts/Layout.js








const Layout = ({ children , noHeader , noFooter , bodyClass  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* animation */.oQ)();
        (0,utils/* stickyNav */.h4)();
        if (typeof bodyClass === "object") {
            document.querySelector("body").classList.add(...bodyClass);
        } else {
            console.log(typeof bodyClass);
            document.querySelector("body").classList.add(bodyClass);
        }
        (0,utils/* activeNavMenu */._T)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_VideoPopup, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "page",
                className: "clearfix",
                children: [
                    !noHeader && /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(header_MobileMenu, {}),
                    " ",
                    children,
                    " ",
                    !noFooter && /*#__PURE__*/ jsx_runtime_.jsx(layouts_Footer, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_ScrollTop, {})
        ]
    });
};
/* harmony default export */ const layouts_Layout = (Layout);


/***/ }),

/***/ 2297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SK": () => (/* binding */ Home),
/* harmony export */   "iY": () => (/* binding */ Pages),
/* harmony export */   "J$": () => (/* binding */ Teacher),
/* harmony export */   "PZ": () => (/* binding */ Classes),
/* harmony export */   "ju": () => (/* binding */ Event),
/* harmony export */   "$r": () => (/* binding */ Program),
/* harmony export */   "l3": () => (/* binding */ Blog),
/* harmony export */   "k3": () => (/* binding */ Shop),
/* harmony export */   "CL": () => (/* binding */ About),
/* harmony export */   "r8": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Home = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/",
                    children: "Home 01"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/home2",
                    children: "Home 02"
                })
            })
        ]
    })
;
const Pages = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/calendar",
                    children: "Academic Calendar"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/testimonials",
                    children: "testimonials"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/time-table",
                    children: "Time Table"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/gallery",
                    children: "gallery"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/pricing",
                    children: "pricing"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/faq",
                    children: "Faq"
                })
            })
        ]
    })
;
const Teacher = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/teacher",
                    children: "Teacher"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/teacher-details",
                    children: "Teachers Details"
                })
            })
        ]
    })
;
const Classes = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/classes",
                    children: "Classes"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/classe-details",
                    children: "Classes Details"
                })
            })
        ]
    })
;
const Event = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/events",
                    children: "Event"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/event2",
                    children: "Event 2"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/event-details",
                    children: "Events Details"
                })
            })
        ]
    })
;
const Program = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/program",
                    children: "Program"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/program-details",
                    children: "program details"
                })
            })
        ]
    })
;
const Blog = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/blog-grid",
                    children: "blog grid"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/blog-list",
                    children: "blog list"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/blog-single",
                    children: "blog single"
                })
            })
        ]
    })
;
const Shop = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/shop",
                    children: "Shop"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/shop-details",
                    children: "Shop Details"
                })
            })
        ]
    })
;
const About = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: "/about",
        children: "Hakkımızda"
    })
;
const Contact = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: "/contact",
        children: "İletişim"
    })
;


/***/ }),

/***/ 8603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_T": () => (/* binding */ activeNavMenu),
/* harmony export */   "oQ": () => (/* binding */ animation),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "ot": () => (/* binding */ getPagination),
/* harmony export */   "h1": () => (/* binding */ scrollTopFun)
/* harmony export */ });
const activeNavMenu = (path)=>{
    const navItem = document.querySelectorAll("#mainnav li a");
    navItem.forEach((nav)=>{
        if (nav.pathname === window.location.pathname) {
            if (!nav.href.includes("#")) {
                if (nav.pathname === "/contact" || nav.pathname === "/about") {
                    nav.parentElement.className = "current-menu-item";
                } else {
                    nav.parentElement.className = "inner-current-item";
                    !document.querySelector("body").className.includes("style") && nav.parentElement.parentElement.parentElement.classList.add("current-item");
                    nav.parentElement.parentElement.parentElement.classList.add("current-menu-item");
                    nav.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("current-menu-item");
                }
            }
        }
    });
};
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};
const stickyNav_ = ()=>{
    let offset = window.scrollY;
    const stickys = document.querySelectorAll("#site-header");
    for(let i = 0; i < stickys.length; i++){
        const sticky = stickys[i];
        if (sticky) {
            if (offset > 10) {
                sticky.classList.add("is-fixed");
            } else {
                sticky.classList.remove("is-fixed");
            }
            if (offset > 100) {
                sticky.classList.add("is-small");
            } else {
                sticky.classList.remove("is-small");
            }
        }
    }
};
const stickyNav = (stickyClass)=>window.addEventListener("scroll", stickyNav_)
;
const pagination = (listClass, sort, active)=>{
    let list = document.querySelectorAll(listClass);
    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        }
    }
};
const getPagination = (totalNumber, sort)=>{
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx)=>idx + 1
    );
    return arr;
};
const scrollTopFun = ()=>{
    let scrollUp = document.getElementById("scroll-top"), lastScrollTop = 0;
    window.addEventListener("scroll", ()=>{
        let st = window.scrollY;
        if (st > 110) {
            scrollUp.classList.add("show");
        } else {
            scrollUp.classList.remove("show");
        }
    });
};


/***/ })

};
;