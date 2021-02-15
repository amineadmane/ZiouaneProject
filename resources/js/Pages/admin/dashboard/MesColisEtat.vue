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
                        v-model="editedItem.fraisLivraison"

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
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="editedItem.poids"
                    outlined
                    disabled
                    label="Poids (KG)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="editedItem.codecolis"
                    outlined
                    disabled
                    label="code commande"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="editedItem.prix"
                    outlined
                    disabled
                    label="Prix DZD"
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
                  <v-checkbox v-if="editedItem.livraison==1"
                    v-model="editedItem.livraison"
                    label="Livraison Gratuite"
                    disabled
                    color="red darken-3"
                  ></v-checkbox>
                  <v-checkbox v-else
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
          <div v-if="$page.auth.role=='agent-bureau' || $page.auth.role=='admin-wilaya'">
        <v-row>
          <v-col cols="12" md="3">
                <h4>Changer l'etat a </h4>
                <v-select 
                  class="mt-2"
                  :items="items"
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
                  @click="changerEtat"
                >
                  <v-icon dark>
                    mdi-check
                  </v-icon>
                </v-btn>
            </v-col>
          
        </v-row>
          
      </div>
        <div class="text-right" style="float:right">
            <v-btn
              class=""
              fab
              dark
              small
              large
              color="primary"
              @click="refresh"
            >
              <v-icon dark>
                mdi-refresh
              </v-icon>
            </v-btn>
          </div>
          
          <v-data-table
            :headers="headers"
            v-model="selected"
            :single-select="!singleSelect"
            :items="filteredColis"
            class="elevation-1"
            :page.sync="page"
            :items-per-page="10"
            show-select
            @page-count="pageCount = $event"
            
            item-key="id"
            
            
          >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
              @keyup.enter="filteredColis()"
            ></v-text-field>
          </template>
          
          <template v-slot:[`item.livreur`]="{ item }">
            {{item.livreur!=null? item.livreur['nom']+" "+item.livreur['prenom'] : ""}}
           
            
          </template>
          
          <template v-slot:[`item.details`]="{ item }">
              <v-icon
                small
                color="primary"
                class="mr-2 mx-2"
                @click="DetailsItem(item)"
              >
                mdi-details
              </v-icon>
              
          </template>
          
          <template v-slot:[`item.etat1`]="{ item }">
              <v-chip v-if="item.motifRetour!=null"
                color="primary"
              >
               {{item.motifRetour!=item.etat1? item.motifRetour:''}} {{item.etat2!=null ? item.etat1+" ( " +item.etat2+" )": "("+item.etat1+")"}}
              </v-chip>
              <v-chip v-else
                color="primary"
              >
                {{item.etat1}}  ( {{item.etat2}} ) 
              </v-chip>
          </template>
          <template v-slot:[`item.frais`]="{ item }">
            <p v-if="item.livraison==0">
              {{item.fraisLivraison}}
            </p>
              <v-chip v-else
                color="primary"
              >
           {{item.fraisLivraison }} DZD   Livraison Gratuite
              </v-chip>
          </template>
          <template v-slot:[`item.total`]="{ item }">
            {{item.livraison==0?parseFloat(item.fraisLivraison)+parseFloat(item.prix):item.prix}} DZD
          </template>
          <template v-slot:[`item.adresse`]="{ item }">
           {{item.adresse}} , {{item.commune['nom']}},  {{item.wilaya['nom']}}, 
            
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
    props: ['colis','livreurs','centre'],
    components: {
        layout,
        Drawer
    },
    
    
    mounted(){
     this.tableItems=this.colis;
     var _this = this;
     if((_this.$page.auth.role=="admin-wilaya" || 
     _this.$page.auth.role=="agent-bureau"))
     { _this. items.push('au bureau') }
    
     if(this.$page.auth.role=="admin-wilaya") this.items.push(this.centre['nom'])
     if((_this.$page.auth.role=="admin-wilaya" || 
     _this.$page.auth.role=="agent-bureau") && this.colis[0].id_colisannule!=null)
     { _this. items.push('en transport') }
    
    
    },
    computed:{

     filteredColis(){
     var result=[];
     this.search=this.search.toLowerCase();
     if(this.colis.length>0) return this.indexedItems;
      return this.indexedItems.filter(colis =>{
        if(colis.wilaya!=null)  
            if(colis.wilaya['nom'].toLowerCase().match(this.search) !=null ) 
                {  //  alert(colis.wilaya['nom'].toLowerCase());
                      return true; 
                }
        
        if(colis.commune!=null)  if(
              colis.commune['nom'].toLowerCase().match(this.search)!=null ) return true; 
        
        if(colis.etat1!=null)  if(
              colis.etat1.toLowerCase().match(this.search)!=null ) return true; 
        
        if(colis.etat2!=null)  if(
              colis.etat2.toLowerCase().match(this.search)!=null ) return true; 
            
    
         return colis.ref.toLowerCase().match(this.search)!=null ||
              colis.codecolis.toLowerCase().match(this.search)!=null ||
              colis.telephone.toLowerCase().match(this.search)!=null ||
              colis.nomclient.toLowerCase().match(this.search)!=null ||
              colis.codePostal.toLowerCase().match(this.search)!=null ||
              colis.adresse.toLowerCase().match(this.search)!=null ||
              colis.produits.toLowerCase().match(this.search)!=null 
      });
    
      
      },

      indexedItems () {
      return this.tableItems.map((item, index) => ({
        id: item.etat1=='livré' ? item.id_colisLivre  : item.id_colisannule,
        ...item
      }))
    },
    
    },
    data () {
      return {
        filtered:false,
        livreur:'',
        etat:"",
        selected: [],
        dialog: false,
        singleSelect: true,
        page: 1,
        items:[],
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
            text: 'client',
            value: 'nomclient',
          },
          { text: 'Reference', value: 'ref' },
          { text: 'Livreur', value: 'livreur' },
          { text: 'Etat', value: 'etat1' },
          { text: 'Telephone', value: 'telephone' },
          
          { text: 'Adresse', value: 'adresse' },
          { text: 'CodePostal', value: 'codePostal' },
          { text: 'Produits', value: 'produits' },
          
          { text: 'Prix', value: 'prix' },
          { text: 'Frais Livraison', value: 'frais' },
          { text: 'Total', value: 'total' },
          { text: 'Remarque', value: 'remarque' },

          { text: 'Details', value: 'details' },
          
          
        ],

        
      }
    },

    methods: {
      text: item => item.nom +" "+ item.prenom,
      refresh(){
         if(this.colis[0].id_colisannule!=null)
            return this.$inertia.visit('/administration/mescolis/annules')
          return this.$inertia.visit('/administration/mescolis/livres')
          
      },
      changerEtat(){
        var _this = this;
        var x = [];
        var c = "bureau "+this.$page.auth.wilaya['nom']
        if(this.selected.length==0 ) 
          return  this.$toast.open({
            message: "Aucun colis selectionné ",
            type: "error",
            duration: 9000,
            dismissible: true,
            position:"top-right"
        });
        var form = {};
        if(this.etat=="au bureau") 
            this.etat = "bureau "+this.$page.auth.wilaya['nom'];
        
        

        if(this.$page.auth.role=="admin-wilaya" || this.$page.auth.role=="agent-bureau"){
          
          if(this.etat=="en transport"){

             x = this.selected.filter(element => {
                 if(element.id_colisannule != null)
                 return !  (element.etat2 == _this.centre['nom'] && ( element.etat1==c ||  element.etat1=="en transport") ) 
                 else true
            });
            
            if(x.length>0)
            return  this.$toast.open({
                message: "Vous avez selectionner des colis qui ne sont pas destinés au centre ",
                type: "error",
                duration: 9000,
                dismissible: true,
                position:"top-right"
            });

          }
          else 
           if(this.etat == this.centre['nom'] ){
           //centre
            var x = this.selected.filter(element => {
                
                 if(element.id_colisannule != null)
                 return !  ( element.client['wilaya'] != _this.$page.auth.wilaya['id'] && element.etat1 == c && ( element.etat2=="au bureau"||  this.etat))  
                 else return true;
            });
            
            if(x.length>0)
             return  this.$toast.open({
                message: "Des colis qui ne sont pas au bureau ou des colis de votre wilaya ont été selecionnés  ",
                type: "error",
                duration: 9000,
                dismissible: true,
                position:"top-right"
            });
          }else {
            //au bureau
            alert('dfdfg');
            var x = this.selected.filter(element => {
                alert(element.etat2 == 'pas pret' ||  (element.etat1=="en transport" && element.etat2==c) || (element.etat1==c));
                return !  ( element.etat2 == 'pas pret' ||  (element.etat1=="en transport" && element.etat2==c) || (element.etat1==c))  
            });
            alert(x);
            if(x.length>0)
            return this.$toast.open({
                message: "Vous avez selectionner des colis qui ne sont pas au bureau ",
                type: "error",
                duration: 9000,
                dismissible: true,
                position:"top-right"
            });
            
            
          }
        }
        
        if(this.etat=="bureau "+this.$page.auth.wilaya['nom']) {
          
          form.etat2="au bureau"
          form.etat="bureau "+this.$page.auth.wilaya['nom']
          
        }
        else 
         {
          if(this.etat=="en transport"){
            form.etat2=this.centre['nom']
            form.etat="en transport"
            
          }else{
              form.etat2=this.etat;
            form.etat=null;
          }
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        if(this.selected.length!=0)
        this.selected.forEach(element => {
          element.etat2=form.etat2;
          
          this.colis[this.colis.indexOf(element)]=element
          
        });
        
        if(this.selected.length!=0)
        form.selected=this.selected
        
        //if(form.etat==null) form.etat=this.etat
        
        if(this.selected[0].etat1=='livré')
          
        this.$inertia.post(route('admin.changerEtatLiv'),form).then(()=> {
          this.refresh();
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
        this.$inertia.post(route('admin.changerEtatAnnu'),form).then(()=> {
          this.refresh();
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
      
      /*
      changerEtat(){
        if(this.selected.length==0) 
          return  this.$toast.open({
            message: "Aucun colis selectionné ",
            type: "error",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
        var form = {};
        this.selected.forEach(element => {
          element.etat1=this.etat;
          this.colis[this.colis.indexOf(element)]=element
          
        });
        form.selected=this.selected
        form.etat=this.etat
        this.$inertia.post(route('admin.changerEtat'),form).then(()=> {
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
      */
      attribuerLivreur(){
        if(this.selected.length==0) 
          return  this.$toast.open({
            message: "Aucun colis selectionné ",
            type: "error",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
        var form = {};
        
        form.selected=this.selected
        form.livreur=this.livreur
        this.$inertia.post(route('admin.attribuerLivreur'),form).then(()=> {
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








