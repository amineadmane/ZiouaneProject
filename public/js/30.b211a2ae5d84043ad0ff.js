(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['payes', 'livres', 'annules'],
  components: {
    layout: _Shared_Default__WEBPACK_IMPORTED_MODULE_0__["default"],
    Drawer: _Drawer__WEBPACK_IMPORTED_MODULE_1__["default"]
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
    this.annules.map(function (element) {
      if (element.etat2 == "pret") {
        this.colisAnnuPret.push(element);
        if (element.etat1 == "retourné") return this.totalAnnuPret = this.totalAnnuPret + element.wilaya.fraisLivraison;else this.totalAnnuPret = this.totalAnnuPret + element.wilaya.fraisLivraison / 2;
      } else {
        this.colisAnnunonPret.push(element);
        if (element.etat1 == "retourné") return this.totalAnnuProchain = this.totalAnnuProchain + element.wilaya.fraisLivraison;else this.totalAnnuProchain = this.totalAnnuProchain + element.wilaya.fraisLivraison / 2;
      }
    });
  },
  data: function data() {
    return {
      expanded: [],
      colisPret: [],
      totalAnnunonPret: 0,
      colisAnnunonPret: [],
      colisAnnuPret: [],
      totalAnnuProchain: 0,
      totalAnnuPret: 0,
      colisnonPret: [],
      dialogPret: false,
      dialognonPret: false,
      dialogannunonpret: false,
      dialogannupret: false,
      dialogpaye: false,
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
    changerEtatPaiementLivré: function changerEtatPaiementLivr() {
      var _this = this;

      var form = {}; //pop elements

      form.selected = this.colisPret;
      form.etat = 'payé';
      if (this.etats.length > 1) this.$inertia.post(route('admin.paiementsetatclient'), form).then(function () {
        _this.selected = [];
        _this.colisPret = [];

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
    changerEtatPaiementAnuule: function changerEtatPaiementAnuule() {
      var _this2 = this;

      var form = {}; //pop elements

      form.selected = this.colisAnnuPret;
      form.etat = 'payé';
      if (this.etats.length > 1) this.$inertia.post(route('admin.changerEtatRetour'), form).then(function () {
        _this2.selected = [];
        _this2.colisPret = [];

        _this2.$toast.open({
          message: "Colis modifié avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
      });else this.$inertia.post(route('admin.paiementsetatclient'), form).then(function () {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue?vue&type=template&id=641498dc&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue?vue&type=template&id=641498dc& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
                          { attrs: { "two-line": "" } },
                          [
                            _c(
                              "v-list-item-group",
                              {
                                attrs: {
                                  "active-class": "pink--text",
                                  multiple: ""
                                }
                              },
                              [
                                _vm._l(_vm.colisPret, function(item, index) {
                                  return [
                                    _c("v-list-item", {
                                      key: item.id_colis,
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function() {
                                              return [
                                                _c(
                                                  "v-list-item-content",
                                                  [
                                                    _c(
                                                      "v-list-item-title",
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
                                                              "\n                          " +
                                                                _vm._s(
                                                                  item.etat2 !=
                                                                    null
                                                                    ? item.etat1 +
                                                                        " ( " +
                                                                        item.etat2 +
                                                                        " )"
                                                                    : item.etat1
                                                                ) +
                                                                "\n                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("br"),
                                                        _vm._v(" "),
                                                        _c("br"),
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              item.nomclient
                                                            ) +
                                                            "\n                        \n                        "
                                                        ),
                                                        _c("br"),
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              item.adresse
                                                            ) +
                                                            "   ,  " +
                                                            _vm._s(
                                                              item.wilaya["nom"]
                                                            ) +
                                                            "  , " +
                                                            _vm._s(
                                                              item.commune[
                                                                "nom"
                                                              ]
                                                            ) +
                                                            "\n                        \n                      "
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("v-list-item-subtitle", {
                                                      staticClass:
                                                        "text--primary",
                                                      domProps: {
                                                        textContent: _vm._s(
                                                          item.headline
                                                        )
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("v-list-item-subtitle", {
                                                      domProps: {
                                                        textContent: _vm._s(
                                                          item.subtitle
                                                        )
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-list-item-action",
                                                  [
                                                    _c(
                                                      "v-list-item-action-text",
                                                      [_vm._v(_vm._s(item.ref))]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("br"),
                                                    _vm._v(" "),
                                                    _c("div", [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(item.prix) +
                                                          " DZD\n      \n                      "
                                                      )
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            },
                                            proxy: true
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("v-divider", { key: index })
                                  ]
                                })
                              ],
                              2
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
                          [_vm._v("Fermer")]
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
          ),
          _vm._v(" "),
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
                          { attrs: { "two-line": "" } },
                          [
                            _c(
                              "v-list-item-group",
                              {
                                attrs: {
                                  "active-class": "pink--text",
                                  multiple: ""
                                }
                              },
                              [
                                _vm._l(_vm.colisnonPret, function(item, index) {
                                  return [
                                    _c("v-list-item", {
                                      key: item.id_colislivre,
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function() {
                                              return [
                                                _c(
                                                  "v-list-item-content",
                                                  [
                                                    _c(
                                                      "v-list-item-title",
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
                                                              "\n                          " +
                                                                _vm._s(
                                                                  item.etat2 !=
                                                                    null
                                                                    ? item.etat1 +
                                                                        " ( " +
                                                                        item.etat2 +
                                                                        " )"
                                                                    : item.etat1
                                                                ) +
                                                                "\n                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("br"),
                                                        _vm._v(" "),
                                                        _c("br"),
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              item.nomclient
                                                            ) +
                                                            "\n                        \n                        "
                                                        ),
                                                        _c("br"),
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              item.adresse
                                                            ) +
                                                            "   ,  " +
                                                            _vm._s(
                                                              item.wilaya["nom"]
                                                            ) +
                                                            "  , " +
                                                            _vm._s(
                                                              item.commune[
                                                                "nom"
                                                              ]
                                                            ) +
                                                            "\n                        \n                      "
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("v-list-item-subtitle", {
                                                      staticClass:
                                                        "text--primary",
                                                      domProps: {
                                                        textContent: _vm._s(
                                                          item.headline
                                                        )
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("v-list-item-subtitle", {
                                                      domProps: {
                                                        textContent: _vm._s(
                                                          item.subtitle
                                                        )
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-list-item-action",
                                                  [
                                                    _c(
                                                      "v-list-item-action-text",
                                                      [_vm._v(_vm._s(item.ref))]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("br"),
                                                    _vm._v(" "),
                                                    _c("div", [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(item.prix) +
                                                          " DZD\n      \n                      "
                                                      )
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            },
                                            proxy: true
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("v-divider", { key: index })
                                  ]
                                })
                              ],
                              2
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
                                _vm.dialognonPret = false
                              }
                            }
                          },
                          [_vm._v("Fermer")]
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
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: {
                transition: "dialog-top-transition",
                "max-width": "600"
              },
              model: {
                value: _vm.dialogpaye,
                callback: function($$v) {
                  _vm.dialogpaye = $$v
                },
                expression: "dialogpaye"
              }
            },
            [
              [
                _c(
                  "v-card",
                  [
                    _c("v-toolbar", { attrs: { color: "primary", dark: "" } }, [
                      _vm._v("Paye\n            ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-list",
                          { attrs: { "two-line": "" } },
                          [
                            _c(
                              "v-list-item-group",
                              {
                                attrs: {
                                  "active-class": "pink--text",
                                  multiple: ""
                                }
                              },
                              [
                                _vm._l(_vm.payes, function(item, index) {
                                  return [
                                    _c("v-list-item", {
                                      key: item.id_colis,
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function() {
                                              return [
                                                _c(
                                                  "v-list-item-content",
                                                  [
                                                    _c(
                                                      "v-list-item-title",
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
                                                              "\n                          " +
                                                                _vm._s(
                                                                  item.etat2 !=
                                                                    null
                                                                    ? item.etat1 +
                                                                        " ( " +
                                                                        item.etat2 +
                                                                        " )"
                                                                    : item.etat1
                                                                ) +
                                                                "\n                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("br"),
                                                        _vm._v(" "),
                                                        _c("br"),
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              item.nomclient
                                                            ) +
                                                            "\n                        \n                        "
                                                        ),
                                                        _c("br"),
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              item.adresse
                                                            ) +
                                                            "   ,  " +
                                                            _vm._s(
                                                              item.wilaya["nom"]
                                                            ) +
                                                            "  , " +
                                                            _vm._s(
                                                              item.commune[
                                                                "nom"
                                                              ]
                                                            ) +
                                                            "\n                        \n                      "
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("v-list-item-subtitle", {
                                                      staticClass:
                                                        "text--primary",
                                                      domProps: {
                                                        textContent: _vm._s(
                                                          item.headline
                                                        )
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("v-list-item-subtitle", {
                                                      domProps: {
                                                        textContent: _vm._s(
                                                          item.subtitle
                                                        )
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-list-item-action",
                                                  [
                                                    _c(
                                                      "v-list-item-action-text",
                                                      [_vm._v(_vm._s(item.ref))]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("br"),
                                                    _vm._v(" "),
                                                    _c("div", [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(item.prix) +
                                                          " DZD\n      \n                      "
                                                      )
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            },
                                            proxy: true
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("v-divider", { key: index })
                                  ]
                                })
                              ],
                              2
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
                                _vm.dialogpaye = false
                              }
                            }
                          },
                          [_vm._v("Fermer")]
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
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: {
                transition: "dialog-top-transition",
                "max-width": "600"
              },
              model: {
                value: _vm.dialogannupret,
                callback: function($$v) {
                  _vm.dialogannupret = $$v
                },
                expression: "dialogannupret"
              }
            },
            [
              [
                _c(
                  "v-card",
                  [
                    _c("v-toolbar", { attrs: { color: "primary", dark: "" } }, [
                      _vm._v("Retours pret\n            ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-list",
                          { attrs: { "two-line": "" } },
                          [
                            _c(
                              "v-list-item-group",
                              {
                                attrs: {
                                  "active-class": "pink--text",
                                  multiple: ""
                                }
                              },
                              [
                                _vm._l(_vm.colisAnnuPret, function(
                                  item,
                                  index
                                ) {
                                  return [
                                    _c("v-list-item", {
                                      key: item.id_colisannule,
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function() {
                                              return [
                                                _c(
                                                  "v-list-item-content",
                                                  [
                                                    _c(
                                                      "v-list-item-title",
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
                                                              "\n                          " +
                                                                _vm._s(
                                                                  item.etat2 !=
                                                                    null
                                                                    ? item.etat1 +
                                                                        " ( " +
                                                                        item.etat2 +
                                                                        " )"
                                                                    : item.etat1
                                                                ) +
                                                                "\n                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("br"),
                                                        _vm._v(" "),
                                                        _c("br"),
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              item.nomclient
                                                            ) +
                                                            "\n                        \n                        "
                                                        ),
                                                        _c("br"),
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              item.adresse
                                                            ) +
                                                            "   ,  " +
                                                            _vm._s(
                                                              item.wilaya["nom"]
                                                            ) +
                                                            "  , " +
                                                            _vm._s(
                                                              item.commune[
                                                                "nom"
                                                              ]
                                                            ) +
                                                            "\n                        \n                      "
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("v-list-item-subtitle", {
                                                      staticClass:
                                                        "text--primary",
                                                      domProps: {
                                                        textContent: _vm._s(
                                                          item.headline
                                                        )
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("v-list-item-subtitle", {
                                                      domProps: {
                                                        textContent: _vm._s(
                                                          item.subtitle
                                                        )
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-list-item-action",
                                                  [
                                                    _c(
                                                      "v-list-item-action-text",
                                                      [_vm._v(_vm._s(item.ref))]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("br"),
                                                    _vm._v(" "),
                                                    _c("div", [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(item.prix) +
                                                          " DZD\n      \n                      "
                                                      )
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            },
                                            proxy: true
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("v-divider", { key: index })
                                  ]
                                })
                              ],
                              2
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
                                _vm.dialogannupret = false
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
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: {
                transition: "dialog-top-transition",
                "max-width": "600"
              },
              model: {
                value: _vm.dialogannunonpret,
                callback: function($$v) {
                  _vm.dialogannunonpret = $$v
                },
                expression: "dialogannunonpret"
              }
            },
            [
              [
                _c(
                  "v-card",
                  [
                    _c("v-toolbar", { attrs: { color: "primary", dark: "" } }, [
                      _vm._v("Retours non pret\n            ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-list",
                          { attrs: { "two-line": "" } },
                          [
                            _c(
                              "v-list-item-group",
                              {
                                attrs: {
                                  "active-class": "pink--text",
                                  multiple: ""
                                }
                              },
                              [
                                _vm._l(_vm.colisAnnunonPret, function(
                                  item,
                                  index
                                ) {
                                  return [
                                    _c("v-list-item", {
                                      key: item.id_colisannule,
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function() {
                                              return [
                                                _c(
                                                  "v-list-item-content",
                                                  [
                                                    _c(
                                                      "v-list-item-title",
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
                                                              "\n                          " +
                                                                _vm._s(
                                                                  item.etat2 !=
                                                                    null
                                                                    ? item.etat1 +
                                                                        " ( " +
                                                                        item.etat2 +
                                                                        " )"
                                                                    : item.etat1
                                                                ) +
                                                                "\n                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("br"),
                                                        _vm._v(" "),
                                                        _c("br"),
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              item.nomclient
                                                            ) +
                                                            "\n                        \n                        "
                                                        ),
                                                        _c("br"),
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              item.adresse
                                                            ) +
                                                            "   ,  " +
                                                            _vm._s(
                                                              item.wilaya["nom"]
                                                            ) +
                                                            "  , " +
                                                            _vm._s(
                                                              item.commune[
                                                                "nom"
                                                              ]
                                                            ) +
                                                            "\n                        \n                      "
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("v-list-item-subtitle", {
                                                      staticClass:
                                                        "text--primary",
                                                      domProps: {
                                                        textContent: _vm._s(
                                                          item.headline
                                                        )
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("v-list-item-subtitle", {
                                                      domProps: {
                                                        textContent: _vm._s(
                                                          item.subtitle
                                                        )
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-list-item-action",
                                                  [
                                                    _c(
                                                      "v-list-item-action-text",
                                                      [_vm._v(_vm._s(item.ref))]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("br"),
                                                    _vm._v(" "),
                                                    _c("div", [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(item.prix) +
                                                          " DZD\n      \n                      "
                                                      )
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            },
                                            proxy: true
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("v-divider", { key: index })
                                  ]
                                })
                              ],
                              2
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
                                _vm.dialogannunonpret = false
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
          ),
          _vm._v(" "),
          _c(
            "v-main",
            [
              _c(
                "v-container",
                {
                  staticClass: "mt-2",
                  attrs: { id: "dashboard", fluid: "", tag: "section" }
                },
                [
                  _c("base-material-card", {
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
                                  "\n              Payé  " +
                                    _vm._s(_vm.totalPayes) +
                                    " DZD\n              "
                                ),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "ma-2 white--text",
                                    attrs: { color: "secondary" },
                                    on: {
                                      click: function($event) {
                                        _vm.dialogpaye = true
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
                                  "\n              Livrés Pret " +
                                    _vm._s(_vm.totalPret) +
                                    " DZD\n              "
                                ),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "ma-2 white--text",
                                    attrs: { color: "secondary" },
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "ma-2 white--text",
                                    attrs: { color: "blue-grey" },
                                    on: { click: _vm.changerEtatPaiementLiv }
                                  },
                                  [
                                    _vm._v(
                                      "\n                Payé \n              "
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
                                  "\n              Prochain  " +
                                    _vm._s(_vm.totalProchain) +
                                    " \n              "
                                ),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "ma-2 white--text",
                                    attrs: { color: "secondary" },
                                    on: {
                                      click: function($event) {
                                        _vm.dialognonPret = true
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
                                  "\n              Annulés pret  " +
                                    _vm._s(_vm.totalAnnuPret) +
                                    "  DZD\n              "
                                ),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "ma-2 white--text",
                                    attrs: { color: "secondary" },
                                    on: {
                                      click: function($event) {
                                        _vm.dialogannupret = true
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                Details \n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "ma-2 white--text",
                                    attrs: { color: "blue-grey" },
                                    on: { click: _vm.changerEtatPaiementLiv }
                                  },
                                  [
                                    _vm._v(
                                      "\n                Payé \n              "
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
                                  "\n              Annules non  pret  " +
                                    _vm._s(_vm.totalAnnunonPret) +
                                    "  DZD\n              "
                                ),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "ma-2 white--text",
                                    attrs: { color: "secondary" },
                                    on: {
                                      click: function($event) {
                                        _vm.dialogannunonpret = true
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

/***/ "./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailsClient_vue_vue_type_template_id_641498dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailsClient.vue?vue&type=template&id=641498dc& */ "./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue?vue&type=template&id=641498dc&");
/* harmony import */ var _DetailsClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsClient.vue?vue&type=script&lang=js& */ "./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetailsClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailsClient_vue_vue_type_template_id_641498dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailsClient_vue_vue_type_template_id_641498dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_10__["VDivider"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemAction"],VListItemActionText: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemActionText"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemContent"],VListItemGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemGroup"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemTitle"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_12__["VMain"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__["VToolbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/admin/dashboard/clients/DetailsClient.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsClient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue?vue&type=template&id=641498dc&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue?vue&type=template&id=641498dc& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsClient_vue_vue_type_template_id_641498dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsClient.vue?vue&type=template&id=641498dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/clients/DetailsClient.vue?vue&type=template&id=641498dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsClient_vue_vue_type_template_id_641498dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsClient_vue_vue_type_template_id_641498dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);