(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/livreur/dashboard/MesRamassages.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/livreur/dashboard/MesRamassages.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Default */ "./resources/js/Shared/Default.vue");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Drawer */ "./resources/js/Pages/livreur/Drawer.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['colis', 'livreurs'],
  components: {
    layout: _Shared_Default__WEBPACK_IMPORTED_MODULE_0__["default"],
    Drawer: _Drawer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    indexedItems: function indexedItems() {
      return this.tableItems.map(function (item, index) {
        return _objectSpread({
          id: item[0].client['id_client']
        }, item);
      });
    }
  },
  mounted: function mounted() {
    this.tableItems = Object.values(this.colis);
  },
  data: function data() {
    return {
      expanded: [],
      i: '',
      filtered: false,
      singleExpand: false,
      livreur: '',
      etat: "",
      selected: [],
      dialog: false,
      singleSelect: true,
      page: 1,
      items: ['ramassé'],
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
        codePostal: '',
        dialogPret: false
      },
      itemsPerPage: 4,
      colisPret: '',
      headers: [{
        text: 'client',
        value: 'client'
      }, {
        text: 'telephone',
        value: 'telephone'
      }, {
        text: 'adresse',
        value: 'adresse'
      }, {
        text: 'livreur',
        value: 'livreur'
      }, {
        text: 'etat',
        value: 'etat'
      }, {
        text: 'Details',
        value: 'details'
      }]
    };
  },
  methods: {
    text: function text(item) {
      return item.nom + " " + item.prenom;
    },
    OpenDetails: function OpenDetails(id) {
      alert(id);
      this.colisPretthis.indexedItems[id];
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
    changerEtatRamassage: function changerEtatRamassage() {
      var _this = this;

      if (this.selected.length == 0) return this.$toast.open({
        message: "Aucun colis selectionné ",
        type: "error",
        duration: 9000,
        dismissible: true,
        position: "top-right"
      });
      var form = {};
      form.selected = this.selected;
      form.etat = this.etat;
      this.$inertia.post(route('livreur.changerEtatR'), form).then(function () {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/livreur/dashboard/MesRamassages.vue?vue&type=template&id=f8806f10&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/livreur/dashboard/MesRamassages.vue?vue&type=template&id=f8806f10& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
          attrs: { transition: "dialog-top-transition", "max-width": "500" },
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
                  _vm._v("Colis Prets  \n            ")
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
                                                              item.etat2 != null
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
                                                        _vm._s(item.nomclient) +
                                                        "\n                        \n                        "
                                                    ),
                                                    _c("br"),
                                                    _vm._v(
                                                      "\n                        " +
                                                        _vm._s(item.adresse) +
                                                        "   ,  " +
                                                        _vm._s(
                                                          item.wilaya["nom"]
                                                        ) +
                                                        "  , " +
                                                        _vm._s(
                                                          item.commune["nom"]
                                                        ) +
                                                        "\n                        \n                      "
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", {
                                                  staticClass: "text--primary",
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
                                                _c("v-list-item-action-text", [
                                                  _vm._v(_vm._s(item.ref))
                                                ]),
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
                              _c("h4", [_vm._v("Changer l'etat a  ")]),
                              _vm._v(" "),
                              _c("v-select", {
                                staticClass: "mt-2",
                                attrs: {
                                  items: _vm.items,
                                  label: "etat",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.etat,
                                  callback: function($$v) {
                                    _vm.etat = $$v
                                  },
                                  expression: "etat"
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
                                  on: { click: _vm.changerEtatRamassage }
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
                            var headers = ref.headers
                            return _vm._l(item, function(colis) {
                              return _c(
                                "tr",
                                {
                                  key: colis.id_colis,
                                  attrs: { colspan: headers }
                                },
                                [
                                  colis.ref != null
                                    ? _c("div", [
                                        _c("td", [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(colis.ref) +
                                              "\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { attrs: { colspan: "2" } },
                                          [
                                            _c(
                                              "v-chip",
                                              { attrs: { color: "primary" } },
                                              [
                                                _vm._v(
                                                  "\n                          " +
                                                    _vm._s(colis.etat1) +
                                                    "\n                        "
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
                                                    attrs: { color: "primary" }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                          " +
                                                        _vm._s(
                                                          colis.livreur["nom"]
                                                        ) +
                                                        " " +
                                                        _vm._s(
                                                          colis.livreur[
                                                            "prenom"
                                                          ]
                                                        ) +
                                                        "\n                        "
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("td", { attrs: { colspan: "2" } }, [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(colis.telephone) +
                                              "\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", { attrs: { colspan: "2" } }, [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(
                                                colis.wilaya != null
                                                  ? colis.wilaya["nom"]
                                                  : ""
                                              ) +
                                              "\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(
                                                colis.commune != null
                                                  ? colis.commune["nom"]
                                                  : ""
                                              ) +
                                              "\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(colis.adresse) +
                                              "\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(colis.codePostal) +
                                              "\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(colis.produits) +
                                              "\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(colis.prix) +
                                              "\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(colis.remarque) +
                                              "\n                    "
                                          )
                                        ])
                                      ])
                                    : _vm._e()
                                ]
                              )
                            })
                          }
                        },
                        {
                          key: "item.client",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n            " +
                                  _vm._s(item[0].client["nom"]) +
                                  " " +
                                  _vm._s(item[0].client["prenom"]) +
                                  "\n           \n            \n          "
                              )
                            ]
                          }
                        },
                        {
                          key: "item.livreur",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              item[0].livreur != null
                                ? _c(
                                    "div",
                                    [
                                      _c(
                                        "v-chip",
                                        { attrs: { color: "primary" } },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(item[0].livreur["nom"]) +
                                              " " +
                                              _vm._s(
                                                item[0].livreur["prenom"]
                                              ) +
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
                                "\n            " +
                                  _vm._s(item[0].client["telephone"]) +
                                  "\n          "
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
                        },
                        {
                          key: "item.details",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary", text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.i = _vm.indexedItems.indexOf(item)
                                      _vm.OpenDetails(_vm.i)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              Details\n            "
                                  )
                                ]
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

/***/ "./resources/js/Pages/livreur/dashboard/MesRamassages.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/livreur/dashboard/MesRamassages.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MesRamassages_vue_vue_type_template_id_f8806f10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MesRamassages.vue?vue&type=template&id=f8806f10& */ "./resources/js/Pages/livreur/dashboard/MesRamassages.vue?vue&type=template&id=f8806f10&");
/* harmony import */ var _MesRamassages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MesRamassages.vue?vue&type=script&lang=js& */ "./resources/js/Pages/livreur/dashboard/MesRamassages.vue?vue&type=script&lang=js&");
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
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VPagination */ "./node_modules/vuetify/lib/components/VPagination/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MesRamassages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MesRamassages_vue_vue_type_template_id_f8806f10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MesRamassages_vue_vue_type_template_id_f8806f10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_7__["VCheckbox"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_11__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_12__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_13__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemAction"],VListItemActionText: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemActionText"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemContent"],VListItemGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemGroup"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemTitle"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_15__["VMain"],VPagination: vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_16__["VPagination"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_17__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_18__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_19__["VToolbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/livreur/dashboard/MesRamassages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/livreur/dashboard/MesRamassages.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/livreur/dashboard/MesRamassages.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesRamassages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesRamassages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/livreur/dashboard/MesRamassages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesRamassages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/livreur/dashboard/MesRamassages.vue?vue&type=template&id=f8806f10&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/livreur/dashboard/MesRamassages.vue?vue&type=template&id=f8806f10& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesRamassages_vue_vue_type_template_id_f8806f10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesRamassages.vue?vue&type=template&id=f8806f10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/livreur/dashboard/MesRamassages.vue?vue&type=template&id=f8806f10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesRamassages_vue_vue_type_template_id_f8806f10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesRamassages_vue_vue_type_template_id_f8806f10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);