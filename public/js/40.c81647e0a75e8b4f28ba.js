(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/Stats.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/client/dashboard/Stats.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Default */ "./resources/js/Shared/Default.vue");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Drawer */ "./resources/js/Pages/client/Drawer.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  props: ['totalColisLiv', 'totalColis', 'colis', 'colisLiv', 'colisWilaya', 'colisLivWilaya', 'wilayas'],
  components: {
    layout: _Shared_Default__WEBPACK_IMPORTED_MODULE_0__["default"],
    Drawer: _Drawer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var _this = this;

    Object.keys(this.colisLiv).forEach(function (ele) {
      t.splice(ele, 0, _this.colisLiv[ele].length);
    });
    this.emailsSubscriptionChart.data.series.push(t);
    this.emailsSubscriptionChart.options.high = Math.max.apply(Math, t) + 1;
    this.ColisWIL.data.labels = this.wilayas;
    var x = new Array(48).fill(0);
    Object.keys(this.colisLivWilaya).forEach(function (ele) {
      x.splice(ele, 0, _this.colisLivWilaya[ele].length);
    });
    this.ColisWIL.data.series.push(x);
    this.ColisWIL.options.high = Math.max.apply(Math, _toConsumableArray(x)) + 1;
  },
  data: function data() {
    return {
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: []
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
      ColisWIL: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: []
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: []
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/Stats.vue?vue&type=template&id=4e42b7c9&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/client/dashboard/Stats.vue?vue&type=template&id=4e42b7c9& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
                              title: "Total colis livrés",
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
                                      _c("v-tooltip", {
                                        attrs: { bottom: "" },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var attrs = ref.attrs
                                              var on = ref.on
                                              return undefined
                                            }
                                          }
                                        ])
                                      }),
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
                                [
                                  _vm._v(
                                    "\n          Colis Livrés par mois\n        "
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
                                    "\n          Last Campaign Performance\n        "
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

/***/ "./resources/js/Pages/client/dashboard/Stats.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/Stats.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stats_vue_vue_type_template_id_4e42b7c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stats.vue?vue&type=template&id=4e42b7c9& */ "./resources/js/Pages/client/dashboard/Stats.vue?vue&type=template&id=4e42b7c9&");
/* harmony import */ var _Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stats.vue?vue&type=script&lang=js& */ "./resources/js/Pages/client/dashboard/Stats.vue?vue&type=script&lang=js&");
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
  _Stats_vue_vue_type_template_id_4e42b7c9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Stats_vue_vue_type_template_id_4e42b7c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_8__["VMain"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_9__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/client/dashboard/Stats.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/client/dashboard/Stats.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/Stats.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stats.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/Stats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/client/dashboard/Stats.vue?vue&type=template&id=4e42b7c9&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/Stats.vue?vue&type=template&id=4e42b7c9& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_template_id_4e42b7c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stats.vue?vue&type=template&id=4e42b7c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/Stats.vue?vue&type=template&id=4e42b7c9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_template_id_4e42b7c9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_template_id_4e42b7c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);