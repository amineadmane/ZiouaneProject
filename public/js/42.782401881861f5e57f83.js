(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/colis/AjouterColis.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/client/dashboard/colis/AjouterColis.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Default */ "./resources/js/Shared/Default.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Drawer */ "./resources/js/Pages/client/Drawer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['page', 'wilayas', 'communes'],
  components: {
    layout: _Shared_Default__WEBPACK_IMPORTED_MODULE_0__["default"],
    Drawer: _Drawer__WEBPACK_IMPORTED_MODULE_2__["default"]
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
      fraisLivraison: 0,
      form: {
        nomclient: '',
        codecolis: '',
        telephone: '',
        adresse: '',
        wilaya: '',
        prix: '',
        remarque: '',
        commune: '',
        codePostal: '',
        produits: '',
        livraison: ''
      },
      communes: [],
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
  methods: {
    validate: function validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) return this.createColis();
    },
    createColis: function createColis() {
      var _this = this;

      if (this.form.livraison == true) this.form.livraison = 1;else this.form.livraison = 0;
      this.$inertia.post(route('colis.store'), this.form).then(function () {
        _this.$toast.open({
          message: "Colis ajouté avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
      });
    },
    onChange: function onChange() {
      var _this2 = this;

      var element = this.wilayas.find(function (Element) {
        return Element.id == _this2.form.wilaya;
      });
      this.fraisLivraison = element['fraisLivraison'];
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/communes/' + this.form.wilaya).then(function (response) {
        _this2.communes = response.data.communes;
      });
    },
    validate_form2: function validate_form2() {
      this.$refs.form2.validate();
      if (this.$refs.form2.validate()) this.e1 = 3;
    },
    validate_form3: function validate_form3() {
      this.$refs.form3.validate();
      if (this.$refs.form3.validate()) this.e1 = 3;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/colis/AjouterColis.vue?vue&type=template&id=128a8063&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/client/dashboard/colis/AjouterColis.vue?vue&type=template&id=128a8063& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
                                  attrs: { color: "primary", width: "40%" },
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
                                              label: "Nom Complet"
                                            },
                                            model: {
                                              value: _vm.form.nomclient,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "nomclient",
                                                  $$v
                                                )
                                              },
                                              expression: "form.nomclient"
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
                                              type: "number",
                                              rules: [_vm.rules.required],
                                              label: "Numéro de téléphone"
                                            },
                                            model: {
                                              value: _vm.form.telephone,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "telephone",
                                                  $$v
                                                )
                                              },
                                              expression: "form.telephone"
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
                              _c("div"),
                              _vm._v(" "),
                              _c(
                                "base-material-card",
                                {
                                  staticClass: "px-5 py-3 mt-10",
                                  attrs: { color: "primary", width: "40%" },
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
                                              rules: [_vm.rules.required],
                                              label: "Adresse"
                                            },
                                            model: {
                                              value: _vm.form.adresse,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "adresse",
                                                  $$v
                                                )
                                              },
                                              expression: "form.adresse"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "4" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              outlined: "",
                                              items: _vm.wilayas,
                                              "item-text": "nom",
                                              "item-value": "code",
                                              rules: [_vm.rules.required],
                                              label: "Wilaya"
                                            },
                                            on: { change: _vm.onChange },
                                            model: {
                                              value: _vm.form.wilaya,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "wilaya",
                                                  $$v
                                                )
                                              },
                                              expression: "form.wilaya"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "4" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              outlined: "",
                                              items: _vm.communes,
                                              "item-text": "nom",
                                              "item-value": "id",
                                              rules: [_vm.rules.required],
                                              label: "Commune"
                                            },
                                            model: {
                                              value: _vm.form.commune,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "commune",
                                                  $$v
                                                )
                                              },
                                              expression: "form.commune"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "4" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              label: "Frais livraison",
                                              disabled: ""
                                            },
                                            model: {
                                              value: _vm.fraisLivraison,
                                              callback: function($$v) {
                                                _vm.fraisLivraison = $$v
                                              },
                                              expression: "fraisLivraison"
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
                                              label: "Code postal"
                                            },
                                            model: {
                                              value: _vm.form.codePostal,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "codePostal",
                                                  $$v
                                                )
                                              },
                                              expression: "form.codePostal"
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
                                  attrs: { color: "primary", width: "40%" },
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
                                              rules: [_vm.rules.required],
                                              label: "Produit(s)"
                                            },
                                            model: {
                                              value: _vm.form.produits,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "produits",
                                                  $$v
                                                )
                                              },
                                              expression: "form.produits"
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
                                              rules: [_vm.rules.required],
                                              label: "code commande"
                                            },
                                            model: {
                                              value: _vm.form.codecolis,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "codecolis",
                                                  $$v
                                                )
                                              },
                                              expression: "form.codecolis"
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
                                              type: "number",
                                              rules: [_vm.rules.required],
                                              label: "Prix"
                                            },
                                            model: {
                                              value: _vm.form.prix,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "prix", $$v)
                                              },
                                              expression: "form.prix"
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
                                              rules: [_vm.rules.required],
                                              label: "Remarque"
                                            },
                                            model: {
                                              value: _vm.form.remarque,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "remarque",
                                                  $$v
                                                )
                                              },
                                              expression: "form.remarque"
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
                                              color: "red darken-3"
                                            },
                                            model: {
                                              value: _vm.form.livraison,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "livraison",
                                                  $$v
                                                )
                                              },
                                              expression: "form.livraison"
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
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "d-flex justify-end" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary" },
                                  on: { click: _vm.validate }
                                },
                                [_vm._v("\n          Sauvegarder\n      ")]
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

/***/ "./resources/js/Pages/client/dashboard/colis/AjouterColis.vue":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/colis/AjouterColis.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AjouterColis_vue_vue_type_template_id_128a8063___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AjouterColis.vue?vue&type=template&id=128a8063& */ "./resources/js/Pages/client/dashboard/colis/AjouterColis.vue?vue&type=template&id=128a8063&");
/* harmony import */ var _AjouterColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AjouterColis.vue?vue&type=script&lang=js& */ "./resources/js/Pages/client/dashboard/colis/AjouterColis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AjouterColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AjouterColis_vue_vue_type_template_id_128a8063___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AjouterColis_vue_vue_type_template_id_128a8063___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_9__["VMain"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/client/dashboard/colis/AjouterColis.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/client/dashboard/colis/AjouterColis.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/colis/AjouterColis.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AjouterColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AjouterColis.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/colis/AjouterColis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AjouterColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/client/dashboard/colis/AjouterColis.vue?vue&type=template&id=128a8063&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/colis/AjouterColis.vue?vue&type=template&id=128a8063& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AjouterColis_vue_vue_type_template_id_128a8063___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AjouterColis.vue?vue&type=template&id=128a8063& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/colis/AjouterColis.vue?vue&type=template&id=128a8063&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AjouterColis_vue_vue_type_template_id_128a8063___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AjouterColis_vue_vue_type_template_id_128a8063___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);