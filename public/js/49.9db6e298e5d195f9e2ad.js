(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/MesClients.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/MesClients.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Default */ "./resources/js/Shared/Default.vue");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Drawer */ "./resources/js/Pages/admin/Drawer.vue");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../components/globals/vuepass'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['clients'],
  components: {
    layout: _Shared_Default__WEBPACK_IMPORTED_MODULE_0__["default"],
    Drawer: _Drawer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.tableItems = this.clients;
  },
  computed: {
    filteredClients: function filteredClients() {
      var _this = this;

      var result = [];
      this.search = this.search.toLowerCase();
      return this.colis.filter(function (colis) {
        if (colis.wilaya != null) if (colis.wilaya['nom'].toLowerCase().match(_this.search) != null) {
          //  alert(colis.wilaya['nom'].toLowerCase());
          return true;
        }
        return colis.email.toLowerCase().match(_this.search) != null || colis.nom.toLowerCase().match(_this.search) != null || colis.prenom.toLowerCase().match(_this.search) != null || colis.telephone.match(_this.search) != null;
      });
    }
  },
  data: function data() {
    return {
      filtered: false,
      filteredCentre: false,
      livreur: '',
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
      etat: "",
      selected: [],
      dialog: false,
      singleSelect: true,
      page: 1,
      items: [],
      tableItems: [],
      search: '',
      pageCount: 0,
      editedItem: {
        nom: '',
        prenom: '',
        telephone: '',
        wilaya: '',
        adresse: ''
      },
      itemsPerPage: 4,
      headers: [{
        text: 'Nom',
        align: 'start',
        sortable: false,
        value: 'nom'
      }, {
        text: 'Prenom',
        value: 'prenom'
      }, {
        text: 'Telephone',
        value: 'telephone'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Wilaya',
        value: 'wilaya'
      }, {
        text: 'Communes',
        value: 'communes'
      }, {
        text: 'Actions',
        value: 'actions'
      }]
    };
  },
  methods: {
    text: function text(item) {
      return item.nom + " " + item.prenom;
    },
    DetailsItem: function DetailsItem(item) {
      this.editedIndex = this.colis.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    validate: function validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) return this.createLivreur();
    },
    editItem: function editItem(item) {
      this.editedIndex = this.clients.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.id = item.id_client;
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.clients.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.id = item.id_client;
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this2 = this;

      this.livreurs.splice(this.editedIndex, 1);
      this.closeDelete();
      this.$inertia.post(route('admin.rclient'), this.editedItem).then(function () {
        _this2.$toast.open({
          message: "Client supprimé avec succés ",
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
    closeDetails: function closeDetails() {
      this.dialog = false;
    },
    filterElements: function filterElements() {
      var _this3 = this;

      this.filtered = !this.filtered;
      if (this.filtered) this.tableItems = this.colis.filter(function (element) {
        return element.wilaya['id'] == _this3.$page.auth.user.wilaya;
      });else this.tableItems = this.colis;
      return this.tableItems;
    },
    filterCentre: function filterCentre() {
      var _this4 = this;

      this.filteredCentre = !this.filteredCentre;
      if (this.filtered) this.tableItems = this.colis.filter(function (element) {
        return element.wilaya['id'] in _this4.wilayas;
      });else this.tableItems = this.colis;
      return this.tableItems;
    },
    getColor: function getColor(calories) {
      if (calories > 400) return 'red';else if (calories > 200) return 'orange';else return 'green';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/MesClients.vue?vue&type=template&id=1d32e531&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/MesClients.vue?vue&type=template&id=1d32e531& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
                _vm._v("Voulez vous vraiment supprimer ce livreur?")
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
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          rules: [_vm.rules.required],
                                          required: "",
                                          label: "telephone"
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
                                      attrs: { cols: "12", sm: "12", md: "6" }
                                    },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          outlined: "",
                                          rules: [_vm.rules.required],
                                          items: _vm.communes,
                                          "item-text": "nom",
                                          "item-value": "nom",
                                          multiple: "",
                                          label: "Communes livrables"
                                        },
                                        model: {
                                          value: _vm.editedItem.communes,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "communes",
                                              $$v
                                            )
                                          },
                                          expression: "editedItem.communes"
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
                      on: { click: _vm.updateLivreur }
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
                  _vm._v("Nouveau Livreur")
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
                                  _c("v-text-field", {
                                    attrs: {
                                      outlined: "",
                                      rules: [_vm.rules.required],
                                      required: "",
                                      label: "telephone"
                                    },
                                    model: {
                                      value: _vm.form.telephone,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "telephone", $$v)
                                      },
                                      expression: "form.telephone"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.$page.auth.user.role != "agent-centre"
                                ? _c(
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
                                          items: _vm.$page.auth.user.wilaya,
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
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.$page.auth.user.role != "agent-centre"
                                ? _c(
                                    "v-col",
                                    {
                                      attrs: { cols: "12", sm: "12", md: "6" }
                                    },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          outlined: "",
                                          rules: [_vm.rules.required],
                                          items: _vm.communes,
                                          "item-text": "nom",
                                          "item-value": "nom",
                                          multiple: "",
                                          label: "Communes livrables"
                                        },
                                        model: {
                                          value: _vm.form.communes,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "communes", $$v)
                                          },
                                          expression: "form.communes"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
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
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.headers,
                      "single-select": !_vm.singleSelect,
                      items: _vm.filteredClients,
                      page: _vm.page,
                      "items-per-page": 4,
                      "show-select": "",
                      "item-key": "id_client"
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
                                    return _vm.filteredClients()
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
                          key: "item.details",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "mr-2 mx-2",
                                  attrs: { small: "", color: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.DetailsItem(item)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                mdi-details\n              "
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

/***/ "./resources/js/Pages/admin/dashboard/MesClients.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/MesClients.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MesClients_vue_vue_type_template_id_1d32e531___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MesClients.vue?vue&type=template&id=1d32e531& */ "./resources/js/Pages/admin/dashboard/MesClients.vue?vue&type=template&id=1d32e531&");
/* harmony import */ var _MesClients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MesClients.vue?vue&type=script&lang=js& */ "./resources/js/Pages/admin/dashboard/MesClients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VPagination */ "./node_modules/vuetify/lib/components/VPagination/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MesClients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MesClients_vue_vue_type_template_id_1d32e531___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MesClients_vue_vue_type_template_id_1d32e531___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_12__["VMain"],VPagination: vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_13__["VPagination"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/admin/dashboard/MesClients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/MesClients.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/MesClients.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesClients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesClients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/MesClients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesClients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/MesClients.vue?vue&type=template&id=1d32e531&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/MesClients.vue?vue&type=template&id=1d32e531& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesClients_vue_vue_type_template_id_1d32e531___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesClients.vue?vue&type=template&id=1d32e531& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/MesClients.vue?vue&type=template&id=1d32e531&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesClients_vue_vue_type_template_id_1d32e531___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesClients_vue_vue_type_template_id_1d32e531___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);