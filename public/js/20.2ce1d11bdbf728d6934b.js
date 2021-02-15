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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      return this.tableItems.map(function (item, index) {
        return _objectSpread({
          id: item[0].client['livreur']
        }, item);
      });
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
        text: 'livreur',
        value: 'Livreur'
      }, {
        text: 'Total',
        value: 'toal'
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
      var _this = this;

      if (this.selected.length == 0) return this.$toast.open({
        message: "Aucun colis selectionné ",
        type: "error",
        duration: 9000,
        dismissible: true,
        position: "top-right"
      });
      var form = {};
      this.selected.forEach(function (element) {
        element.etat1 = _this.etat;
        _this.colis[_this.colis.indexOf(element)] = element;
      });
      form.selected = this.selected;
      form.etat = this.etat;
      this.$inertia.post(route('admin.changerEtat'), form).then(function () {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=template&id=28475b11&v-slot%3A%5B%60item.adresse%60%5D=%7B%20item%20%7D&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=template&id=28475b11&v-slot%3A%5B%60item.adresse%60%5D=%7B%20item%20%7D& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=custom&index=0&blockType=v-pagination&class=mt-4&v-model=page&%3Alength=pageCount":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=custom&index=0&blockType=v-pagination&class=mt-4&v-model=page&%3Alength=pageCount ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {









































































































































































































































































































































































/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/MesPaiements.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/MesPaiements.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MesPaiements_vue_vue_type_template_id_28475b11_v_slot_3A_5B_60item_adresse_60_5D_7B_20item_20_7D___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MesPaiements.vue?vue&type=template&id=28475b11&v-slot%3A%5B%60item.adresse%60%5D=%7B%20item%20%7D& */ "./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=template&id=28475b11&v-slot%3A%5B%60item.adresse%60%5D=%7B%20item%20%7D&");
/* harmony import */ var _MesPaiements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MesPaiements.vue?vue&type=script&lang=js& */ "./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _MesPaiements_vue_vue_type_custom_index_0_blockType_v_pagination_class_mt_4_v_model_page_3Alength_pageCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MesPaiements.vue?vue&type=custom&index=0&blockType=v-pagination&class=mt-4&v-model=page&%3Alength=pageCount */ "./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=custom&index=0&blockType=v-pagination&class=mt-4&v-model=page&%3Alength=pageCount");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MesPaiements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MesPaiements_vue_vue_type_template_id_28475b11_v_slot_3A_5B_60item_adresse_60_5D_7B_20item_20_7D___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MesPaiements_vue_vue_type_template_id_28475b11_v_slot_3A_5B_60item_adresse_60_5D_7B_20item_20_7D___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _MesPaiements_vue_vue_type_custom_index_0_blockType_v_pagination_class_mt_4_v_model_page_3Alength_pageCount__WEBPACK_IMPORTED_MODULE_3__["default"] === 'function') Object(_MesPaiements_vue_vue_type_custom_index_0_blockType_v_pagination_class_mt_4_v_model_page_3Alength_pageCount__WEBPACK_IMPORTED_MODULE_3__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/admin/dashboard/MesPaiements.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=custom&index=0&blockType=v-pagination&class=mt-4&v-model=page&%3Alength=pageCount":
/*!********************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=custom&index=0&blockType=v-pagination&class=mt-4&v-model=page&%3Alength=pageCount ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_custom_index_0_blockType_v_pagination_class_mt_4_v_model_page_3Alength_pageCount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesPaiements.vue?vue&type=custom&index=0&blockType=v-pagination&class=mt-4&v-model=page&%3Alength=pageCount */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=custom&index=0&blockType=v-pagination&class=mt-4&v-model=page&%3Alength=pageCount");
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_custom_index_0_blockType_v_pagination_class_mt_4_v_model_page_3Alength_pageCount__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_custom_index_0_blockType_v_pagination_class_mt_4_v_model_page_3Alength_pageCount__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_custom_index_0_blockType_v_pagination_class_mt_4_v_model_page_3Alength_pageCount__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_custom_index_0_blockType_v_pagination_class_mt_4_v_model_page_3Alength_pageCount__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_custom_index_0_blockType_v_pagination_class_mt_4_v_model_page_3Alength_pageCount__WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=template&id=28475b11&v-slot%3A%5B%60item.adresse%60%5D=%7B%20item%20%7D&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=template&id=28475b11&v-slot%3A%5B%60item.adresse%60%5D=%7B%20item%20%7D& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_template_id_28475b11_v_slot_3A_5B_60item_adresse_60_5D_7B_20item_20_7D___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MesPaiements.vue?vue&type=template&id=28475b11&v-slot%3A%5B%60item.adresse%60%5D=%7B%20item%20%7D& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/admin/dashboard/MesPaiements.vue?vue&type=template&id=28475b11&v-slot%3A%5B%60item.adresse%60%5D=%7B%20item%20%7D&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_template_id_28475b11_v_slot_3A_5B_60item_adresse_60_5D_7B_20item_20_7D___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MesPaiements_vue_vue_type_template_id_28475b11_v_slot_3A_5B_60item_adresse_60_5D_7B_20item_20_7D___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);