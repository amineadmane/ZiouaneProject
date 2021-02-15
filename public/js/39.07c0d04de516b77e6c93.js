(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/livreur/dashboard/MesColisEtat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/livreur/dashboard/MesColisEtat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Default */ "./resources/js/Shared/Default.vue");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Drawer */ "./resources/js/Pages/livreur/Drawer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {},
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
      singleSelect: true,
      page: 1,
      selected: [],
      itemTODelete: '',
      pageCount: 0,
      items: ['livré', 'annulé', 'en cours de livraison'],
      itemsPerPage: 4,
      headers: [{
        text: 'client',
        value: 'nomclient'
      }, {
        text: 'Reference',
        value: 'ref'
      }, {
        text: 'Etat',
        value: 'etat1'
      }, {
        text: 'Telephone',
        value: 'telephone'
      }, {
        text: 'Wilaya',
        value: 'wilaya'
      }, {
        text: 'Commune',
        value: 'commune'
      }, {
        text: 'Adresse',
        value: 'adresse'
      }, {
        text: 'CodePostal',
        value: 'codePostal'
      }, {
        text: 'Produits',
        value: 'produits'
      }, {
        text: 'Prix',
        value: 'prix'
      }, {
        text: 'Remarque',
        value: 'remarque'
      }]
    };
  },
  methods: {
    changerEtat: function changerEtat() {
      var _this = this;

      if (this.selected.length == 0) return this.$toast.open({
        message: "Aucun colis selectionné ",
        type: "error",
        duration: 9000,
        dismissible: true,
        position: "top-right"
      });
      var form = {};
      this.selected.forEach(function (element) {
        element.etat1 = _this.etat;
        _this.colis[_this.colis.indexOf(element)] = element;
      });
      form.selected = this.selected;
      form.etat = this.etat;
      this.$inertia.post(route('livreur.changerEtat'), form).then(function () {
        _this.selected = [];

        _this.$toast.open({
          message: "Colis modifié avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
      });
    },
    printColis: function printColis(item) {
      this.$inertia.visit('/mescolis/' + item.id_colis + '/invoice');
    },
    buildTableBody: function buildTableBody(data, columns) {
      var body = [];
      body.push(columns);
      data.forEach(function (row) {
        var dataRow = [];
        columns.forEach(function (column) {
          if (column == "wilaya" || column == "commune") dataRow.push(row[column]['nom'].toString());else if (row[column] == null) dataRow.push("");else dataRow.push(row[column].toString());
        });
        body.push(dataRow);
      });
      return body;
    },
    table: function table(data, columns) {
      return {
        table: {
          widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
          headerRows: 1,
          body: this.buildTableBody(data, columns)
        }
      };
    },
    genPdf: function genPdf() {
      if (this.selected.length == 0) return this.$toast.open({
        message: "Aucun colis selectionné ",
        type: "error",
        duration: 9000,
        dismissible: true,
        position: "top-right"
      });

      var pdfMake = __webpack_require__(/*! pdfmake/build/pdfmake.js */ "./node_modules/pdfmake/build/pdfmake.js");

      if (pdfMake.vfs == undefined) {
        var pdfFonts = __webpack_require__(/*! pdfmake/build/vfs_fonts.js */ "./node_modules/pdfmake/build/vfs_fonts.js");

        pdfMake.vfs = pdfFonts.pdfMake.vfs;
      }

      var dd = [{
        text: 'Tables\n',
        style: 'header',
        bold: true,
        fontSize: 18,
        margin: [0, 20],
        alignment: 'center'
      }, this.table(this.selected, ['ref', 'telephone', 'wilaya', 'commune', 'adresse', 'codePostal', 'produits', 'prix', 'remarque'])];
      var docDefinition = {
        content: dd
      };
      pdfMake.createPdf(docDefinition).print();
    },
    getColor: function getColor(calories) {
      if (calories > 400) return 'red';else if (calories > 200) return 'orange';else return 'green';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/livreur/dashboard/MesColisEtat.vue?vue&type=template&id=72763c7b&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/livreur/dashboard/MesColisEtat.vue?vue&type=template&id=72763c7b& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
                {
                  staticClass: "mt-4",
                  attrs: { id: "dashboard", fluid: "", tag: "section" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mb-4 mt-2 text-center d-flex" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mx-2",
                          attrs: { rounded: "", color: "primary", dark: "" },
                          on: { click: _vm.genPdf }
                        },
                        [_vm._v("\n            Generer pdf\n          ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.headers,
                      "single-select": !_vm.singleSelect,
                      items: _vm.colis,
                      page: _vm.page,
                      "items-per-page": 4,
                      "show-select": "",
                      search: _vm.search,
                      "item-key": "id_colis"
                    },
                    on: {
                      "update:page": function($event) {
                        _vm.page = $event
                      },
                      "page-count": function($event) {
                        _vm.pageCount = $event
                      }
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "top",
                          fn: function() {
                            return [
                              _c("v-text-field", {
                                staticClass: "mx-4",
                                attrs: { label: "Search" },
                                model: {
                                  value: _vm.search,
                                  callback: function($$v) {
                                    _vm.search = $$v
                                  },
                                  expression: "search"
                                }
                              })
                            ]
                          },
                          proxy: true
                        },
                        {
                          key: "item.wilaya",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n            " +
                                  _vm._s(item.wilaya["nom"]) +
                                  "\n           \n            \n          "
                              )
                            ]
                          }
                        },
                        {
                          key: "item.commune",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n            " +
                                  _vm._s(item.commune["nom"]) +
                                  "\n            \n          "
                              )
                            ]
                          }
                        },
                        {
                          key: "item.etat1",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c("v-chip", { attrs: { color: "primary" } }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(item.etat1) +
                                    "\n              "
                                )
                              ])
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    ),
                    model: {
                      value: _vm.selected,
                      callback: function($$v) {
                        _vm.selected = $$v
                      },
                      expression: "selected"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-pagination", {
                    staticClass: "mt-4",
                    attrs: { length: _vm.pageCount },
                    model: {
                      value: _vm.page,
                      callback: function($$v) {
                        _vm.page = $$v
                      },
                      expression: "page"
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/livreur/dashboard/MesColisEtat.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/livreur/dashboard/MesColisEtat.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MesColisEtat_vue_vue_type_template_id_72763c7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MesColisEtat.vue?vue&type=template&id=72763c7b& */ "./resources/js/Pages/livreur/dashboard/MesColisEtat.vue?vue&type=template&id=72763c7b&");
/* harmony import */ var _MesColisEtat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MesColisEtat.vue?vue&type=script&lang=js& */ "./resources/js/Pages/livreur/dashboard/MesColisEtat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VPagination */ "./node_modules/vuetify/lib/components/VPagination/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MesColisEtat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MesColisEtat_vue_vue_type_template_id_72763c7b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MesColisEtat_vue_vue_type_template_id_72763c7b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VDataTable"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_9__["VMain"],VPagination: vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_10__["VPagination"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/livreur/dashboard/MesColisEtat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/livreur/dashboard/MesColisEtat.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/livreur/dashboard/MesColisEtat.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesColisEtat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesColisEtat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/livreur/dashboard/MesColisEtat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesColisEtat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/livreur/dashboard/MesColisEtat.vue?vue&type=template&id=72763c7b&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/livreur/dashboard/MesColisEtat.vue?vue&type=template&id=72763c7b& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesColisEtat_vue_vue_type_template_id_72763c7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesColisEtat.vue?vue&type=template&id=72763c7b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/livreur/dashboard/MesColisEtat.vue?vue&type=template&id=72763c7b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesColisEtat_vue_vue_type_template_id_72763c7b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesColisEtat_vue_vue_type_template_id_72763c7b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);