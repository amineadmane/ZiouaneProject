(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/Stats.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/Stats.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Default */ "./resources/js/Shared/Default.vue");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Drawer */ "./resources/js/Pages/admin/Drawer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['totalColisLiv', 'totalColis', 'colis', 'colisLiv', 'colisWilaya', 'colisLivWilaya'],
  components: {
    layout: _Shared_Default__WEBPACK_IMPORTED_MODULE_0__["default"],
    Drawer: _Drawer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var t = [];

    var _this = this;

    Object.keys(this.colis).forEach(function (ele) {
      t.push(_this.colis[ele].length);
    });
    this.emailsSubscriptionChart.labels.forEach();
  },
  data: function data() {
    return {
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50,
          // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000,
          // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function labelInterpolationFnc(value) {
              return value[0];
            }
          }
        }]]
      },
      headers: [{
        sortable: false,
        text: 'ID',
        value: 'id'
      }, {
        sortable: false,
        text: 'Name',
        value: 'name'
      }, {
        sortable: false,
        text: 'Salary',
        value: 'salary',
        align: 'right'
      }, {
        sortable: false,
        text: 'Country',
        value: 'country',
        align: 'right'
      }, {
        sortable: false,
        text: 'City',
        value: 'city',
        align: 'right'
      }],
      items: [{
        id: 1,
        name: 'Dakota Rice',
        country: 'Niger',
        city: 'Oud-Tunrhout',
        salary: '$35,738'
      }, {
        id: 2,
        name: 'Minerva Hooper',
        country: 'Curaçao',
        city: 'Sinaai-Waas',
        salary: '$23,738'
      }, {
        id: 3,
        name: 'Sage Rodriguez',
        country: 'Netherlands',
        city: 'Overland Park',
        salary: '$56,142'
      }, {
        id: 4,
        name: 'Philip Chanley',
        country: 'Korea, South',
        city: 'Gloucester',
        salary: '$38,735'
      }, {
        id: 5,
        name: 'Doris Greene',
        country: 'Malawi',
        city: 'Feldkirchen in Kārnten',
        salary: '$63,542'
      }],
      tabs: 0,
      tasks: {
        0: [{
          text: 'Sign contract for "What are conference organizers afraid of?"',
          value: true
        }, {
          text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
          value: false
        }, {
          text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
          value: false
        }, {
          text: 'Create 4 Invisible User Experiences you Never Knew About',
          value: true
        }],
        1: [{
          text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
          value: true
        }, {
          text: 'Sign contract for "What are conference organizers afraid of?"',
          value: false
        }],
        2: [{
          text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
          value: false
        }, {
          text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
          value: true
        }, {
          text: 'Sign contract for "What are conference organizers afraid of?"',
          value: true
        }]
      },
      list: {
        0: false,
        1: false,
        2: false
      }
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/Stats.vue?vue&type=template&id=0100726a&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/Stats.vue?vue&type=template&id=0100726a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { app: "" } },
    [
      _c(
        "layout",
        [
          _c("Drawer"),
          _vm._v(" "),
          _c(
            "v-main",
            [
              _c(
                "v-container",
                { attrs: { id: "dashboard", fluid: "", tag: "section" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "6", lg: "6" } },
                        [
                          _c("base-material-stats-card", {
                            attrs: {
                              color: "success",
                              icon: "mdi-store",
                              title: "Total colis",
                              value: _vm.totalColis
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "6", lg: "6" } },
                        [
                          _c("base-material-stats-card", {
                            attrs: {
                              color: "orange",
                              icon: "mdi-sofa",
                              title: "TOtal colis livrés",
                              value: _vm.totalColisLiv
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "12" } },
                        [
                          _c(
                            "base-material-chart-card",
                            {
                              attrs: {
                                data: _vm.emailsSubscriptionChart.data,
                                options: _vm.emailsSubscriptionChart.options,
                                "responsive-options":
                                  _vm.emailsSubscriptionChart.responsiveOptions,
                                color: "#E91E63",
                                "hover-reveal": "",
                                type: "Bar"
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "reveal-actions",
                                  fn: function() {
                                    return [
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { bottom: "" },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var attrs = ref.attrs
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            color: "info",
                                                            icon: ""
                                                          }
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: {
                                                            color: "info"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                  mdi-refresh\n                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ])
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Refresh")])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { bottom: "" },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var attrs = ref.attrs
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            light: "",
                                                            icon: ""
                                                          }
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("mdi-pencil")
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ])
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Change Date")])
                                        ]
                                      )
                                    ]
                                  },
                                  proxy: true
                                },
                                {
                                  key: "actions",
                                  fn: function() {
                                    return [
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mr-1",
                                          attrs: { small: "" }
                                        },
                                        [
                                          _vm._v(
                                            "\n            mdi-clock-outline\n          "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "caption grey--text font-weight-light"
                                        },
                                        [_vm._v("updated 10 minutes ago")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "h4",
                                {
                                  staticClass:
                                    "card-title font-weight-light mt-2 ml-2"
                                },
                                [_vm._v("\n          Colis par mois\n        ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "d-inline-flex font-weight-light ml-2 mt-1"
                                },
                                [
                                  _vm._v(
                                    "\n          Last Campaign Performance\n        "
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "12" } },
                        [
                          _c(
                            "base-material-chart-card",
                            {
                              attrs: {
                                data: _vm.dailySalesChart.data,
                                options: _vm.dailySalesChart.options,
                                color: "success",
                                "hover-reveal": "",
                                type: "Line"
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "reveal-actions",
                                  fn: function() {
                                    return [
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { bottom: "" },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var attrs = ref.attrs
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            color: "info",
                                                            icon: ""
                                                          }
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: {
                                                            color: "info"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                  mdi-refresh\n                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ])
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Refresh")])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { bottom: "" },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var attrs = ref.attrs
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            light: "",
                                                            icon: ""
                                                          }
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("mdi-pencil")
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ])
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Change Date")])
                                        ]
                                      )
                                    ]
                                  },
                                  proxy: true
                                },
                                {
                                  key: "actions",
                                  fn: function() {
                                    return [
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mr-1",
                                          attrs: { small: "" }
                                        },
                                        [
                                          _vm._v(
                                            "\n            mdi-clock-outline\n          "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "caption grey--text font-weight-light"
                                        },
                                        [_vm._v("updated 4 minutes ago")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "h4",
                                {
                                  staticClass:
                                    "card-title font-weight-light mt-2 ml-2"
                                },
                                [
                                  _vm._v(
                                    "\n          Colis livrés par wilaya\n        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "d-inline-flex font-weight-light ml-2 mt-1"
                                },
                                [
                                  _c(
                                    "v-icon",
                                    { attrs: { color: "green", small: "" } },
                                    [
                                      _vm._v(
                                        "\n            mdi-arrow-up\n          "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "green--text" }, [
                                    _vm._v("55%")
                                  ]),
                                  _vm._v(
                                    " \n          increase in today's sales\n        "
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "12" } },
                        [
                          _c(
                            "base-material-chart-card",
                            {
                              attrs: {
                                data: _vm.dataCompletedTasksChart.data,
                                options: _vm.dataCompletedTasksChart.options,
                                "hover-reveal": "",
                                color: "info",
                                type: "Line"
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "reveal-actions",
                                  fn: function() {
                                    return [
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { bottom: "" },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var attrs = ref.attrs
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            color: "info",
                                                            icon: ""
                                                          }
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: {
                                                            color: "info"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                  mdi-refresh\n                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ])
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Refresh")])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { bottom: "" },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var attrs = ref.attrs
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            light: "",
                                                            icon: ""
                                                          }
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("mdi-pencil")
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ])
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Change Date")])
                                        ]
                                      )
                                    ]
                                  },
                                  proxy: true
                                },
                                {
                                  key: "actions",
                                  fn: function() {
                                    return [
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mr-1",
                                          attrs: { small: "" }
                                        },
                                        [
                                          _vm._v(
                                            "\n            mdi-clock-outline\n          "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "caption grey--text font-weight-light"
                                        },
                                        [_vm._v("campaign sent 26 minutes ago")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "card-title font-weight-light mt-2 ml-2"
                                },
                                [
                                  _vm._v(
                                    "\n          Completed Tasks\n        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "d-inline-flex font-weight-light ml-2 mt-1"
                                },
                                [
                                  _vm._v(
                                    "\n          Last Last Campaign Performance\n        "
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/Stats.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/Stats.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stats_vue_vue_type_template_id_0100726a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stats.vue?vue&type=template&id=0100726a& */ "./resources/js/Pages/admin/dashboard/Stats.vue?vue&type=template&id=0100726a&");
/* harmony import */ var _Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stats.vue?vue&type=script&lang=js& */ "./resources/js/Pages/admin/dashboard/Stats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Stats_vue_vue_type_template_id_0100726a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Stats_vue_vue_type_template_id_0100726a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_8__["VMain"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_9__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/admin/dashboard/Stats.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/Stats.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/Stats.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stats.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/Stats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/Stats.vue?vue&type=template&id=0100726a&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/Stats.vue?vue&type=template&id=0100726a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_template_id_0100726a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stats.vue?vue&type=template&id=0100726a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/Stats.vue?vue&type=template&id=0100726a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_template_id_0100726a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_template_id_0100726a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);