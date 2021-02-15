(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Default */ "./resources/js/Shared/Default.vue");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Drawer */ "./resources/js/Pages/admin/Drawer.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['nonprets'],
  components: {
    layout: _Shared_Default__WEBPACK_IMPORTED_MODULE_0__["default"],
    Drawer: _Drawer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    indexedItems: function indexedItems() {
      var _this = this;

      return this.tableItems.map(function (items, index) {
        return _objectSpread(_objectSpread({}, items), {}, {
          id: index + 1,
          total: _this.findTotal(items)
        });
      });
    },
    findTotal: function findTotal(items) {
      var total = 0;
      console.log(items);
      items.forEach(function (element) {
        //alert(JSON.stringify(element)); 
        return total = total + element.prix;
      });
      return total;
    }
  },
  mounted: function mounted() {
    this.tableItems = Object.values(this.nonprets);
  },
  data: function data() {
    return {
      expanded: [],
      filtered: false,
      singleExpand: false,
      livreur: '',
      x: '',
      etat: "",
      selected: [],
      dialog: false,
      singleSelect: true,
      page: 1,
      items: ['Centre'],
      tableItems: [],
      search: '',
      pageCount: 0,
      editedItem: {
        nomclient: '',
        telephone: '',
        wilaya: '',
        commune: '',
        adresse: '',
        produits: '',
        codeCommande: '',
        prix: '',
        livraison: '',
        remarque: '',
        codePostal: ''
      },
      itemsPerPage: 4,
      headers: [{
        text: 'Livreur',
        value: 'livreur'
      }, {
        text: 'Total',
        value: 'total'
      }, {
        text: 'etat',
        value: 'etat'
      }, {
        text: '',
        value: 'data-table-expand'
      }]
    };
  },
  methods: {
    text: function text(item) {
      return item.nom + " " + item.prenom;
    },
    buildTableBody: function buildTableBody(data, columns) {
      var body = [];
      body.push(columns);
      data.forEach(function (row) {
        var dataRow = [];
        Object.values(row).forEach(function (element) {
          if (element.wilaya != undefined) {
            columns.forEach(function (column) {
              if (column == "wilaya" || column == "commune") {
                dataRow.push(element[column]['nom'].toString());
              } else if (element[column] == null) dataRow.push("");else dataRow.push(element[column].toString());
            });
            body.push(dataRow);
            dataRow = [];
          }
        });
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
    DetailsItem: function DetailsItem(item) {
      this.editedIndex = this.colis.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    changerEtat: function changerEtat() {
      var _this2 = this;

      if (this.selected.length == 0) return this.$toast.open({
        message: "Aucun colis selectionné ",
        type: "error",
        duration: 9000,
        dismissible: true,
        position: "top-right"
      });
      var form = {};
      this.selected.forEach(function (element) {
        element.etat1 = _this2.etat;
        _this2.colis[_this2.colis.indexOf(element)] = element;
      });
      form.selected = this.selected;
      form.etat = this.etat;
      this.$inertia.post(route('admin.changerEtat'), form).then(function () {
        _this2.selected = [];

        _this2.$toast.open({
          message: "Colis modifié avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
      });
    },
    attribuerLivreur: function attribuerLivreur() {
      var _this3 = this;

      if (this.selected.length == 0) return this.$toast.open({
        message: "Aucun colis selectionné ",
        type: "error",
        duration: 9000,
        dismissible: true,
        position: "top-right"
      });
      if (this.selected[0][0].etat1 == "ramassé") return this.$toast.open({
        message: "Colis deja ramassé ",
        type: "error",
        duration: 9000,
        dismissible: true,
        position: "top-right"
      });
      var form = {};
      form.selected = this.selected;
      form.livreur = this.livreur;
      this.$inertia.post(route('admin.attribuerLivreurRamassage'), form).then(function () {
        _this3.selected = [];

        _this3.$toast.open({
          message: "Colis modifié avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
      });
    },
    closeDetails: function closeDetails() {
      this.dialog = false;
    },
    deleteItem: function deleteItem(item) {
      this.dialogDelete = true;
    },
    closeDelete: function closeDelete() {
      this.dialogDelete = false;
    },
    filterElements: function filterElements() {
      this.filtered = !this.filtered;
      if (this.filtered) this.tableItems = this.colis.filter(function (element) {
        return element.wilaya['id'] != 1;
      });else this.tableItems = this.colis;
      return this.tableItems;
    },
    getColor: function getColor(calories) {
      if (calories > 400) return 'red';else if (calories > 200) return 'orange';else return 'green';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=template&id=28475b11&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=template&id=28475b11& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
        "v-dialog",
        {
          staticStyle: { "backgroud-color": "transparent" },
          attrs: {
            "hide-overlay": "",
            transition: "dialog-bottom-transition",
            "max-width": "800px"
          },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v("Details Colis")
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "base-material-card",
                        {
                          staticClass: "px-5 py-3 ",
                          attrs: { color: "primary" },
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
                            { staticClass: "mt-4", attrs: { dense: "" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      outlined: "",
                                      disabled: "",
                                      label: "Nom Complet"
                                    },
                                    model: {
                                      value: _vm.editedItem.nomclient,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem,
                                          "nomclient",
                                          $$v
                                        )
                                      },
                                      expression: "editedItem.nomclient"
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
                                      disabled: "",
                                      label: "Numéro de téléphone"
                                    },
                                    model: {
                                      value: _vm.editedItem.telephone,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem,
                                          "telephone",
                                          $$v
                                        )
                                      },
                                      expression: "editedItem.telephone"
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
                          attrs: { color: "primary" },
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
                            { staticClass: "mt-4", attrs: { dense: "" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      outlined: "",
                                      disabled: "",
                                      label: "Adresse"
                                    },
                                    model: {
                                      value: _vm.editedItem.adresse,
                                      callback: function($$v) {
                                        _vm.$set(_vm.editedItem, "adresse", $$v)
                                      },
                                      expression: "editedItem.adresse"
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
                                    attrs: { disabled: "", outlined: "" },
                                    model: {
                                      value: _vm.editedItem.wilaya["nom"],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem.wilaya,
                                          "nom",
                                          $$v
                                        )
                                      },
                                      expression: "editedItem.wilaya['nom']"
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
                                    attrs: { outlined: "", disabled: "" },
                                    model: {
                                      value: _vm.editedItem.commune["nom"],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem.commune,
                                          "nom",
                                          $$v
                                        )
                                      },
                                      expression: "editedItem.commune['nom']"
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
                                      disabled: "",
                                      label: "Code postal"
                                    },
                                    model: {
                                      value: _vm.editedItem.codePostal,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem,
                                          "codePostal",
                                          $$v
                                        )
                                      },
                                      expression: "editedItem.codePostal"
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
                          attrs: { color: "primary" },
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
                            { staticClass: "mt-4", attrs: { dense: "" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      outlined: "",
                                      disabled: "",
                                      label: "Produit(s)"
                                    },
                                    model: {
                                      value: _vm.editedItem.produits,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem,
                                          "produits",
                                          $$v
                                        )
                                      },
                                      expression: "editedItem.produits"
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
                                      label: "code commande"
                                    },
                                    model: {
                                      value: _vm.editedItem.codeCommande,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem,
                                          "codeCommande",
                                          $$v
                                        )
                                      },
                                      expression: "editedItem.codeCommande"
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
                                    attrs: { outlined: "", label: "Prix" },
                                    model: {
                                      value: _vm.editedItem.prix,
                                      callback: function($$v) {
                                        _vm.$set(_vm.editedItem, "prix", $$v)
                                      },
                                      expression: "editedItem.prix"
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
                                      label: "Remarque"
                                    },
                                    model: {
                                      value: _vm.editedItem.remarque,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem,
                                          "remarque",
                                          $$v
                                        )
                                      },
                                      expression: "editedItem.remarque"
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
                                      disabled: "",
                                      color: "red darken-3"
                                    },
                                    model: {
                                      value: _vm.editedItem.livraison,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem,
                                          "livraison",
                                          $$v
                                        )
                                      },
                                      expression: "editedItem.livraison"
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
                      _c("v-card-actions", [_c("v-spacer")], 1)
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
                    { staticClass: "ml-4" },
                    [
                      _c(
                        "v-row",
                        {},
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "3" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mt-6",
                                  attrs: {
                                    fab: "",
                                    dark: "",
                                    large: "",
                                    color: "primary"
                                  },
                                  on: { click: _vm.attribuerLivreur }
                                },
                                [
                                  _c("v-icon", { attrs: { dark: "" } }, [
                                    _vm._v(
                                      "\n                    mdi-check\n                  "
                                    )
                                  ])
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
                    { staticClass: "text-right ml-4" },
                    [
                      _c(
                        "v-row",
                        {},
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-2",
                              attrs: {
                                rounded: "",
                                color: "primary",
                                dark: ""
                              },
                              on: { click: _vm.genPdf }
                            },
                            [
                              _vm._v(
                                "\n              Generer pdf\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "download-excel",
                            {
                              attrs: {
                                data: _vm.selected,
                                worksheet: "My Worksheet",
                                name: "filename.xls"
                              }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mx-2",
                                  attrs: {
                                    rounded: "",
                                    color: "primary",
                                    dark: ""
                                  }
                                },
                                [_vm._v("\n            Excel\n          ")]
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
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.headers,
                      "single-select": !_vm.singleSelect,
                      items: _vm.indexedItems,
                      "show-expand": "",
                      page: _vm.page,
                      "items-per-page": 4,
                      "single-expand": _vm.singleExpand,
                      expanded: _vm.expanded,
                      "show-select": "",
                      search: _vm.search,
                      "item-key": "id"
                    },
                    on: {
                      "update:page": function($event) {
                        _vm.page = $event
                      },
                      "update:expanded": function($event) {
                        _vm.expanded = $event
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
                          key: "expanded-item",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n              \n              " +
                                  _vm._s(item[0]) +
                                  "\n            "
                              )
                            ]
                          }
                        },
                        {
                          key: "item.livreur",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c("v-chip", { attrs: { color: "primary" } }, [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(item[0]["wilaa"]) +
                                    "\n               "
                                )
                              ])
                            ]
                          }
                        },
                        {
                          key: "item.total",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                " \n            " +
                                  _vm._s(item.total) +
                                  "\n          "
                              )
                            ]
                          }
                        },
                        {
                          key: "item.etat",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              item[0].etat1 != null
                                ? _c(
                                    "div",
                                    [
                                      _c(
                                        "v-chip",
                                        { attrs: { color: "primary" } },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(item[0].etat1) +
                                              "\n               "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ]
                          }
                        },
                        {
                          key: "item.telephone",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n           " +
                                  _vm._s(item[0].client["telephone"]) +
                                  "\n            \n          "
                              )
                            ]
                          }
                        },
                        {
                          key: "item.adresse",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n           " +
                                  _vm._s(item[0].client["adresse"]) +
                                  "\n            \n          "
                              )
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

/***/ "./resources/js/Pages/admin/dashboard/MesPaiements.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/MesPaiements.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MesPaiements_vue_vue_type_template_id_28475b11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MesPaiements.vue?vue&type=template&id=28475b11& */ "./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=template&id=28475b11&");
/* harmony import */ var _MesPaiements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MesPaiements.vue?vue&type=script&lang=js& */ "./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VPagination */ "./node_modules/vuetify/lib/components/VPagination/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MesPaiements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MesPaiements_vue_vue_type_template_id_28475b11___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MesPaiements_vue_vue_type_template_id_28475b11___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_7__["VCheckbox"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_11__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_13__["VMain"],VPagination: vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_14__["VPagination"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VRow"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/admin/dashboard/MesPaiements.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesPaiements.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=template&id=28475b11&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=template&id=28475b11& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_template_id_28475b11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesPaiements.vue?vue&type=template&id=28475b11& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=template&id=28475b11&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_template_id_28475b11___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_template_id_28475b11___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);