(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var read_excel_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! read-excel-file */ "./node_modules/read-excel-file/index.js");
/* harmony import */ var _Shared_Default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Default */ "./resources/js/Shared/Default.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Drawer */ "./resources/js/Pages/client/Drawer.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['wilayas', 'communes'],
  components: {
    layout: _Shared_Default__WEBPACK_IMPORTED_MODULE_1__["default"],
    Drawer: _Drawer__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    },
    loader: function loader() {
      var _this = this;

      var l = this.loader;
      this[l] = !this[l];
      setTimeout(function () {
        return _this[l] = false;
      }, 3000);
      this.loader = null;
    }
  },
  computed: {
    filteredColis: function filteredColis() {
      var _this2 = this;

      var result = [];
      this.search = this.search.toLowerCase();
      result = this.colis.filter(function (colis) {
        if (colis.wilaya != null) if (colis.wilaya.toString().toLowerCase().match(_this2.search) != null) {
          return true;
        }
        if (colis.commune != null) if (colis.commune.toLowerCase().match(_this2.search) != null) return true;
        if (colis.remarque != null) if (colis.remarque.toString().toLowerCase().match(_this2.search) != null) return true;
        return colis.ref.toLowerCase().match(_this2.search) != null || colis.codecolis.toLowerCase().match(_this2.search) != null || colis.telephone.toLowerCase().match(_this2.search) != null || colis.nomclient.toLowerCase().match(_this2.search) != null || colis.codePostal.toLowerCase().match(_this2.search) != null || colis.adresse.toLowerCase().match(_this2.search) != null || colis.produits.toLowerCase().match(_this2.search) != null;
      });
      if (result.length > 0) return result;
      return this.tableItems;
    }
  },
  data: function data() {
    return {
      file: '',
      dialog: false,
      loader: null,
      loading5: false,
      dialogDelete: false,
      page: 1,
      search: '',
      communes: '',
      pageCount: 0,
      rules: {
        required: function required(value) {
          return !!value || "Champ pbligatoire.";
        }
      },
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
      defaultItem: {
        nomclient: '',
        telephone: 0,
        wilaya: '',
        commune: '',
        adresse: '',
        produits: '',
        codeCommande: '',
        prix: '',
        livraison: '',
        remarque: ''
      },
      itemsPerPage: 4,
      headers: [{
        text: 'Code',
        align: 'start',
        sortable: false,
        value: 'codeCommande'
      }, {
        text: 'Client',
        align: 'start',
        sortable: false,
        value: 'nomclient'
      }, {
        text: 'Telephone',
        value: 'telephone'
      }, {
        text: 'wilaya',
        value: 'wilaya'
      }, {
        text: 'Commune',
        value: 'commune'
      }, {
        text: 'Adresse',
        value: 'adresse'
      }, {
        text: 'Produits',
        value: 'produits'
      }, {
        text: 'Prix',
        align: 'start',
        sortable: false,
        value: 'prix'
      }, {
        text: 'Livraison Gratuite',
        align: 'start',
        sortable: false,
        value: 'livraison'
      }, {
        text: 'Remarque',
        align: 'start',
        sortable: false,
        value: 'remarque'
      }, {
        text: 'Action',
        value: 'actions'
      }],
      colis: []
    };
  },
  methods: {
    validate: function validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) return this.save();
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.colis.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      this.colis.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    editItem: function editItem(item) {
      this.editedIndex = this.colis.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      });
    },
    save: function save() {
      if (this.editedIndex > -1) {
        Object.assign(this.colis[this.editedIndex], this.editedItem);
      } else {
        this.colis.push(this.editedItem);
      }

      this.close();
    },
    saveColis: function saveColis() {
      this.$inertia.post(route('colis.storeData'), this.colis);
    },
    onChange: function onChange() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/communes/' + this.editedItem.wilaya).then(function (response) {
        _this4.communes = response.data.communes;
      });
    },
    upload: function upload() {
      var _this5 = this;

      Object(read_excel_file__WEBPACK_IMPORTED_MODULE_0__["default"])(this.file).then(function (rows) {
        var arr = rows.shift();
        var BreakException = {};
        var index = -1;

        var _iterator = _createForOfIteratorHelper(rows),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var element = _step.value;
            var map = {};

            if (element[0] == null || element[1] == null || element[3] == null || element[4] == null || element[5] == null || element[6] == null || element[7] == null) {
              index = rows.indexOf(element);
              break;
            }

            map.nomclient = element[0];
            map.telephone = element[1];
            map.wilaya = element[2];
            map.commune = element[3];
            map.adresse = element[4];
            map.produits = element[5];
            map.codeCommande = element[6];
            map.prix = element[7];
            map.livraison = element[8];
            map.remarque = element[9];

            _this5.colis.push(map);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (index != -1) {
          index = index + 1;

          _this5.$toast.open({
            message: "Erreur a la ligne " + index + " veuillez verifier votre fichier",
            type: "error",
            duration: 9000,
            dismissible: true,
            position: "top-right"
          });
        } // `rows` is an array of rows
        // each row being an array of cells.

      });
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.custom-loader {\n  -webkit-animation: loader 1s infinite;\n          animation: loader 1s infinite;\n  display: flex;\n}\n@-webkit-keyframes loader {\nfrom {\n    transform: rotate(0);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n@keyframes loader {\nfrom {\n    transform: rotate(0);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImporterColis.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=template&id=b63b2c86&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=template&id=b63b2c86& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
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
          attrs: { "max-width": "560px" },
          model: {
            value: _vm.dialogDelete,
            callback: function($$v) {
              _vm.dialogDelete = $$v
            },
            expression: "dialogDelete"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Êtes-vous sûr de bien vouloir supprimer cet élément ?")
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: { click: _vm.closeDelete }
                    },
                    [_vm._v("Annuler")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: { click: _vm.deleteItemConfirm }
                    },
                    [_vm._v("OK")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer")
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
        "v-dialog",
        {
          staticStyle: { "backgroud-color": "transparent" },
          attrs: { persistent: "", "hide-overlay": "", "max-width": "800px" },
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
              _c(
                "v-card-actions",
                { staticClass: "d-flex justify-between" },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "", filled: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("\n            Fermer\n          ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: { click: _vm.validate }
                    },
                    [_vm._v("\n            Sauvegarder\n          ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v("Modifier Colis")
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
                                { staticClass: "mt-4", attrs: { dense: "" } },
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
                                          rules: [_vm.rules.required],
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
                                          rules: [_vm.rules.required],
                                          label: "Adresse"
                                        },
                                        model: {
                                          value: _vm.editedItem.adresse,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "adresse",
                                              $$v
                                            )
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
                                      _c("v-select", {
                                        attrs: {
                                          outlined: "",
                                          items: _vm.wilayas,
                                          "item-text": "nom",
                                          "item-value": "nom",
                                          rules: [_vm.rules.required],
                                          label: "Wilaya"
                                        },
                                        on: { change: _vm.onChange },
                                        model: {
                                          value: _vm.editedItem.wilaya,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "wilaya",
                                              $$v
                                            )
                                          },
                                          expression: "editedItem.wilaya"
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
                                          "item-value": "code",
                                          rules: [_vm.rules.required],
                                          label: "Commune"
                                        },
                                        model: {
                                          value: _vm.editedItem.commune,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "commune",
                                              $$v
                                            )
                                          },
                                          expression: "editedItem.commune"
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
                                          rules: [_vm.rules.required],
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
                                          rules: [_vm.rules.required],
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
                                        attrs: {
                                          outlined: "",
                                          rules: [_vm.rules.required],
                                          label: "Prix"
                                        },
                                        model: {
                                          value: _vm.editedItem.prix,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "prix",
                                              $$v
                                            )
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
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("small", [_vm._v("*indicates required field")])
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
                                      "\n              Veuillez suivre ce modele de fichier excel \n              "
                                    ),
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "ma-2 white--text",
                                        attrs: {
                                          loading: _vm.loading5,
                                          disabled: _vm.loading5,
                                          color: "blue-grey",
                                          href: "/models/colis.xlsx",
                                          fab: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            _vm.loader = "loading5"
                                          }
                                        }
                                      },
                                      [
                                        _c("v-icon", { attrs: { dark: "" } }, [
                                          _vm._v(
                                            "\n                  mdi-cloud-download\n                "
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "text-center" },
                                  [
                                    _c("v-file-input", {
                                      attrs: { "truncate-length": "15" },
                                      model: {
                                        value: _vm.file,
                                        callback: function($$v) {
                                          _vm.file = $$v
                                        },
                                        expression: "file"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "ma-2 text-center",
                                        attrs: { color: "secondary" },
                                        on: { click: _vm.upload }
                                      },
                                      [
                                        _vm._v(
                                          "\n                Importer \n              "
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
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.filteredColis,
                      page: _vm.page,
                      "item-key": "name"
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
                          key: "item.actions",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "mr-2",
                                  attrs: { small: "", color: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.editItem(item)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              mdi-pencil\n            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-icon",
                                {
                                  attrs: { small: "", color: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteItem(item)
                                    }
                                  }
                                },
                                [_vm._v("\n              mdi-delete\n    ")]
                              )
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
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-right" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "ma-2",
                          attrs: { color: "secondary" },
                          on: { click: _vm.saveColis }
                        },
                        [_vm._v("\n            Valider\n          ")]
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

/***/ "./resources/js/Pages/client/dashboard/colis/ImporterColis.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/colis/ImporterColis.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImporterColis_vue_vue_type_template_id_b63b2c86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImporterColis.vue?vue&type=template&id=b63b2c86& */ "./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=template&id=b63b2c86&");
/* harmony import */ var _ImporterColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImporterColis.vue?vue&type=script&lang=js& */ "./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImporterColis_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImporterColis.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VPagination */ "./node_modules/vuetify/lib/components/VPagination/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImporterColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImporterColis_vue_vue_type_template_id_b63b2c86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImporterColis_vue_vue_type_template_id_b63b2c86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardTitle"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_8__["VCheckbox"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_11__["VDialog"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_12__["VFileInput"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_13__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_14__["VIcon"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_15__["VMain"],VPagination: vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_16__["VPagination"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_17__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_18__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/client/dashboard/colis/ImporterColis.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImporterColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImporterColis.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImporterColis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImporterColis_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImporterColis.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImporterColis_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImporterColis_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImporterColis_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImporterColis_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImporterColis_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=template&id=b63b2c86&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=template&id=b63b2c86& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImporterColis_vue_vue_type_template_id_b63b2c86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImporterColis.vue?vue&type=template&id=b63b2c86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/client/dashboard/colis/ImporterColis.vue?vue&type=template&id=b63b2c86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImporterColis_vue_vue_type_template_id_b63b2c86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImporterColis_vue_vue_type_template_id_b63b2c86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);