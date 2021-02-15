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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    },
    filteredColis: function filteredColis() {
      var _this2 = this;

      var result = [];
      this.search = this.search.toLowerCase();
      return this.indexedItems.filter(function (colis) {
        var c = colis[0];
        if (c.client.wilaya != null && _typeof(c.client.wilaya) == 'object') if (c.client.wilaya.toLowerCase().match(_this2.search) != null) {
          return true;
        }
        if (c.client.commune != null && _typeof(c.client.commune) == 'object') if (c.client.commune['nom'].toLowerCase().match(_this2.search) != null) return true;
        if (colis.etat1 != null) if (colis.etat1.toLowerCase().match(_this2.search) != null) return true;
        return c.client.nom.toLowerCase().match(_this2.search) != null || c.client.prenom.toLowerCase().match(_this2.search) != null || c.client.telephone.toLowerCase().match(_this2.search) != null || c.client.adresse.toLowerCase().match(_this2.search) != null;
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.tableItems = Object.values(this.colis);
    this.tableItems.forEach(function (element) {
      var t = _this.totalRamasser(element);

      element['total'] = t;
    });
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
      dialogPret: false,
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
        codePostal: ''
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
        text: 'Total a ramasser',
        value: 'total'
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
      this.colisPret = this.indexedItems[id];
      this.dialogPret = true;
    },
    totalRamasser: function totalRamasser(item) {
      var total = 0;
      item.forEach(function (element) {
        if (element.livraison == 1) return total = total + element.wilaya['fraisLivraison'];
      });
      return total;
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
        width: 100,
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0YAAAF2CAYAAABKwYicAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAhcaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgcGhvdG9zaG9wOkxlZ2FjeUlQVENEaWdlc3Q9IjcxQTFEQzczMDFBRDM2RDE0QkVEQjQxMjEwNzkyQ0EyIiBwaG90b3Nob3A6VHJhbnNtaXNzaW9uUmVmZXJlbmNlPSJQS0tDSktESXhxWE0yU2w5anMtXyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY1NWY5NDE3LTI1OGEtZDE0MS1hYjY3LTc3ODRlY2E5ZWIyZiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MzQ4ZWRiNy00NGYyLTE5NGUtOTE2Yi04MjlmYWJhMDU5NjciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iRDI2RTkxMkJDOTVBNzcyOTQ5NEJEMkZBREJCQzcwRjciIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wOS0wN1QxMTowODoxNiswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDktMDdUMTE6MTg6NDYrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDktMDdUMTE6MTg6NDYrMDE6MDAiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5EMjZFOTEyQkM5NUE3NzI5NDk0QkQyRkFEQkJDNzBGNzwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3Yzg3ZGIxNi00ZTYzLTI2NDAtOTU4MC00NDA4YmU1NjUzMzIiIHN0RXZ0OndoZW49IjIwMjAtMDktMDdUMTE6MTg6NDYrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzM0OGVk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'
      }, {
        text: 'Les Colis\n',
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
      this.$inertia.post(route('livreur.changerEtatR'), form);
      this.selected = [];
      this.$toast.open({
        message: "Colis modifié avec succés ",
        type: "success",
        duration: 9000,
        dismissible: true,
        position: "top-right"
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
                  _vm._v("Mes Ramassages   \n            ")
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
                  staticClass: "mt-2",
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
                                attrs: { items: _vm.items, outlined: "" },
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
                      items: _vm.filteredColis,
                      page: _vm.page,
                      "items-per-page": 4,
                      "show-select": "",
                      "item-key": "id"
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
                          key: "item.client",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n            " +
                                  _vm._s(item[0].client["nom"]) +
                                  " " +
                                  _vm._s(item[0].client["prenom"]) +
                                  "\n          "
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
                                            "\n                " +
                                              _vm._s(item.total) +
                                              "    " +
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
                          key: "item.total",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c("v-chip", { attrs: { color: "red" } }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(item.total) +
                                    "  DZD \n               "
                                )
                              ])
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