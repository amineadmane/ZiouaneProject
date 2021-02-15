(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Default */ "./resources/js/Shared/Default.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Drawer */ "./resources/js/Pages/admin/Drawer.vue");
/* harmony import */ var _components_globals_vuepass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/globals/vuepass */ "./resources/js/components/globals/vuepass.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['admins', 'wilayas'],
  components: {
    layout: _Shared_Default__WEBPACK_IMPORTED_MODULE_0__["default"],
    vuepass: _components_globals_vuepass__WEBPACK_IMPORTED_MODULE_3__["default"],
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
    var _ref;

    return _ref = {
      selected: [],
      valid: true,
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
      },
      form: {
        nom: '',
        prenom: '',
        telephone: '',
        wilaya: '',
        communes: [],
        email: '',
        password: ''
      },
      search: '',
      dialogDelete: false,
      dialog: true,
      page: 1,
      dialogNew: false
    }, _defineProperty(_ref, "dialog", false), _defineProperty(_ref, "editedIndex", -1), _defineProperty(_ref, "pageCount", 0), _defineProperty(_ref, "itemsPerPage", 4), _defineProperty(_ref, "editedItem", {
      id: '',
      nom: '',
      prenom: 0,
      email: 0,
      telephone: 0,
      password: 0,
      wilaya: '',
      communes: ''
    }), _defineProperty(_ref, "headers", [{
      text: 'Nom',
      align: 'start',
      sortable: false,
      value: 'nom'
    }, {
      text: 'Prenom',
      value: 'prenom'
    }, {
      text: 'Email',
      value: 'email'
    }, {
      text: 'Wilaya',
      value: 'wilaya'
    }, {
      text: 'Actions',
      value: 'actions'
    }]), _ref;
  },
  methods: {
    onChange: function onChange() {
      var _this = this;

      alert(this.form.wilaya);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/communes/' + this.form.wilaya).then(function (response) {
        _this.communes = response.data.communes;
      });
      this.editedItem.communes = [];
    },
    validate: function validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) return this.createAdmin();
    },
    createAdmin: function createAdmin() {
      var _this2 = this;

      this.dialogNew = false;
      this.form.communes = JSON.stringify(this.form.communes);
      this.$inertia.post(route('admin.nadmin'), this.form).then(function () {
        _this2.$toast.open({
          message: "Admin ajouté avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.admins.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.id = item.id_admin;
      this.dialog = true;
    },
    updateAdmin: function updateAdmin() {
      var _this3 = this;

      Object.assign(this.admins[this.editedIndex], this.editedItem);
      this.dialog = false;
      this.editedItem.communes = JSON.stringify(this.editedItem.communes);
      this.$inertia.post(route('admin.uadmin'), this.editedItem).then(function () {
        _this3.$toast.open({
          message: "Livreur modifié avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
      });
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.admins.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.id = item.id_livreur;
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this4 = this;

      this.admins.splice(this.editedIndex, 1);
      this.closeDelete();
      this.$inertia.post(route('admin.radmin'), this.editedItem).then(function () {
        _this4.$toast.open({
          message: "Admin supprimé avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/globals/vuepass.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/globals/vuepass.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
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
  props: {
    type: {
      type: String,
      "default": 'text'
    },
    size: {
      type: String,
      "default": '32'
    },
    characters: {
      type: String,
      "default": 'a-z,A-Z,0-9,#'
    },
    placeholder: {
      type: String,
      "default": 'Password'
    },
    auto: [String, Boolean],
    value: ''
  },
  data: function data() {
    return {
      password: this.value
    };
  },
  mounted: function mounted() {
    if (this.auto == 'true' || this.auto == 1) {
      this.generate();
    }
  },
  methods: {
    generate: function generate() {
      var charactersArray = this.characters.split(',');
      var CharacterSet = '';
      var password = '';

      if (charactersArray.indexOf('a-z') >= 0) {
        CharacterSet += 'abcdefghijklmnopqrstuvwxyz';
      }

      if (charactersArray.indexOf('A-Z') >= 0) {
        CharacterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }

      if (charactersArray.indexOf('0-9') >= 0) {
        CharacterSet += '0123456789';
      }

      if (charactersArray.indexOf('#') >= 0) {
        CharacterSet += '![]{}()%&*$#^<>~@|';
      }

      for (var i = 0; i < this.size; i++) {
        password += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length));
      }

      this.password = password;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue?vue&type=template&id=6668cb3d&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue?vue&type=template&id=6668cb3d& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
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
                _vm._v("Voulez vous vraiment supprimer cet admin?")
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
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.closeDelete }
                    },
                    [_vm._v("Annuler")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.deleteItemConfirm }
                    },
                    [_vm._v("Valider")]
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
          attrs: { "max-width": "560px" },
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
                _c("span", { staticClass: "headline" }, [_vm._v("Modifier")])
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
                            "v-container",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      attrs: { cols: "12", sm: "12", md: "6" }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          rules: [_vm.rules.required],
                                          label: "Nom"
                                        },
                                        model: {
                                          value: _vm.editedItem.nom,
                                          callback: function($$v) {
                                            _vm.$set(_vm.editedItem, "nom", $$v)
                                          },
                                          expression: "editedItem.nom"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: { cols: "12", sm: "12", md: "6" }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          rules: [_vm.rules.required],
                                          label: "Prenom"
                                        },
                                        model: {
                                          value: _vm.editedItem.prenom,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "prenom",
                                              $$v
                                            )
                                          },
                                          expression: "editedItem.prenom"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: { cols: "12", sm: "12", md: "6" }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          rules: [_vm.rules.email],
                                          required: "",
                                          label: "Email"
                                        },
                                        model: {
                                          value: _vm.editedItem.email,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "email",
                                              $$v
                                            )
                                          },
                                          expression: "editedItem.email"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: { cols: "12", sm: "12", md: "6" }
                                    },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          outlined: "",
                                          label: "Wilaya",
                                          "item-text": "nom",
                                          "item-value": "code",
                                          items: _vm.wilayas,
                                          rules: [_vm.rules.required]
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
                                    {
                                      attrs: { cols: "12", sm: "12", md: "12" }
                                    },
                                    [
                                      _c("vuepass", {
                                        attrs: {
                                          size: "8",
                                          auto: "true",
                                          characters: "a-z,A-Z"
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
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("\n                Cancel\n              ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.updateAdmin }
                    },
                    [_vm._v("\n                Save\n              ")]
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
        "v-dialog",
        {
          attrs: { "max-width": "700px" },
          model: {
            value: _vm.dialogNew,
            callback: function($$v) {
              _vm.dialogNew = $$v
            },
            expression: "dialogNew"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v("Nouveau Admin")
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
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
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      outlined: "",
                                      rules: [_vm.rules.required],
                                      label: "Nom"
                                    },
                                    model: {
                                      value: _vm.form.nom,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "nom", $$v)
                                      },
                                      expression: "form.nom"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      outlined: "",
                                      rules: [_vm.rules.required],
                                      label: "Prenom"
                                    },
                                    model: {
                                      value: _vm.form.prenom,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "prenom", $$v)
                                      },
                                      expression: "form.prenom"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      outlined: "",
                                      rules: [_vm.rules.email],
                                      required: "",
                                      label: "Email"
                                    },
                                    model: {
                                      value: _vm.form.email,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "email", $$v)
                                      },
                                      expression: "form.email"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", md: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      outlined: "",
                                      label: "Wilaya",
                                      "item-text": "nom",
                                      "item-value": "code",
                                      items: _vm.wilayas,
                                      rules: [_vm.rules.required]
                                    },
                                    on: { change: _vm.onChange },
                                    model: {
                                      value: _vm.form.wilaya,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "wilaya", $$v)
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
                                { attrs: { cols: "12", sm: "12", md: "12" } },
                                [
                                  _c("vuepass", {
                                    attrs: {
                                      size: "8",
                                      auto: "true",
                                      characters: "a-z,A-Z"
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
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialogNew = false
                        }
                      }
                    },
                    [_vm._v("\n                Annuler\n              ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.validate }
                    },
                    [_vm._v("\n                Valider\n              ")]
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
                    { staticClass: "text-right" },
                    [
                      _c(
                        "v-btn",
                        {
                          on: {
                            click: function($event) {
                              _vm.dialogNew = true
                            }
                          }
                        },
                        [_vm._v("\n              Nouveau Admin\n            ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.admins,
                      search: _vm.search,
                      "item-key": "name"
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
                          key: "item.calories",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-chip",
                                {
                                  attrs: {
                                    color: _vm.getColor(item.calories),
                                    dark: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(item.calories) +
                                      "\n            "
                                  )
                                ]
                              )
                            ]
                          }
                        },
                        {
                          key: "item.wilaya",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n            \n              " +
                                  _vm._s(
                                    item.wilaya != null
                                      ? item.wilaya["nom"]
                                      : ""
                                  ) +
                                  "\n            \n          "
                              )
                            ]
                          }
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
                                    "\n                mdi-pencil\n              "
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
                                [_vm._v("\n                mdi-delete\n      ")]
                              )
                            ]
                          }
                        },
                        {
                          key: "item.details",
                          fn: function() {
                            return [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "mr-2",
                                  attrs: { small: "", color: "primary" }
                                },
                                [
                                  _vm._v(
                                    "\n                mdi-account-card-details\n              "
                                  )
                                ]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ],
                      null,
                      true
                    )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/globals/vuepass.vue?vue&type=template&id=57f9a13d&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/globals/vuepass.vue?vue&type=template&id=57f9a13d& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-text-field", {
    attrs: { outlined: "", label: "password" },
    model: {
      value: _vm.password,
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _agentCentre_vue_vue_type_template_id_6668cb3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agentCentre.vue?vue&type=template&id=6668cb3d& */ "./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue?vue&type=template&id=6668cb3d&");
/* harmony import */ var _agentCentre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agentCentre.vue?vue&type=script&lang=js& */ "./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _agentCentre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _agentCentre_vue_vue_type_template_id_6668cb3d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _agentCentre_vue_vue_type_template_id_6668cb3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_13__["VMain"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_agentCentre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./agentCentre.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_agentCentre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue?vue&type=template&id=6668cb3d&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue?vue&type=template&id=6668cb3d& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_agentCentre_vue_vue_type_template_id_6668cb3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./agentCentre.vue?vue&type=template&id=6668cb3d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/agentCentre/agentCentre.vue?vue&type=template&id=6668cb3d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_agentCentre_vue_vue_type_template_id_6668cb3d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_agentCentre_vue_vue_type_template_id_6668cb3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/globals/vuepass.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/globals/vuepass.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vuepass_vue_vue_type_template_id_57f9a13d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vuepass.vue?vue&type=template&id=57f9a13d& */ "./resources/js/components/globals/vuepass.vue?vue&type=template&id=57f9a13d&");
/* harmony import */ var _vuepass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vuepass.vue?vue&type=script&lang=js& */ "./resources/js/components/globals/vuepass.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vuepass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vuepass_vue_vue_type_template_id_57f9a13d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vuepass_vue_vue_type_template_id_57f9a13d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_4__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/globals/vuepass.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/globals/vuepass.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/globals/vuepass.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vuepass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./vuepass.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/globals/vuepass.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vuepass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/globals/vuepass.vue?vue&type=template&id=57f9a13d&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/globals/vuepass.vue?vue&type=template&id=57f9a13d& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vuepass_vue_vue_type_template_id_57f9a13d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./vuepass.vue?vue&type=template&id=57f9a13d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/globals/vuepass.vue?vue&type=template&id=57f9a13d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vuepass_vue_vue_type_template_id_57f9a13d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vuepass_vue_vue_type_template_id_57f9a13d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);