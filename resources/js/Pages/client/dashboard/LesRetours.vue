<template>
<v-app app>
    <layout>
      <Drawer />
    
    <v-dialog
        transition="dialog-top-transition"
        max-width="500"
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
              <template v-for="(item) in colisPret">
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
                  :key="item.ref"
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
        max-width="800"
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
                  <template v-for="(item) in colisnonPret">
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
                      :key="item.ref"
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
                  <template v-for="(item) in payes">
                    <v-list-item :key="item.id_colispayes">
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
                      :key="item.ref"
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
    
  


      <v-main>
        <v-container
        id="dashboard"
        fluid
        tag="section"
        class="mt-4"
        >
        
        
          <base-material-card
          color="primary"
          class="px-5 py-3 "
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Retourné  {{totalPayes}} DZD
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
              Pret  {{totalPret}} DZD
              <v-btn
                color="secondary"
                class="ma-2 white--text"
                @click="dialogPret=true"
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
              Prochain   {{totalProchain}} DZD
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

  
            
        </v-container>   
      </v-main>
    </layout>
    
    
    
</v-app>
</template>

<script>
import layout from '@/Shared/Default'
import Drawer from '../Drawer'

export default {
    props: ['payes','annules'],
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
      var _this = this;
       
      _this.payes.map(function(element){
       if(element.etat1=="retourné")
       return _this.totalPayes=parseFloat(_this.totalPayes)+350;
       else  return _this.totalPayes=parseFloat(_this.totalPayes)+350; 
      })

      this.annules.map(function(element){
        if(element.etat2=="pret") {
           _this.colisPret.push(element);
        if(element.etat1=="retourné")
       return[_this.colisPret, _this.totalPret=parseFloat(_this.totalPret)+350 ]
       else return [_this.colisPret,_this.totalPret=parseFloat(_this.totalPret)+350]
        }
        else {
          _this.colisnonPret.push(element);
          if(element.etat1=="retourné")
       return [_this.colisnonPret , _this.totalProchain=parseFloat(_this.totalProchain)+350]
       else return [_this.colisnonPret,_this.totalProchain=parseFloat(_this.totalProchain)+350 ]
        }
      })


     
     
     
    },
    data () {
      return {
        expanded: [],
        colisPret:[],
        colisnonPret:[],
        dialogPret:false,
        dialognonPret:false,
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
            
            columns.forEach(function(column) {
                
                
                if(column=="prix"){
                  if(row['livraison']==0){
                    var x = parseFloat(row['prix'])+parseFloat(row['fraisLivraison'])
                    row['prix']=x;
                    alert(row['prix']);
                    dataRow.push(row['prix']);
                  }
                  else 
                  dataRow.push(parseFloat(row['prix']))

                }
                else if(column=="adresse"){
                dataRow.push(row['adresse']+' , '+row['wilaya']['nom'].toString()+'\n'+row['commune']['nom'].toString());
                }else 
                if(row[column]==null) 
                  dataRow.push("");
                else dataRow.push(row[column].toString());
             })
            
            body.push(dataRow);
        });

        return body;
      },

      table(data, columns) {
          return {
              table: {
                  widths: [75,60,60,60,95,55,60 ],
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








