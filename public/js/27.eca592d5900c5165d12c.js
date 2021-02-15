(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Default */ "./resources/js/Shared/Default.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['logs'],
  components: {
    layout: _Shared_Default__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  data: function data() {
    return {
      dialogDelete: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 4,
      e1: 1,
      headers: [{
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Calories',
        value: 'calories'
      }, {
        text: 'Fat (g)',
        value: 'fat'
      }, {
        text: 'Carbs (g)',
        value: 'carbs'
      }, {
        text: 'Protein (g)',
        value: 'protein'
      }, {
        text: 'Iron (%)',
        value: 'iron'
      }, {
        text: 'Action',
        value: 'actions'
      }],
      desserts: [{
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%'
      }, {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%'
      }, {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%'
      }, {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%'
      }, {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%'
      }, {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%'
      }, {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%'
      }, {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%'
      }, {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%'
      }, {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%'
      }]
    };
  },
  methods: {
    deleteItem: function deleteItem(item) {
      this.dialogDelete = true;
    },
    closeDelete: function closeDelete() {
      this.dialogDelete = false;
    },
    getColor: function getColor(calories) {
      if (calories > 400) return 'red';else if (calories > 200) return 'orange';else return 'green';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue?vue&type=template&id=50361c3f&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue?vue&type=template&id=50361c3f& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
          _c(
            "v-main",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-timeline",
                    _vm._l(_vm.logs, function(log, i) {
                      return _c(
                        "v-timeline-item",
                        {
                          key: i,
                          attrs: { small: "" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "opposite",
                                fn: function() {
                                  return [
                                    _c("span", {
                                      class:
                                        "headline font-weight-bold " +
                                        log.color +
                                        "--text",
                                      domProps: {
                                        textContent: _vm._s(log.etat1)
                                      }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ],
                            null,
                            true
                          )
                        },
                        [
                          _vm._v(" "),
                          _c("div", { staticClass: "py-4" }, [
                            _c(
                              "h2",
                              {
                                class:
                                  "headline font-weight-light mb-4 " +
                                  _vm.year.color +
                                  "--text"
                              },
                              [
                                _vm._v(
                                  "\n                    Lorem ipsum\n                  "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                "\n                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.\n                  "
                              )
                            ])
                          ])
                        ]
                      )
                    }),
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

/***/ "./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HistoryColis_vue_vue_type_template_id_50361c3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HistoryColis.vue?vue&type=template&id=50361c3f& */ "./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue?vue&type=template&id=50361c3f&");
/* harmony import */ var _HistoryColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HistoryColis.vue?vue&type=script&lang=js& */ "./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VTimeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTimeline */ "./node_modules/vuetify/lib/components/VTimeline/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HistoryColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HistoryColis_vue_vue_type_template_id_50361c3f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HistoryColis_vue_vue_type_template_id_50361c3f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_6__["VMain"],VTimeline: vuetify_lib_components_VTimeline__WEBPACK_IMPORTED_MODULE_7__["VTimeline"],VTimelineItem: vuetify_lib_components_VTimeline__WEBPACK_IMPORTED_MODULE_7__["VTimelineItem"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/admin/dashboard/colis/HistoryColis.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HistoryColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HistoryColis.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HistoryColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue?vue&type=template&id=50361c3f&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue?vue&type=template&id=50361c3f& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HistoryColis_vue_vue_type_template_id_50361c3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HistoryColis.vue?vue&type=template&id=50361c3f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/colis/HistoryColis.vue?vue&type=template&id=50361c3f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HistoryColis_vue_vue_type_template_id_50361c3f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HistoryColis_vue_vue_type_template_id_50361c3f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);