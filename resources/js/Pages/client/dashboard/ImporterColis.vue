<template>
<v-app app>
     <v-dialog v-model="dialogDelete" max-width="600px">
          <v-card>
            <v-card-title class="headline">Êtes-vous sûr de bien vouloir supprimer cet élément ?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="closeDelete">Annuler</v-btn>
              <v-btn color="primary" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
      </v-dialog>

    <v-dialog
      v-model="dialog"
      hide-overlay
      style="backgroud-color:transparent"
      max-width="800px"
    >
      <v-card>
        
        <v-card-title>
          <span class="headline">Modifier Colis</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form action="" ref="form" v-model="valid" lazy-validation>
        
        <base-material-card
          color="primary"
          class="px-5 py-3 "
          width="40%"
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
              :rules="[rules.required]"
              outlined
              label="Nom Complet"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="editedItem.telephone"
              outlined
              type="number"
              :rules="[rules.required]"
              label="Numéro de téléphone"
            ></v-text-field>
          </v-col>
          </v-row>
        </base-material-card>
        
        <base-material-card
          color="primary"
          class="px-5 py-3 mt-10"
          width="40%"
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
                        :rules="[rules.required]"
                        label="Adresse"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-select  
                        v-model="editedItem.wilaya"
                        outlined
                        :items="wilayas"
                        item-text="nom"
                        item-value="nom"
                        :rules="[rules.required]"
                        label="Wilaya"
                        @change="onChange"
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-select
                        v-model="editedItem.commune"
                        outlined
                        :items="comms"
                        item-text="nom"
                        item-value="nom"
                        :rules="[rules.required]"
                        label="Commune"
                      ></v-select>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.codePostal"
                        outlined
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
                    :rules="[rules.required]"
                    label="Produit(s)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.codeCommande"
                    outlined
                    :rules="[rules.required]"
                    label="code commande"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.prix"
                    outlined
                    :rules="[rules.required]"
                    label="Prix"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.remarque"
                    outlined
                    label="Remarque"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-checkbox
                    v-model="editedItem.livraison"
                    label="Livraison Gratuite"
                    color="red darken-3"
                  ></v-checkbox>
                </v-col>
          </v-row>
        </base-material-card>
      
      </v-form>
      <v-card-actions class="d-flex justify-between">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            filled
            @click="dialog = false"
          >
            Fermer
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="validate"
          >
            Sauvegarder
          </v-btn>
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
        class="mt-2"
        >
        <div>
          <base-material-card
          color=""
          class="px-5 py-3 "
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Veuillez suivre ce modele de fichier excel 
              <v-btn
                :loading="loading5"
                :disabled="loading5"
                color="blue-grey"
                 href="/models/colis.xlsx"
                class="ma-2 white--text"
                fab
                @click="loader = 'loading5'"
              >
                <v-icon dark>
                  mdi-cloud-download
                </v-icon>
              </v-btn>
            </div>  
            <div class="text-center">
              <v-file-input
                truncate-length="15"
                v-model="file"
              ></v-file-input>
              <v-btn
                class="ma-2 text-center" 
                color="secondary"
                @click="upload"
              >
                Importer 
              </v-btn>        
            </div>
            
          </template>
          </base-material-card>
        </div>
        
        <v-data-table
          :headers="headers"
          :items="colis"
          class="elevation-1"
          :page.sync="page"
          @page-count="pageCount = $event"
          item-key="name"
        >
        
        <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              small
              color="primary"
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              color="primary"
              @click="deleteItem(item)"
            >
              mdi-delete
    </v-icon>
        </template>
        <template v-slot:[`item.livraison`]="{ item }">
            <p v-if="item.livraison==null||item.livraison==0">
              Frais Livraison inclus
            </p>
              <v-chip v-else
                color="primary"
              >
              Livraison Gratuite
              </v-chip>
          </template>
        </v-data-table>
          <v-pagination
            class="mt-4"
            v-model="page"
            :length="pageCount"
        ></v-pagination> 
        <div class="text-right">
          <v-btn
            class="ma-2"
            color="secondary"
            @click="saveColis"
          >
            Valider
          </v-btn>
        </div>
        
        </v-container>   
      </v-main>
    </layout>
    
    
    
</v-app>
</template>
<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
<script>
import readXlsxFile from 'read-excel-file'
import layout from '@/Shared/Default'
import axios from 'axios'
import Drawer from '../../Drawer'
export default {
    props: ['wilayas','communes','ids'],
    components: {
        layout,
        Drawer
    },
    mounted(){
     this.comms=this.communes
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    
    },
    computed:{

    filteredColis(){
     var result=[];
     this.search=this.search.toLowerCase();
      return this.colis.filter(colis =>{
       // alert(colis);
       // alert(colis.wilaya);
        /*
        if(colis.wilaya!=null)  
            if(colis.wilaya.toString().toLowerCase().match(this.search) !=null ) 
                {  return true; }
        
       
        if(colis.commune!=null)  if(
              colis.commune.toString().toLowerCase().match(this.search)!=null ) return true;  
       
       
       if(colis.remarque!=null)  if(
              colis.remarque.toString().toLowerCase().match(this.search)!=null ) return true; 
        */
         return 
              colis.codecolis.toString().toLowerCase().match(this.search)!=null ||
              colis.telephone.match(this.search)!=null ||
              colis.nomclient.toString().toLowerCase().match(this.search)!=null ||
              colis.adresse.toString().toLowerCase().match(this.search)!=null ||
              colis.produits.toString().toLowerCase().match(this.search)!=null 
      });
      
     
      }
    

    },

    data () {
      return {
        file:'',
        dialog:false,
        valid:true,
        comms:[],
        loader: null,
        loading5: false,
        dialogDelete: false,
        page: 1,
        search:'',
        communes:'',
        pageCount: 0,
        rules: {
        required: (value) => !!value ||  "Champ pbligatoire.",
        },
        editedItem: {
          nomclient: '',
          telephone: '',
          wilaya: '',
          commune: '',
          adresse: '',
          produits:'',
          codeCommande:'',
          fraisLivraison:'',
          prix:'',
          livraison:'',
          remarque:'',
          codePostal:''
        },
        defaultItem: {
            nomclient: '',
            telephone: 0,
            wilaya: '',
            commune: '',
            adresse: '',
            produits:'',
            codeCommande:'',
            prix:'',
            livraison:'',
            remarque:''
            
        },
        itemsPerPage: 4, 
        headers: [ 
          
          {
            text: 'Code',
            align: 'start',
            sortable: false,
            value: 'codeCommande',
          },
          {
            text: 'Client',
            align: 'start',
            sortable: false,
            value: 'nomclient',
          },
          { text: 'Telephone', value: 'telephone' },
          { text: 'wilaya', value: 'wilaya' },
          { text: 'Commune', value: 'commune' },
          { text: 'Adresse', value: 'adresse' },
          { text: 'Produits', value: 'produits' },
          { text: 'Poids', value: 'poids' },
          
          {
            text: 'Prix',
            align: 'start',
            sortable: false,
            value: 'prix',
          },
          {
            text: 'Livraison Gratuite',
            align: 'start',
            sortable: false,
            value: 'livraison',
          },
          {
            text: 'Remarque',
            align: 'start',
            sortable: false,
            value: 'remarque',
          },

          { text: 'Action', value: 'actions' },
        ],
        colis:[],
      }
    },

    methods: {
      validate () {
        this.$refs.form.validate()
        if(this.$refs.form.validate()) return this.save();
      },
      deleteItem (item) {
        this.editedIndex = this.colis.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.colis.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      editItem (item) {
        this.editedIndex = this.colis.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.colis[this.editedIndex], this.editedItem)
        } else {
          this.colis.push(this.editedItem)
        }
        this.close()
      },
      saveColis(){

        this.$inertia.post(route('colis.storeData'),this.colis);
      },
      onChange(){
        var element = this.wilayas.find(Element=>Element.nom==this.editedItem.wilaya);
        this.editedItem.fraisLivraison=element['fraisLivraison'];
        axios.get('/communes/nom/'+this.editedItem.wilaya).then((response) => {
            this.comms=response.data.communes
          })  
      },
      upload(){
        readXlsxFile(this.file).then((rows) => {
            var arr = rows.shift();
            var BreakException = {};
            var index =-1;
              
              for(let element of rows){
                    var map ={};
                if(
                  element[0]==null||element[1]==null||
                  element[2]==null||element[3]==null||element[4]==null||
                  element[5]==null||element[6]==null||
                  element[7]==null||element[8]==null
                ) { index=rows.indexOf(element); break;}
                
                  var t =this.wilayas.filter(function(x){
                       return x.toString().toLowerCase()==element[2].toString().toLowerCase();
                  })
                  
                 if(t.length==0) { index=rows.indexOf(element); break;}
                else {

                  var x = this.wilayas.indexOf(t[0].toString());
                  
                  map.wil=this.ids[x];
                  
                  var temp=this.communes[map.wil].filter(function(s){
                      //alert(s['nom']);
                      return s['nom'].toString().toLowerCase()==element[3].toString().toLowerCase()
                  });
                  console.log(temp);
                  if(temp.length==0) 
                  { index=rows.indexOf(element); break;}
                  else {map.commune=temp[0]['nom']}
                }
                
                map.nomclient = element[0];
                map.telephone=element[1];
                map.wilaya=element[2];
                if(map.commune==null) map.commune=element[3];
                map.adresse=element[4];
                map.produits=element[5];
                map.poids=element[6]
                map.codeCommande=element[7];
                map.prix=element[8];
                map.livraison=element[9]
                map.remarque=element[10];
                map.fraisLivraison='';
                this.colis.push(map);
              }
              if(index!=-1) {
                index=index+1;
                this.$toast.open({
                  message: "Erreur a la ligne "+index+" veuillez verifier votre fichier",
                  type: "error",
                  duration: 9000,
                  dismissible: true,
                  position:"top-right"
                });

              }
                
              
              
             
            // `rows` is an array of rows
            // each row being an array of cells.
        })
        
       },
      
      closeDelete () {
        this.dialogDelete = false
      },
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
    },

}
</script>








