(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Default */ "./resources/js/Shared/Default.vue");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Drawer */ "./resources/js/Pages/admin/Drawer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['colis'],
  components: {
    layout: _Shared_Default__WEBPACK_IMPORTED_MODULE_0__["default"],
    Drawer: _Drawer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  watch: {},
  data: function data() {
    return {
      nom: '',
      prenom: '',
      numero: '',
      adresse: '',
      wilaya: '',
      commune: '',
      codePostal: '',
      codeCommande: '',
      produits: '',
      valid: true,
      lazy: false,
      e1: 1,
      rules: {
        required: function required(value) {
          return !!value || "Champ pbligatoire.";
        },
        counter: function counter(value) {
          return value.length >= 8 || "longueur minimum 8 caractères";
        },
        email: function email(value) {
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue?vue&type=template&id=2b669251&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue?vue&type=template&id=2b669251& ***!
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
          _c("Drawer"),
          _vm._v(" "),
          _c(
            "v-main",
            [
              _c(
                "v-container",
                { attrs: { id: "user-profile", fluid: "", tag: "section" } },
                [
                  _c(
                    "div",
                    { staticClass: "text-left" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-3",
                          attrs: { elevation: "1", fab: "", small: "" }
                        },
                        [
                          _c("v-icon", [
                            _vm._v("\n        mdi-arrow-left\n      ")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { justify: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c(
                            "v-form",
                            {
                              ref: "form",
                              attrs: { action: "", "lazy-validation": "" },
                              model: {
                                value: _vm.valid,
                                callback: function($$v) {
                                  _vm.valid = $$v
                                },
                                expression: "valid"
                              }
                            },
                            [
                              _c(
                                "base-material-card",
                                {
                                  staticClass: "px-5 py-3 ",
                                  attrs: { color: "" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "heading",
                                      fn: function() {
                                        return [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "display-2 font-weight-light text-center"
                                            },
                                            [
                                              _vm._v(
                                                "\n              Informations sur le client\n            "
                                              )
                                            ]
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
                                    "v-row",
                                    {
                                      staticClass: "mt-4",
                                      attrs: { dense: "" }
                                    },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "12" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: [_vm.rules.required],
                                              outlined: "",
                                              label: "Nom"
                                            },
                                            model: {
                                              value: _vm.colis.nomclient,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.colis,
                                                  "nomclient",
                                                  $$v
                                                )
                                              },
                                              expression: "colis.nomclient"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              rules: [_vm.rules.required],
                                              label: "Numéro de téléphone"
                                            },
                                            model: {
                                              value: _vm.colis.telephone,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.colis,
                                                  "telephone",
                                                  $$v
                                                )
                                              },
                                              expression: "colis.telephone"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "base-material-card",
                                {
                                  staticClass: "px-5 py-3 mt-10",
                                  attrs: { color: "info" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "heading",
                                      fn: function() {
                                        return [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "display-2 font-weight-light text-center"
                                            },
                                            [
                                              _vm._v(
                                                "\n              Informations sur la livraison\n            "
                                              )
                                            ]
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
                                    "v-row",
                                    {
                                      staticClass: "mt-4",
                                      attrs: { dense: "" }
                                    },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              disabled: "",
                                              rules: [_vm.rules.required],
                                              label: "Adresse"
                                            },
                                            model: {
                                              value: _vm.colis.adresse,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.colis,
                                                  "adresse",
                                                  $$v
                                                )
                                              },
                                              expression: "colis.adresse"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              disabled: "",
                                              label: "Wilaya"
                                            },
                                            model: {
                                              value: _vm.colis.wilaya,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.colis,
                                                  "wilaya",
                                                  $$v
                                                )
                                              },
                                              expression: "colis.wilaya"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              outlined: "",
                                              disabled: "",
                                              label: "Commune"
                                            },
                                            model: {
                                              value: _vm.colis.commune,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.colis,
                                                  "commune",
                                                  $$v
                                                )
                                              },
                                              expression: "colis.commune"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              disabled: "",
                                              rules: [_vm.rules.required],
                                              label: "Code postal"
                                            },
                                            model: {
                                              value: _vm.colis.codePostal,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.colis,
                                                  "codePostal",
                                                  $$v
                                                )
                                              },
                                              expression: "colis.codePostal"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              disabled: "",
                                              label: "frais livraison"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "base-material-card",
                                {
                                  staticClass: "px-5 py-3 mt-10",
                                  attrs: { color: "info" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "heading",
                                      fn: function() {
                                        return [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "display-2 font-weight-light text-center"
                                            },
                                            [
                                              _vm._v(
                                                "\n              Informations sur la livraison\n            "
                                              )
                                            ]
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
                                    "v-row",
                                    {
                                      staticClass: "mt-4",
                                      attrs: { dense: "" }
                                    },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              disabled: "",
                                              rules: [_vm.rules.required],
                                              label: "Produit(s)"
                                            },
                                            model: {
                                              value: _vm.colis.produits,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.colis,
                                                  "produits",
                                                  $$v
                                                )
                                              },
                                              expression: "colis.produits"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              disabled: "",
                                              rules: [_vm.rules.required],
                                              label: "code commande"
                                            },
                                            model: {
                                              value: _vm.colis.codecolis,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.colis,
                                                  "codecolis",
                                                  $$v
                                                )
                                              },
                                              expression: "colis.codecolis"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-checkbox", {
                                            attrs: {
                                              label: "Livraison Gratuite",
                                              color: "red darken-3",
                                              disabled: ""
                                            }
                                          })
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

/***/ "./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailsColis_vue_vue_type_template_id_2b669251___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailsColis.vue?vue&type=template&id=2b669251& */ "./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue?vue&type=template&id=2b669251&");
/* harmony import */ var _DetailsColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsColis.vue?vue&type=script&lang=js& */ "./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetailsColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailsColis_vue_vue_type_template_id_2b669251___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailsColis_vue_vue_type_template_id_2b669251___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_10__["VMain"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_11__["VSelect"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/admin/dashboard/colis/DetailsColis.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsColis.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue?vue&type=template&id=2b669251&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue?vue&type=template&id=2b669251& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsColis_vue_vue_type_template_id_2b669251___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsColis.vue?vue&type=template&id=2b669251& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/colis/DetailsColis.vue?vue&type=template&id=2b669251&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsColis_vue_vue_type_template_id_2b669251___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsColis_vue_vue_type_template_id_2b669251___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);