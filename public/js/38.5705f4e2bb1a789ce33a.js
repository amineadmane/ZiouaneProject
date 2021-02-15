(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/MesColisEtat.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/client/dashboard/MesColisEtat.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Default */ "./resources/js/Shared/Default.vue");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Drawer */ "./resources/js/Pages/client/Drawer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      etat: '',
      search: '',
      items: ['en preparation', 'pret', 'pret a ramasser'],
      selected: [],
      itemTODelete: '',
      pageCount: 0,
      itemsPerPage: 4,
      headers: [{
        text: 'client',
        value: 'nomclient'
      }, {
        text: 'Reference',
        value: 'ref'
      }, {
        text: 'livreur',
        value: 'livreur'
      }, {
        text: 'Etat',
        value: 'etat1'
      }, {
        text: 'Telephone',
        value: 'telephone'
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
        text: 'Frais Livraison',
        value: 'frais'
      }, {
        text: 'Total',
        value: 'total'
      }, {
        text: 'Remarque',
        value: 'remarque'
      }, {
        text: 'Details',
        value: 'details'
      }]
    };
  },
  computed: {
    filteredColis: function filteredColis() {
      var _this = this;

      var result = [];
      this.search = this.search.toLowerCase();
      result = this.colis.filter(function (colis) {
        if (colis.wilaya != null) if (colis.wilaya['nom'].toLowerCase().match(_this.search) != null) {
          return true;
        }
        if (colis.commune != null) if (colis.commune['nom'].toLowerCase().match(_this.search) != null) return true;
        if (colis.etat1 != null) if (colis.etat1.toLowerCase().match(_this.search) != null) return true;
        if (colis.etat2 != null) if (colis.etat2.toLowerCase().match(_this.search) != null) return true;
        return colis.ref.toLowerCase().match(_this.search) != null || colis.codecolis.toLowerCase().match(_this.search) != null || colis.telephone.toLowerCase().match(_this.search) != null || colis.nomclient.toLowerCase().match(_this.search) != null || colis.codePostal.toLowerCase().match(_this.search) != null || colis.adresse.toLowerCase().match(_this.search) != null || colis.produits.toLowerCase().match(_this.search) != null;
      });
      if (result.length > 0) return result;
      return this.tableItems;
    }
  },
  methods: {
    confirmDelete: function confirmDelete(item) {
      var _this2 = this;

      var form = {};
      form.id = item.id_colis;
      this.$inertia.post(route('colis.clientdestory'), form).then(function () {
        _this2.$toast.open({
          message: "Colis supprimé avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
      });
    },
    printColis: function printColis(item) {
      this.$inertia.visit('/colis/' + item.id_colis + '/invoice');
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
    editItem: function editItem(item) {
      this.$inertia.visit('/colis/' + item.id_colis + '/modifier');
    },
    deleteItem: function deleteItem(item) {
      this.itemTODelete = item.id_colis;
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this3 = this;

      var form = {};
      form.id = this.itemTODelete;
      this.$inertia.post(route('colis.clientdestroy'), form).then(function () {
        _this3.dialogDelete = true;
        _this3.itemTODelete = "";

        _this3.$toast.open({
          message: "Colis supprimé avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
      });
    },
    changerEtat: function changerEtat() {
      var _this4 = this;

      var canChange = true;
      if (this.selected.length == 0) return this.$toast.open({
        message: "Aucun colis selectionné ",
        type: "error",
        duration: 9000,
        dismissible: true,
        position: "top-right"
      });

      if (this.etat == "pret a ramasser") {
        var i = 0;
        this.colis.forEach(function (element) {
          if (element.etat1 == "pret a ramasser") i++;
        });
        if (i + this.selected.length < 10) return this.$toast.open({
          message: "la demande de ramassage necessite avoir plus de 10 colis",
          type: "error",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
      }

      var form = {};
      this.selected.forEach(function (element) {
        if (element.etat1 != "en preparation" && element.etat1 != "pret") canChange = false;else element.etat1 = _this4.etat;
        _this4.colis[_this4.colis.indexOf(element)] = element;
      });
      if (!canChange) return this.$toast.open({
        message: "certains colis ne peuvent pas etre modifié ",
        type: "error",
        duration: 9000,
        dismissible: true,
        position: "top-right"
      });
      form.selected = this.selected;
      form.etat = this.etat;
      this.$inertia.post(route('client.changerEtat'), form).then(function () {
        _this4.selected = [];

        _this4.$toast.open({
          message: "Colis modifié avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
      });
    },
    bordereaux: function bordereaux() {
      if (this.selected.length == 0) this.$toast.open({
        message: "Aucun colis selectionné ",
        type: "error",
        duration: 9000,
        dismissible: true,
        position: "top-right"
      });else this.$inertia.post(route('colis.clientInvoices'), this.selected);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/MesColisEtat.vue?vue&type=template&id=7fbe2dd2&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/client/dashboard/MesColisEtat.vue?vue&type=template&id=7fbe2dd2& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
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
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.filteredColis,
                      page: _vm.page,
                      "items-per-page": 4,
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
                                on: {
                                  keyup: function($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.filteredColis()
                                  }
                                },
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
                          key: "item.adresse",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n           " +
                                  _vm._s(item.adresse) +
                                  " , " +
                                  _vm._s(item.commune["nom"]) +
                                  ",  " +
                                  _vm._s(item.wilaya["nom"]) +
                                  " \n          "
                              )
                            ]
                          }
                        },
                        {
                          key: "item.frais",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              item.livraison == 0
                                ? _c("p", [
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(item.wilaya["fraisLivraison"]) +
                                        "\n            "
                                    )
                                  ])
                                : _c(
                                    "v-chip",
                                    { attrs: { color: "primary" } },
                                    [
                                      _vm._v(
                                        "\n              Livraison Gratuite\n              "
                                      )
                                    ]
                                  )
                            ]
                          }
                        },
                        {
                          key: "item.total",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n            " +
                                  _vm._s(
                                    item.livraison == 0
                                      ? item.wilaya["fraisLivraison"] +
                                          item.prix
                                      : item.prix
                                  ) +
                                  "\n          "
                              )
                            ]
                          }
                        },
                        {
                          key: "item.details",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm.colis.id_colisLivre != undefined
                                ? _c("div")
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "Inertia-link",
                                {
                                  attrs: {
                                    href: "/colis/history/" + item.id_colis
                                  }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      staticClass: "mr-2 mx-2",
                                      attrs: { small: "", color: "primary" }
                                    },
                                    [
                                      _vm._v(
                                        "\n               mdi-history\n              "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        },
                        {
                          key: "item.livreur",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n            " +
                                  _vm._s(
                                    item.Livreur != null
                                      ? item.Livreur["nom"] +
                                          " " +
                                          item.Livreur["prenom"]
                                      : ""
                                  ) +
                                  "\n           \n            \n          "
                              )
                            ]
                          }
                        },
                        {
                          key: "item.ref",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c("v-chip", { attrs: { color: "primary" } }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(item.ref) +
                                    "\n              "
                                )
                              ])
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
                                    _vm._s(
                                      item.etat2 != null
                                        ? item.etat1 + " ( " + item.etat2 + " )"
                                        : item.etat1
                                    ) +
                                    "\n              "
                                )
                              ])
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
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

/***/ "./resources/js/Pages/client/dashboard/MesColisEtat.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/MesColisEtat.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MesColisEtat_vue_vue_type_template_id_7fbe2dd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MesColisEtat.vue?vue&type=template&id=7fbe2dd2& */ "./resources/js/Pages/client/dashboard/MesColisEtat.vue?vue&type=template&id=7fbe2dd2&");
/* harmony import */ var _MesColisEtat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MesColisEtat.vue?vue&type=script&lang=js& */ "./resources/js/Pages/client/dashboard/MesColisEtat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VPagination */ "./node_modules/vuetify/lib/components/VPagination/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MesColisEtat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MesColisEtat_vue_vue_type_template_id_7fbe2dd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MesColisEtat_vue_vue_type_template_id_7fbe2dd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__["VChip"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VDataTable"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_9__["VMain"],VPagination: vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_10__["VPagination"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/client/dashboard/MesColisEtat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/client/dashboard/MesColisEtat.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/MesColisEtat.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesColisEtat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesColisEtat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/MesColisEtat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesColisEtat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/client/dashboard/MesColisEtat.vue?vue&type=template&id=7fbe2dd2&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/MesColisEtat.vue?vue&type=template&id=7fbe2dd2& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesColisEtat_vue_vue_type_template_id_7fbe2dd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesColisEtat.vue?vue&type=template&id=7fbe2dd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/MesColisEtat.vue?vue&type=template&id=7fbe2dd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesColisEtat_vue_vue_type_template_id_7fbe2dd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesColisEtat_vue_vue_type_template_id_7fbe2dd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);