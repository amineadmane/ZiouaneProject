<template>
<v-app app>
      <v-dialog
      v-model="dialog"
      
      hide-overlay
      transition="dialog-bottom-transition"
      style="backgroud-color:transparent"
      max-width="800px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Details Colis</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            
        
        <base-material-card
          color="primary"
          class="px-5 py-3 "
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Informations sur le client
            </div>
          </template>
          
          <v-row dense class="mt-4"  >
          <v-col cols="12" md="12">
            <v-text-field
              v-model="editedItem.nomclient"
              outlined
              disabled
              label="Nom Complet"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="editedItem.telephone"
              outlined
              type="number"
              disabled
              label="Numéro de téléphone"
            ></v-text-field>
          </v-col>
          </v-row>
        </base-material-card>
        
        <base-material-card
          color="primary"
          class="px-5 py-3 mt-10"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Informations sur la livraison
            </div>
          </template>
          <v-row dense class="mt-4">
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.adresse"
                        outlined
                        disabled
                        label="Adresse"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field 
                        v-model="editedItem.wilaya['nom']"
                        disabled
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="editedItem.commune['nom']"
                        outlined
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        outlined
                        label="Frais livraison"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.codePostal"
                        outlined
                        disabled
                        label="Code postal"
                      ></v-text-field>
                    </v-col>
          </v-row>
        </base-material-card>
        
        <base-material-card
          color="primary"
          class="px-5 py-3 mt-10"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Informations sur la livraison
            </div>
          </template>
          <v-row dense class="mt-4">
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.produits"
                    outlined
                    disabled
                    label="Produit(s)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.codeCommande"
                    outlined
                    disabled
                    label="code commande"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.prix"
                    outlined
                    
                    label="Prix"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.remarque"
                    outlined
                    disabled
                    label="Remarque"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-checkbox
                    v-model="editedItem.livraison"
                    label="Livraison Gratuite"
                    disabled
                    color="red darken-3"
                  ></v-checkbox>
                </v-col>
          </v-row>
              
        </base-material-card>
          
            <v-card-actions>
              <v-spacer></v-spacer>
              
            </v-card-actions>
          </v-container>
        </v-card-text>            
      </v-card>
    </v-dialog>
    <layout>
      <Drawer />
      <v-main>
        <v-container
        id="dashboard"
        fluid
        tag="section"
        class="mt-4"
        >
        <div class="ml-4">
          <v-row class="">
            <v-col cols="12" md="3">
                <h4>Changer l'etat a </h4>
                <v-select 
                  class="mt-2"
                  :items="etats"
                  label="pret"
                  outlined
                  v-model="etat"
                ></v-select>
            </v-col>
            <v-col cols="12" md="3">
                <v-btn
                  class="mt-6"
                  fab
                  dark
                  large
                  color="primary"
                  @click="changerEtatPaiement"
                >
                  <v-icon dark>
                    mdi-check
                  </v-icon>
                </v-btn>
            </v-col>
            
          </v-row>
        
        </div>
        
        <div class="text-right ml-4">
  
          <v-row class="">
            <v-btn
              rounded
              color="primary"
              dark
              class="mx-2"
              @click="genPdf"
            >
              Generer pdf
            </v-btn>
            <download-excel
              :data="selected"
              worksheet="My Worksheet"
              name="filename.xls"
            >
              <v-btn
              rounded
              color="primary"
              dark
              class="mx-2"
              
            >
            Excel
          </v-btn>
            </download-excel>  
          </v-row>

        
        
        </div>

        
          <v-data-table
            :headers="headers"
            v-model="selected"
            :single-select="!singleSelect"
            :items="indexedItems"
            class="elevation-1"
            show-expand
            :page.sync="page"
            :items-per-page="4"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            show-select
            @page-count="pageCount = $event"
            :search="search"
            item-key="id"
            
          >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
            ></v-text-field>
          </template>
          
            <template v-slot:expanded-item="{  item }">
              
              <tr v-for="colis in item" :key="colis.id_colisLivre">
                 <div v-if="colis.ref!=null">
                    <td >
                        {{colis.ref}}
                    </td>
                    <td  colspan="2"> 
                        <v-chip
                          color="primary"
                        >
                          {{colis.etat1}}
                        </v-chip>
                    </td>
                    <td  colspan="2"> 
                        <v-chip v-if="colis.livreur!=null"
                          color="primary"
                        >
                          {{colis.livreur['nom']}} {{colis.livreur['prenom']}}
                        </v-chip>
                    </td>
                    <td  colspan="2">
                        {{colis.telephone}}
                    </td>
                    <td  colspan="2">
                        {{colis.wilaya!=null ? colis.wilaya['nom']:''}}
                    </td>
                    <td>
                        {{colis.commune!=null ?colis.commune['nom']:''}}
                    </td>
                    <td>
                        {{colis.adresse}}
                    </td>
                    <td>
                        {{colis.codePostal}}
                    </td>
                    <td>
                        {{colis.produits}}
                    </td>
                    <td>
                        {{colis.prix}}
                    </td>
                    <td>
                        {{colis.remarque}}
                    </td>
                 </div>
              </tr>
            </template>
          
          <template v-slot:[`item.livreur`]="{ item }">
               <v-chip
               color="primary"
               >
                    {{item[0].livreur['nom']}} {{item[0].livreur['prenom']}} 
               </v-chip> 
          </template>
          <template v-slot:[`item.total`]="{ item }"> 
            {{item.total}}
          </template>
          <template v-slot:[`item.etat`]="{ item }">
            <div v-if="item[0].etat1!=null">
               <v-chip
               color="primary"
               >
                    {{item[0].etat1}}
               </v-chip>
                
            </div>
            
           
            
          </template>
          <template v-slot:[`item.telephone`]="{ item }">
           {{item[0].client['telephone']}}
            
          </template>
          <template v-slot:[`item.adresse`]="{ item }">
           {{item[0].client['adresse']}}
            
          </template>
          
          
          </v-data-table>
           <v-pagination
            class="mt-4"
            v-model="page"
            :length="pageCount"
          ></v-pagination>  
        </v-container>   
      </v-main>
    </layout>
    
    
    
</v-app>
</template>

<script>
import layout from '@/Shared/Default'
import Drawer from '../Drawer'

export default {
    props: ['nonprets','etats'],
    components: {
        layout,
        Drawer
    },
    computed: {
    indexedItems () {
      return this.tableItems.map(
      (items, index) => ({
        ...items,
        id: index + 1,
        
      }))
    },
    
    findTotal(){
      var total=0;
    }
    },
    mounted(){
     this.tableItems=Object.values(this.nonprets);
     this.tableItems.map((function(obj) {
        obj['total']=obj.reduce((prix, item) => prix + item.prix, 0)
      }));
     
     
    },
    data () {
      return {
        expanded: [],
        filtered:false,
        singleExpand:false,
        livreur:'',
        x:'',
        etat:"pret",
        selected: [],
        dialog: false,
        singleSelect: true,
        page: 1,
        items:['pret','pas pret'],
        tableItems:[],
        search:'',
        pageCount: 0,
        editedItem: {
          nomclient: '',
          telephone: '',
          wilaya: '',
          commune: '',
          adresse: '',
          produits:'',
          codeCommande:'',
          prix:'',
          livraison:'',
          remarque:'',
          codePostal:''
        },
        itemsPerPage: 4,
        headers: [
          {
            text: 'Livreur',
            value: 'livreur',
          },
          {
            text: 'Total',
            value: 'total',
          },
          
          {
            text: 'etat',
            value: 'etat',
          },
          
          { text: '', value: 'data-table-expand' },
          
          
        ],

        
      }
    },

    methods: {
      text: item => item.nom +" "+ item.prenom,
      buildTableBody(data, columns) {
        var body = [];

        body.push(columns);
        
        data.forEach(function(row) {
            var dataRow = [];
            Object.values(row).forEach(element => {
              if(element.wilaya!=undefined){
                  columns.forEach(function(column) {
                    if(column=="wilaya"|| column=="commune"){
                      dataRow.push(element[column]['nom'].toString());
                    }else 
                    if(element[column]==null) 
                      dataRow.push("");
                    else dataRow.push(element[column].toString());
                })
                body.push(dataRow);
                dataRow=[];
              }
             
            });

        });

        return body;
      },

      table(data, columns) {
          return {
              table: {
                  widths: ['auto', 'auto', 'auto','auto','auto','auto','auto','auto','auto'],
                  headerRows: 1,
                  body: this.buildTableBody(data, columns)
              }
          };
      },
      
      genPdf(){
         if(this.selected.length==0) 
          return this.$toast.open({
            message: "Aucun colis selectionné ",
            type: "error",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
         var pdfMake = require('pdfmake/build/pdfmake.js')
         if (pdfMake.vfs == undefined){
            var pdfFonts = require('pdfmake/build/vfs_fonts.js')
            pdfMake.vfs = pdfFonts.pdfMake.vfs;
          }
          
              var dd=  [
                    { text: 'Tables\n', style: 'header',bold:true ,fontSize: 18,margin: [0, 20],alignment: 'center',},
                    this.table(this.selected, ['ref', 'telephone','wilaya','commune','adresse','codePostal','produits','prix','remarque'])
                ]
          var docDefinition = { content: dd }
        pdfMake.createPdf(docDefinition).print();
      },

      DetailsItem (item) {
        this.editedIndex = this.colis.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      changerEtatPaiement(){
        if(this.selected.length==0) 
          return  this.$toast.open({
            message: "Aucun colis selectionné ",
            type: "error",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
        var form = {};
        //pop elements
        form.selected=this.selected
        form.etat=this.etat
        if(this.etats.length>1)
        this.$inertia.post(route('admin.paiementsetat'),form).then(()=> {
          this.selected=[]
          this.$toast.open({
            message: "Colis modifié avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
        });
        else 
        this.$inertia.post(route('admin.paiementsetatclient'),form).then(()=> {
          this.selected=[]
          this.$toast.open({
            message: "Colis modifié avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
        });
          

      },
      attribuerLivreur(){
        if(this.selected.length==0) 
          return  this.$toast.open({
            message: "Aucun colis selectionné ",
            type: "error",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
         
        if(this.selected[0][0].etat1=="ramassé") 
          return  this.$toast.open({
            message: "Colis deja ramassé ",
            type: "error",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
        var form = {};
        
        form.selected=this.selected
        form.livreur=this.livreur
        this.$inertia.post(route('admin.attribuerLivreurRamassage'),form).then(()=> {
          this.selected=[]
          this.$toast.open({
            message: "Colis modifié avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
        });
          

      },
      closeDetails(){
        this.dialog=false
      },
      deleteItem (item) {
        this.dialogDelete = true
      },
      closeDelete () {
        this.dialogDelete = false
      },
      filterElements() {
        this.filtered=!this.filtered;
        
        if(this.filtered)
        this.tableItems= this.colis.filter(element=>element.wilaya['id'] != 1);
        else this.tableItems= this.colis;
        
        return this.tableItems;
      },
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
    },

}
</script>








