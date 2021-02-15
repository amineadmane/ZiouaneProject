(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/MesPaiements.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/client/dashboard/MesPaiements.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Default */ "./resources/js/Shared/Default.vue");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Drawer */ "./resources/js/Pages/client/Drawer.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['payes', 'livres'],
  components: {
    layout: _Shared_Default__WEBPACK_IMPORTED_MODULE_0__["default"],
    Drawer: _Drawer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    indexedItems: function indexedItems() {
      return this.tableItems.map(function (items, index) {
        return _objectSpread(_objectSpread({}, items), {}, {
          id: index + 1
        });
      });
    },
    findTotal: function findTotal() {
      var total = 0;
    }
  },
  mounted: function mounted() {
    this.payes.map(function (element) {
      return this.totalPayes = this.totalPayes + element.prix;
    });
    this.livres.map(function (element) {
      if (element.etat2 == "pret") {
        this.colisPret.push(element);
        return this.totalPret = this.totalPret + element.prix;
      } else {
        this.colisnonPret.push(element);
        return this.totalProchain = this.totalProchain + element.prix;
      }
    });
  },
  data: function data() {
    return {
      expanded: [],
      colisPret: [],
      colisnonPret: [],
      dialogPret: false,
      filtered: false,
      singleExpand: false,
      totalPayes: 0,
      totalPret: 0,
      totalProchain: 0,
      livreur: '',
      x: '',
      etat: "pret",
      selected: [],
      dialog: false,
      singleSelect: true,
      page: 1,
      items: ['pret', 'pas pret'],
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
    changerEtatPaiement: function changerEtatPaiement() {
      var _this = this;

      if (this.selected.length == 0) return this.$toast.open({
        message: "Aucun colis selectionné ",
        type: "error",
        duration: 9000,
        dismissible: true,
        position: "top-right"
      });
      var form = {}; //pop elements

      form.selected = this.selected;
      form.etat = this.etat;
      if (this.etats.length > 1) this.$inertia.post(route('admin.paiementsetat'), form).then(function () {
        _this.selected = [];

        _this.$toast.open({
          message: "Colis modifié avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
      });else this.$inertia.post(route('admin.paiementsetatclient'), form).then(function () {
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
    attribuerLivreur: function attribuerLivreur() {
      var _this2 = this;

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/MesPaiements.vue?vue&type=template&id=46c0f053&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/client/dashboard/MesPaiements.vue?vue&type=template&id=46c0f053& ***!
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
        "v-col",
        { attrs: { cols: "auto" } },
        [
          _c(
            "v-dialog",
            {
              attrs: {
                transition: "dialog-top-transition",
                "max-width": "600"
              },
              model: {
                value: _vm.dialogPret,
                callback: function($$v) {
                  _vm.dialogPret = $$v
                },
                expression: "dialogPret"
              }
            },
            [
              [
                _c(
                  "v-card",
                  [
                    _c("v-toolbar", { attrs: { color: "primary", dark: "" } }, [
                      _vm._v("Colis Prets \n            ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-list",
                          [
                            _c(
                              "v-list-item-group",
                              _vm._l(_vm.colisPret, function(colis, i) {
                                return _c(
                                  "v-list-item",
                                  { key: i },
                                  [
                                    _c("v-list-item-content", [
                                      _c("tr", [
                                        colis.ref != null
                                          ? _c("div", [
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.ref) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  _c(
                                                    "v-chip",
                                                    {
                                                      attrs: {
                                                        color: "primary"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                    " +
                                                          _vm._s(colis.etat1) +
                                                          "\n                                  "
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  colis.livreur != null
                                                    ? _c(
                                                        "v-chip",
                                                        {
                                                          attrs: {
                                                            color: "primary"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                    " +
                                                              _vm._s(
                                                                colis.livreur[
                                                                  "nom"
                                                                ]
                                                              ) +
                                                              " " +
                                                              _vm._s(
                                                                colis.livreur[
                                                                  "prenom"
                                                                ]
                                                              ) +
                                                              "\n                                  "
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(colis.telephone) +
                                                      "\n                              "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(
                                                        colis.wilaya != null
                                                          ? colis.wilaya["nom"]
                                                          : ""
                                                      ) +
                                                      "\n                              "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(
                                                      colis.commune != null
                                                        ? colis.commune["nom"]
                                                        : ""
                                                    ) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.adresse) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.codePostal) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.produits) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.prix) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.remarque) +
                                                    "\n                              "
                                                )
                                              ])
                                            ])
                                          : _vm._e()
                                      ])
                                    ])
                                  ],
                                  1
                                )
                              }),
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
                      "v-card-actions",
                      { staticClass: "justify-end" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { text: "" },
                            on: {
                              click: function($event) {
                                _vm.dialogPret = false
                              }
                            }
                          },
                          [_vm._v("Close")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "auto" } },
        [
          _c(
            "v-dialog",
            {
              attrs: {
                transition: "dialog-top-transition",
                "max-width": "600"
              },
              model: {
                value: _vm.dialognonPret,
                callback: function($$v) {
                  _vm.dialognonPret = $$v
                },
                expression: "dialognonPret"
              }
            },
            [
              [
                _c(
                  "v-card",
                  [
                    _c("v-toolbar", { attrs: { color: "primary", dark: "" } }, [
                      _vm._v("Paiement pas pret \n            ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-list",
                          [
                            _c(
                              "v-list-item-group",
                              _vm._l(_vm.colisnonPret, function(colis, i) {
                                return _c(
                                  "v-list-item",
                                  { key: i },
                                  [
                                    _c("v-list-item-content", [
                                      _c("tr", [
                                        colis.ref != null
                                          ? _c("div", [
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.ref) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  _c(
                                                    "v-chip",
                                                    {
                                                      attrs: {
                                                        color: "primary"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                    " +
                                                          _vm._s(colis.etat1) +
                                                          "\n                                  "
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  colis.livreur != null
                                                    ? _c(
                                                        "v-chip",
                                                        {
                                                          attrs: {
                                                            color: "primary"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                    " +
                                                              _vm._s(
                                                                colis.livreur[
                                                                  "nom"
                                                                ]
                                                              ) +
                                                              " " +
                                                              _vm._s(
                                                                colis.livreur[
                                                                  "prenom"
                                                                ]
                                                              ) +
                                                              "\n                                  "
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(colis.telephone) +
                                                      "\n                              "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(
                                                        colis.wilaya != null
                                                          ? colis.wilaya["nom"]
                                                          : ""
                                                      ) +
                                                      "\n                              "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(
                                                      colis.commune != null
                                                        ? colis.commune["nom"]
                                                        : ""
                                                    ) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.adresse) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.codePostal) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.produits) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.prix) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.remarque) +
                                                    "\n                              "
                                                )
                                              ])
                                            ])
                                          : _vm._e()
                                      ])
                                    ])
                                  ],
                                  1
                                )
                              }),
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
                      "v-card-actions",
                      { staticClass: "justify-end" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { text: "" },
                            on: {
                              click: function($event) {
                                _vm.dialogPret = false
                              }
                            }
                          },
                          [_vm._v("Close")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "auto" } },
        [
          _c(
            "v-dialog",
            {
              attrs: {
                transition: "dialog-top-transition",
                "max-width": "600"
              },
              model: {
                value: _vm.dialogprochain,
                callback: function($$v) {
                  _vm.dialogprochain = $$v
                },
                expression: "dialogprochain"
              }
            },
            [
              [
                _c(
                  "v-card",
                  [
                    _c("v-toolbar", { attrs: { color: "primary", dark: "" } }, [
                      _vm._v("Paiement  pret \n            ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-list",
                          [
                            _c(
                              "v-list-item-group",
                              _vm._l(_vm.colisnonPret, function(colis, i) {
                                return _c(
                                  "v-list-item",
                                  { key: i },
                                  [
                                    _c("v-list-item-content", [
                                      _c("tr", [
                                        colis.ref != null
                                          ? _c("div", [
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.ref) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  _c(
                                                    "v-chip",
                                                    {
                                                      attrs: {
                                                        color: "primary"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                    " +
                                                          _vm._s(colis.etat1) +
                                                          "\n                                  "
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  colis.livreur != null
                                                    ? _c(
                                                        "v-chip",
                                                        {
                                                          attrs: {
                                                            color: "primary"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                    " +
                                                              _vm._s(
                                                                colis.livreur[
                                                                  "nom"
                                                                ]
                                                              ) +
                                                              " " +
                                                              _vm._s(
                                                                colis.livreur[
                                                                  "prenom"
                                                                ]
                                                              ) +
                                                              "\n                                  "
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(colis.telephone) +
                                                      "\n                              "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(
                                                        colis.wilaya != null
                                                          ? colis.wilaya["nom"]
                                                          : ""
                                                      ) +
                                                      "\n                              "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(
                                                      colis.commune != null
                                                        ? colis.commune["nom"]
                                                        : ""
                                                    ) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.adresse) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.codePostal) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.produits) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.prix) +
                                                    "\n                              "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                  " +
                                                    _vm._s(colis.remarque) +
                                                    "\n                              "
                                                )
                                              ])
                                            ])
                                          : _vm._e()
                                      ])
                                    ])
                                  ],
                                  1
                                )
                              }),
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
                      "v-card-actions",
                      { staticClass: "justify-end" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { text: "" },
                            on: {
                              click: function($event) {
                                _vm.dialogPret = false
                              }
                            }
                          },
                          [_vm._v("Close")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            ],
            2
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
                  _c("base-material-card", {
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
                                  "\n              Payé  " +
                                    _vm._s(_vm.totalPayes) +
                                    "\n              "
                                ),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "ma-2 white--text",
                                    attrs: { color: "blue-grey" },
                                    on: {
                                      click: function($event) {
                                        _vm.loader = "loading5"
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                Details \n              "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("base-material-card", {
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
                                  "\n              Pret " +
                                    _vm._s(_vm.totalPret) +
                                    "\n              "
                                ),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "ma-2 white--text",
                                    attrs: { color: "blue-grey" },
                                    on: {
                                      click: function($event) {
                                        _vm.dialogPret = true
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                Details \n              "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("base-material-card", {
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
                                  "\n              Prochain  " +
                                    _vm._s(_vm.totalProchain) +
                                    " \n              "
                                ),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "ma-2 white--text",
                                    attrs: { color: "blue-grey" },
                                    on: {
                                      click: function($event) {
                                        _vm.loader = "loading5"
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                Details \n              "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
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

/***/ "./resources/js/Pages/client/dashboard/MesPaiements.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/MesPaiements.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MesPaiements_vue_vue_type_template_id_46c0f053___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MesPaiements.vue?vue&type=template&id=46c0f053& */ "./resources/js/Pages/client/dashboard/MesPaiements.vue?vue&type=template&id=46c0f053&");
/* harmony import */ var _MesPaiements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MesPaiements.vue?vue&type=script&lang=js& */ "./resources/js/Pages/client/dashboard/MesPaiements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MesPaiements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MesPaiements_vue_vue_type_template_id_46c0f053___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MesPaiements_vue_vue_type_template_id_46c0f053___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__["VDialog"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemContent"],VListItemGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemGroup"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_11__["VMain"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_12__["VToolbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/client/dashboard/MesPaiements.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/client/dashboard/MesPaiements.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/MesPaiements.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesPaiements.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/MesPaiements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/client/dashboard/MesPaiements.vue?vue&type=template&id=46c0f053&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/MesPaiements.vue?vue&type=template&id=46c0f053& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_template_id_46c0f053___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesPaiements.vue?vue&type=template&id=46c0f053& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/MesPaiements.vue?vue&type=template&id=46c0f053&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_template_id_46c0f053___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_template_id_46c0f053___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);