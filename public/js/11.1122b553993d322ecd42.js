(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['livreurs', 'wilayas', 'communes', 'transporteurs'],
  components: {
    layout: _Shared_Default__WEBPACK_IMPORTED_MODULE_0__["default"],
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
  computed: {
    filteredLivreurs: function filteredLivreurs() {
      var _this = this;

      var result = [];
      this.search = this.search.toLowerCase();
      return this.livreurs.filter(function (colis) {
        if (colis.wilaya != null && _typeof(colis.wilaya) === 'object') {
          if (colis.wilaya['nom'].toLowerCase().match(_this.search) != null) {
            return true;
          }
        }

        return colis.nom.toLowerCase().match(_this.search) != null || colis.prenom.toLowerCase().match(_this.search) != null || colis.email.toLowerCase().match(_this.search) != null;
      });
    },
    filteredTransporteurs: function filteredTransporteurs() {
      var _this2 = this;

      var result = [];
      this.search = this.search.toLowerCase();
      return this.transporteurs.filter(function (colis) {
        if (colis.centre != null && _typeof(colis.centre) === 'object') {
          if (colis.centre['nom'].toLowerCase().match(_this2.search) != null) {
            return true;
          }
        }

        return colis.nom.toLowerCase().match(_this2.search) != null || colis.prenom.toLowerCase().match(_this2.search) != null || colis.email.toLowerCase().match(_this2.search) != null;
      });
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
      password: '',
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
      text: 'Details',
      value: 'details'
    }, {
      text: 'Actions',
      value: 'actions'
    }]), _defineProperty(_ref, "headersTrans", [{
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
      text: 'Centre',
      value: 'centre'
    }, {
      text: 'Communes',
      value: 'communes'
    }, {
      text: 'Details',
      value: 'details'
    }, {
      text: 'Actions',
      value: 'actions'
    }]), _ref;
  },
  methods: {
    onChange: function onChange() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/communes/' + this.form.wilaya).then(function (response) {
        _this3.communes = response.data.communes;
      });
      this.editedItem.communes = [];
    },
    validate: function validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) return this.createLivreur();
    },
    createLivreur: function createLivreur() {
      this.dialogNew = false; //this.tableItems.push(this.form);
      //var _this = this ; 
      //var ele = this.wilayas.filter(function(ele){
      // return  ele.code==_this.form.wilaya
      //});
      //this.form.wilaya=ele[0];

      this.form.communes = JSON.stringify(this.form.communes); //this.livreurs.push(this.form)

      this.$inertia.post(route('admin.nlivreur'), this.form);
      this.$toast.open({
        message: "Livreur ajouté avec succés ",
        type: "success",
        duration: 9000,
        dismissible: true,
        position: "top-right"
      });
      /*
      .then(()=> {  
        
      */
      //});
    },
    close: function close() {
      this.editedItem = {}, this.dialog = false;
    },
    editItem: function editItem(item) {
      this.editedIndex = this.livreurs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.id = item.id_livreur;
      this.editedItem.password = "";
      this.dialog = true;
    },
    updateLivreur: function updateLivreur() {
      Object.assign(this.livreurs[this.editedIndex], this.editedItem);
      this.dialog = false;
      this.editedItem.communes = JSON.stringify(this.editedItem.communes);
      this.$inertia.post(route('admin.ulivreur'), this.editedItem);
      /*
      .then(()=> { 
        this.editedItem.communes=[];
         this.$toast.open({
          message: "Livreur modifié avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position:"top-right"
        });
       });
       */
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.livreurs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.id = item.id_livreur;
      this.dialogDelete = true;
    },
    generate: function generate() {
      var CharacterSet = '';
      var password = '';
      CharacterSet += 'abcdefghijklmnopqrstuvwxyz';

      for (var i = 0; i < 8; i++) {
        password += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length));
      }

      this.form.password = password;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this4 = this;

      this.livreurs.splice(this.editedIndex, 1);
      this.closeDelete();
      this.$inertia.post(route('admin.rlivreur'), this.editedItem).then(function () {
        _this4.$toast.open({
          message: "Livreur supprimé avec succés ",
          type: "success",
          duration: 9000,
          dismissible: true,
          position: "top-right"
        });
      });
    },
    refreshLivreurs: function refreshLivreurs() {
      this.$inertia.visit(route('admin.livreurs'));
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
    password: {
      type: String,
      "default": 'text'
    },
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
    return {};
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue?vue&type=template&id=5d32e4bb&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue?vue&type=template&id=5d32e4bb& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/loaders/templateLoader.js):\nSyntaxError: Unexpected token (1:8281)\n    at Parser.pp$4.raise (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2757:13)\n    at Parser.pp.unexpected (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:647:8)\n    at Parser.pp.expect (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:641:26)\n    at Parser.pp$3.parseMaybeConditional (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1955:10)\n    at Parser.pp$3.parseMaybeAssign (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parseExprList (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2663:20)\n    at Parser.pp$3.parseSubscripts (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2075:29)\n    at Parser.pp$3.parseExprSubscripts (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2050:21)\n    at Parser.pp$3.parseMaybeUnary (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOp (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1985:41)\n    at Parser.pp$3.parseExprOps (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1968:91)\n    at Parser.pp$3.parseMaybeConditional (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parseExprList (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2663:20)\n    at Parser.pp$3.parseSubscripts (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2075:29)\n    at Parser.pp$3.parseExprSubscripts (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2050:21)\n    at Parser.pp$3.parseMaybeUnary (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parseExprList (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2663:20)\n    at Parser.pp$3.parseExprAtom (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2175:26)\n    at Parser.<anonymous> (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parseExpression (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1896:19)\n    at Parser.pp$1.parseReturnStatement (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:946:31)\n    at Parser.pp$1.parseStatement (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:781:35)\n    at Parser.parseStatement (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:6116:31)\n    at Parser.pp$1.parseBlock (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1112:23)\n    at Parser.pp$3.parseFunctionBody (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:2600:22)\n    at Parser.pp$1.parseFunction (C:\\xampp\\htdocs\\ziouane\\node_modules\\vue-template-es2015-compiler\\buble.js:1219:8)");

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

/***/ "./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _livreurs_vue_vue_type_template_id_5d32e4bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./livreurs.vue?vue&type=template&id=5d32e4bb& */ "./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue?vue&type=template&id=5d32e4bb&");
/* harmony import */ var _livreurs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./livreurs.vue?vue&type=script&lang=js& */ "./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
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
  _livreurs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _livreurs_vue_vue_type_template_id_5d32e4bb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _livreurs_vue_vue_type_template_id_5d32e4bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_13__["VMain"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/admin/dashboard/livreurs/livreurs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_livreurs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./livreurs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_livreurs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue?vue&type=template&id=5d32e4bb&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue?vue&type=template&id=5d32e4bb& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_livreurs_vue_vue_type_template_id_5d32e4bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./livreurs.vue?vue&type=template&id=5d32e4bb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/livreurs/livreurs.vue?vue&type=template&id=5d32e4bb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_livreurs_vue_vue_type_template_id_5d32e4bb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_livreurs_vue_vue_type_template_id_5d32e4bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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