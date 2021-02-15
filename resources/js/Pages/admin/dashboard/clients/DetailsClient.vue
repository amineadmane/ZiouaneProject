<template>
<v-app app>
    <layout>
     
  <v-app-bar
    id="app-bar"
    app
    color="transparent"
    flat
    height="40"
    class="mt-4"
  >
    <v-btn
      class="mr-3 "
      elevation="1"
      fab
      @click="goBack"
      small
      
    >
      
      <v-icon >
        mdi-arrow-left
      </v-icon>
      
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      
    />
    <v-spacer />
    
    

    

    
    
   
    
  </v-app-bar>
  

      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        v-model="dialogPret"
      >
        
        <template>
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Colis Prets 
            </v-toolbar>
            <v-card-text>
              <v-list two-line>
              <v-list-item-group
                active-class="pink--text"
                multiple
              >
              <template v-for="(item, index) in colisPret">
                <v-list-item :key="item.id_colis">
                  <template v-slot:default>
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-chip
                          color="primary"
                        >
                          {{item.etat2!=null? item.etat1+" ( "+item.etat2+" )": item.etat1 }}
                        </v-chip>
                        <v-chip v-if="item.livraison==1" color="secondary">
                           {{item.fraisLivraison}} DZD Livraison Gratuite
                        </v-chip>
                        <br>
                        <br>
                        {{item.nomclient}}
                        
                        <br>
                        {{item.adresse}}   ,  {{item.wilaya['nom']}}  , {{item.commune['nom']}}
                        
                      </v-list-item-title>
                      <v-list-item-subtitle
                        class="text--primary"
                        v-text="item.headline"
                      ></v-list-item-subtitle>

                      <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text >{{item.ref}}</v-list-item-action-text>
                      <br>
                      <div>
                        {{item.prix}} DZD
      
                      </div>
                      
                    </v-list-item-action>
                  </template>
                </v-list-item>
                <v-divider  
                  :key="index"
                ></v-divider>
            </template>
      </v-list-item-group>
              </v-list>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialogPret = false"
              >Fermer</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    

    
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        v-model="dialognonPret"
      >
        
        <template>
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Paiement pas pret 
            </v-toolbar>
            <v-card-text>
              <v-list two-line>
              <v-list-item-group
                active-class="pink--text"
                multiple
              >
              <template v-for="(item, index) in colisnonPret">
                <v-list-item :key="item.id_colislivre">
                  <template v-slot:default>
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-chip
                          color="primary"
                        >
                          {{item.etat2!=null? item.etat1+" ( "+item.etat2+" )": item.etat1 }}
                        </v-chip>
                        <v-chip v-if="item.livraison==1" color="secondary">
                           {{item.fraisLivraison}} DZD Livraison Gratuite
                        </v-chip>
                        <br>
                        <br>
                        {{item.nomclient}}
                        
                        <br>
                        {{item.adresse}}   ,  {{item.wilaya['nom']}}  , {{item.commune['nom']}}
                        
                      </v-list-item-title>
                      <v-list-item-subtitle
                        class="text--primary"
                        v-text="item.headline"
                      ></v-list-item-subtitle>

                      <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text >{{item.ref}}</v-list-item-action-text>
                      <br>
                      <div>
                        {{item.prix}} DZD
      
                      </div>
                      
                    </v-list-item-action>
                  </template>
                </v-list-item>
                <v-divider  
                  :key="index"
                ></v-divider>
            </template>
      </v-list-item-group>
              </v-list>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialognonPret = false"
              >Fermer</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    

    
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        v-model="dialogpaye"
      >
        
        <template>
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Paye
            </v-toolbar>
            <v-card-text>
              <v-list two-line>
              <v-list-item-group
                active-class="pink--text"
                multiple
              >
              <template v-for="(item, index) in payes">
                <v-list-item :key="item.id_colis">
                  <template v-slot:default>
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-chip
                          color="primary"
                        >
                          {{item.etat2!=null? item.etat1+" ( "+item.etat2+" )": item.etat1 }}
                        </v-chip>
                        <v-chip v-if="item.livraison==1" color="secondary">
                           {{item.fraisLivraison}} DZD Livraison Gratuite
                        </v-chip>
                        <br>
                        <br>
                        {{item.nomclient}}
                        
                        <br>
                        {{item.adresse}}   ,  {{item.wilaya['nom']}}  , {{item.commune['nom']}}
                        
                      </v-list-item-title>
                      <v-list-item-subtitle
                        class="text--primary"
                        v-text="item.headline"
                      ></v-list-item-subtitle>

                      <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text >{{item.ref}}</v-list-item-action-text>
                      <br>
                      <div>
                        {{item.prix}} DZD
      
                      </div>
                      
                    </v-list-item-action>
                  </template>
                </v-list-item>
                <v-divider  
                  :key="index"
                ></v-divider>
            </template>
            </v-list-item-group>
              </v-list>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialogpaye = false"
              >Fermer</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    
  
    
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        v-model="dialogannupret"
      >
        <template>
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Retours pret
            </v-toolbar>
            <v-card-text>
              <v-list two-line>
              <v-list-item-group
                active-class="pink--text"
                multiple
              >
              <template v-for="(item, index) in colisAnnuPret">
                <v-list-item :key="item.id_colisannule">
                  <template v-slot:default>
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-chip
                          color="primary"
                        >
                          {{item.etat2!=null? item.etat1+" ( "+item.etat2+" )": item.etat1 }}
                        </v-chip>
                        <v-chip v-if="item.livraison==1" color="secondary">
                           {{item.fraisLivraison}} DZD Livraison Gratuite
                        </v-chip>
                        <br>
                        <br>
                        {{item.nomclient}}
                        
                        <br>
                        {{item.adresse}}   ,  {{item.wilaya['nom']}}  , {{item.commune['nom']}}
                        
                      </v-list-item-title>
                      <v-list-item-subtitle
                        class="text--primary"
                        v-text="item.headline"
                      ></v-list-item-subtitle>

                      <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text >{{item.ref}}</v-list-item-action-text>
                      <br>
                      <div>
                        {{item.prix}} DZD
      
                      </div>
                      
                    </v-list-item-action>
                  </template>
                </v-list-item>
                <v-divider  
                  :key="index"
                ></v-divider>
            </template>
      </v-list-item-group>
              </v-list>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialogannupret = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
  
    
    
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        v-model="dialogannunonpret"
      >
        
        <template>
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Retours non pret
            </v-toolbar>
            <v-card-text>
              <v-list two-line>
              <v-list-item-group
                active-class="pink--text"
                multiple
              >
              <template v-for="(item, index) in colisAnnunonPret">
                <v-list-item :key="item.id_colisannule">
                  <template v-slot:default>
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-chip
                          color="primary"
                        >
                          {{item.etat2!=null? item.etat1+" ( "+item.etat2+" )": item.etat1 }}
                        </v-chip>
                        <v-chip v-if="item.livraison==1" color="secondary">
                           {{item.fraisLivraison}} DZD Livraison Gratuite
                        </v-chip>
                        <br>
                        <br>
                        {{item.nomclient}}
                        
                        <br>
                        {{item.adresse}}   ,  {{item.wilaya['nom']}}  , {{item.commune['nom']}}
                        
                      </v-list-item-title>
                      <v-list-item-subtitle
                        class="text--primary"
                        v-text="item.headline"
                      ></v-list-item-subtitle>

                      <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text >{{item.ref}}</v-list-item-action-text>
                      <br>
                      <div>
                        {{item.prix}} DZD
      
                      </div>
                      
                    </v-list-item-action>
                  </template>
                </v-list-item>
                <v-divider  
                  :key="index"
                ></v-divider>
            </template>
      </v-list-item-group>
              </v-list>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialogannunonpret = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    
  


    
      <v-main>
        <v-container
        id="dashboard"
        fluid
        tag="section"
        class="mt-2"
        >
          <base-material-card
          color="primary"
          class="px-5 py-3 "
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Payé  {{totalPayes}} DZD
              <v-btn
                color="secondary"
                class="ma-2 white--text"
                
                @click="dialogpaye=true"
              >
                Details 
              </v-btn>
            </div>  
            
          </template>
          </base-material-card>

          <base-material-card
          color="primary"
          class="px-5 py-3 "
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Livrés Pret {{totalPret}} DZD
              <v-btn
                color="secondary"
                class="ma-2 white--text"
                @click="dialogPret=true"
              >
                Details 
              </v-btn>
              <v-btn
                color="blue-grey"
                class="ma-2 white--text"
                @click="changerEtatPaiementLivré()"
              >
                Payé 
              </v-btn>
            </div>  
            
          </template>
          </base-material-card>

            <base-material-card
              color="primary"
              class="px-5 py-3 "
            >
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Prochain  {{totalProchain}} 
              <v-btn
                color="secondary"
                class="ma-2 white--text"
                
                @click="dialognonPret=true"
              >
                Details 
              </v-btn>
            </div>  
            
          </template>
          </base-material-card>

            <base-material-card
              color="primary"
              class="px-5 py-3 "
            >
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Annulés pret  {{totalAnnuPret}}  DZD
              <v-btn
                color="secondary"
                class="ma-2 white--text"
                @click="dialogannupret=true"
              >
                Details 
              </v-btn>
              <v-btn
                color="blue-grey"
                class="ma-2 white--text"
                @click="changerEtatPaiementAnuule"
              >
                Payé 
              </v-btn>
            </div>  
            
          </template>
          </base-material-card>
           
            <base-material-card
          color="primary"
          class="px-5 py-3 "
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Annules non  pret  {{totalAnnuProchain}}  DZD
              <v-btn
                color="secondary"
                class="ma-2 white--text"
                
                @click="dialogannunonpret=true"
              >
                Details 
              </v-btn>
            </div>  
            
          </template>
          </base-material-card>

          
            
        </v-container>   
      </v-main>
    </layout>
    
    
    
</v-app>
</template>

<script>
import layout from '@/Shared/Default'
import Drawer from '../../Drawer'

export default {
    props: ['payes','livres','annules'],
    components: {
        layout,
        Drawer
    },
    mounted(){
      var _this=this;
      _this.payes.map(function(element){
       if(element.etat1!="retourné" && element.etat1!="annulé")
       return _this.totalPayes=parseFloat(_this.totalPayes)+parseFloat(element.prix)
      })

      _this.livres.map(function(element){
        if(element.etat2=="pret" || element.etat2=="au bureau"  ) {
           _this.colisPret.push(element);
         return  _this.totalPret =parseFloat(_this.totalPret)+parseFloat(element.prix) 
        }
        else {
          return[
          _this.colisnonPret.push(element),
          _this.totalProchain =parseFloat(_this.totalProchain)+parseFloat(element.prix) ]
          
        }
      })

      _this.annules.map(function(element){
        if(element.etat2=="pret" || ( element.etat2=="au bureau" &&  element.etat1=="bureau "+ _this.$page.auth.wilaya['nom'])) {
           _this.colisAnnuPret.push(element);
        if(element.etat1=="retourné")
       return [ _this.colisAnnuPret, _this.totalAnnuPret=parseFloat(_this.totalAnnuPret)+350 ]
       else [ _this.colisAnnuPret,_this.totalAnnuPret=parseFloat(_this.totalAnnuPret)+350]
        }
        else {
          _this.colisAnnunonPret.push(element);
          if(element.etat1=="retourné")
       return [ _this.colisAnnunonPret, _this.totalAnnuProchain=parseFloat(_this.totalAnnuProchain)+parseFloat(element.fraisLivraison)]
       else return [ _this.colisAnnunonPret, _this.totalAnnuProchain=parseFloat(_this.totalAnnuProchain)+350] 
        }
      })

    },
    data () {
      return {
        expanded: [],
        colisPret:[],
        totalAnnunonPret:0,
        colisAnnunonPret:[],
        colisAnnuPret:[],
        totalAnnuProchain:0,
        totalAnnuPret:0,
        colisnonPret:[],
        dialogPret:false,
        dialognonPret:false,
        dialogannunonpret:false,
        dialogannupret:false,
        dialogpaye:false,
        filtered:false,
        singleExpand:false,
        totalPayes:0,
        totalPret:0,
        totalProchain:0,
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
      changerEtatPaiementLivré(){
        
        var form = {};
        //pop elements
        form.selected=this.colisPret
        form.etat='payé'
        var _this = this;
        if(this.colisPret.length>0)
        this.$inertia.post(route('admin.paiementsetatclient'),form).then(()=> {
          this.totalPayes  = parseFloat(this.totalPret) + parseFloat(this.totalPayes);
          //this.colisPret.forEach(element => {
            //return _this.payes.push(element);
          //});
          this.totalPret=0;
          this.selected=[];
          this.colisPret=[];
          this.$toast.open({
            message: "Colis modifié avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
        });
        /*
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
          */

      },
      changerEtatPaiementAnuule(){
        
        var form = {};
        //pop elements
        form.selected=this.colisAnnuPret
        form.etat='payé'
        
        if(this.colisAnnuPret.length>0)
        this.$inertia.post(route('admin.changerEtatRetour'),form).then(()=> {
          this.selected=[];
          this.colisAnnuPret=[];
          this.totalAnnuPret=0;
          this.$toast.open({
            message: "Colis modifié avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
        });
        /*
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
        */
          

      },
      goBack(){
        this.$inertia.visit(route('admin.clients'));
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








