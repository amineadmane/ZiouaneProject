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
            
            <v-row dense class="mt-4">
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.produits"
                    outlined
                    :rules="[rules.required]"
                    label="Produit(s)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="editedItem.poids"
                    outlined
                    @keyup="updateFrais"
                    :rules="[rules.required]"
                    type="number"
                    label="Poids (KG)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="editedItem.poidsFrais"
                    outlined
                    type="number"
                    label="Rajouter frais Livraison"
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="editedItem.codeCommande"
                    outlined
                    :rules="[rules.required]"
                    label="code commande"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="editedItem.prix"
                    outlined
                    type="number"
                    :rules="[rules.required]"
                    label="Prix (DZD)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.remarque"
                    outlined
                    label="Remarque"
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
                          v-model="editedItem.wil"
                          outlined
                          :items="wilayas"
                          item-text="wT"
                          item-value="to"
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
                          :items="com"
                          item-text="nom"
                          item-value="nom"
                          :rules="[rules.required]"
                          label="Commune"
                        ></v-select>
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
                          label="Code postal"
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
                color="primary"
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
          <template v-slot:[`item.poids`]="{ item }">
            {{item.poids}} KG
          </template>
          <template v-slot:[`item.prix`]="{ item }">
            {{item.prix}} DZD
          </template>
          <template v-slot:[`item.fraisLivraison`]="{ item }">
            {{item.fraisLivraison}} DZD
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
     this.wilayas.map(function(element){
          return element['wT']=element.wilaya_t['nom'];
        });
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
        com:[],
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
            text: 'Frais Livraison',
            align: 'start',
            sortable: false,
            value: 'fraisLivraison',
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
        this.com= this.comms[this.editedItem.wil];
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
        const _this = this;
        this.editedItem.fraisLivraison=0;
        var t =this.wilayas.filter(function(x){
          return x.to.toString().toLowerCase()==_this.editedItem.wil.toString().toLowerCase();
        })
        if(this.editedItem.typeLivraison=='Stop Agence')
            
            this.editedItem.fraisLivraison =  t[0].agence
        else 
            this.editedItem.fraisLivraison =  t[0].prix;

        if(this.$page.auth.TypeRemise=="pourcentage")
        this.editedItem.fraisLivraison = parseFloat(parseFloat(this.editedItem.fraisLivraison) - parseFloat((parseFloat(this.$page.auth.remise)*parseFloat(this.editedItem.fraisLivraison))/100))
        if(this.$page.auth.TypeRemise=="dzd")
        this.editedItem.fraisLivraison = parseFloat(this.editedItem.fraisLivraison) - parseFloat(this.$page.auth.remise)
        if(this.$page.auth.TypeRemise=='prix unitaire')
             this.form.fraisLivraison = this.$page.auth.remise;
        
        
        this.editedItem.fraisLivraison  = parseFloat(this.editedItem.fraisLivraison) + parseFloat(this.editedItem.poidsFrais)
        
        axios.get('/communes/'+this.editedItem.wil).then((response) => {
            this.comms=response.data.communes
          })  
      },
      findColumn(element){
        if (element[0]==null) return 0
        if (element[1]==null) return 1
        if(element[2]==null) return 2;
        if(element[3]==null) return 3;
        if(element[4]==null) return 4;
        if(element[5]==null) return 5;
        if(element[6]==null) return 6
        if(element[7]==null) return 7;
        if(element[8]==null) return 8;
        if(element[9]!='Stop Agence' && element[9]!='A domicile') return 9;
        if( element[10] != 'Oui' &&  element[10] != 'Non') return 10;
      },
      upload(){
        readXlsxFile(this.file).then((rows) => {
            var arr = rows.shift();
            var BreakException = {};
            var index =-1;
            var i = 0;  
              for(let element of rows){
                    var map ={};
                    var t;
                    i=i+1;
                if(
                  element[0]==null||element[1]==null||
                  element[2]==null||element[3]==null||element[4]==null||
                  element[5]==null||element[6]==null||
                  element[7]==null||element[8]==null|| (element[9]!='Stop Agence' && element[9]!='A domicile')
                  || ( element[10] != 'Oui' &&  element[10] != 'Non')
                ) { index=rows.indexOf(element); i=this.findColumn(element); break;}
                
                   t =this.wilayas.filter(function(x){
                    
                   return x.wilaya_t['nom'].toString().toLowerCase()==element[2].toString().toLowerCase();
                  })
                  console.log(t);
                 if(t.length==0) { i=2; index=rows.indexOf(element); break;}
                else {
                  map.wil=t[0].wilaya_t['id'];
                  var temp=this.communes[map.wil].filter(function(s){
                      return s['nom'].toString().toLowerCase()==element[3].toString().toLowerCase()
                  });
                  if(temp.length==0) 
                  { i=3; index=rows.indexOf(element); break;}
                  else {map.commune=temp[0]['nom']; map.codePostal=temp[0]['code_postal']}
                }
                
                map.nomclient = element[0];
                map.telephone=element[1];
                map.wilaya=element[2];
                if(map.commune==null) map.commune=element[3];
                map.adresse=element[4];
                map.produits=element[5];
                map.poids=element[6]
                map.prix=element[7];
                map.codeCommande=element[8];
                map.typeLivraison=element[9];
                map.livraison=element[10]=="Oui"? 1 :0;
                map.remarque=element[11];
                map.fraisLivraison='';
               
                // check if agence ou domicile
                if(map.typeLivraison=='Stop Agence')
                      map.fraisLivraison = t[0]['agence']
                if(map.typeLivraison=='A domicile')
                      map.fraisLivraison = t[0]['prix']
                // check le poids 
                
                this.update(map);
                //check remise
                
                map.fraisLivraison = parseFloat(map.fraisLivraison) + parseFloat(map.poidsFrais);
                if(map.typeLivraison=='A domicile'){
                  if(this.$page.auth.TypeRemise=="pourcentage")
                  map.fraisLivraison = parseFloat(parseFloat(map.fraisLivraison) - parseFloat((parseFloat(this.$page.auth.remise)*parseFloat(map.fraisLivraison))/100))
                  if(this.$page.auth.TypeRemise=="dzd")
                  map.fraisLivraison = parseFloat(map.fraisLivraison) - parseFloat(this.$page.auth.remise)
                  if(this.$page.auth.TypeRemise=="prix unitaire")
                  map.fraisLivraison =  parseFloat(this.$page.auth.remise)
                }
                this.colis.push(map);
              }
              if(index!=-1) {
                index=index+1;
                i = i+1;
                this.$toast.open({
                  message: "Erreur a la ligne "+index+" a la colonne "+i+" veuillez verifier votre fichier",
                  type: "error",
                  duration: 9000,
                  dismissible: true,
                  position:"top-right"
                });

              }
        })
        
       },
       update(map){
          
        if(this.$page.auth.type=='details')  {
          if(parseFloat(map.poids) > 5 && parseFloat(map.poids) <= 15 )
              return map.poidsFrais=300
          else 
            if(parseFloat(map.poids) > 15 && parseFloat(map.poids) <= 20 )
              return  map.poidsFrais=500
            else 
              if(parseFloat(map.poids)>20)
                return  map.fraisLivraison = parseFloat(map.fraisLivraison) 
        }else 
          if(parseFloat(map.poids)>5) {
              var x = parseFloat(map.poids)-5;
              return  map.poidsFrais =   50 * x 
          } 
          else map.poidsFrais=0;
               
            
      },

      updateFrais(){
         
        this.editedItem.fraisLivraison = parseFloat(this.editedItem.fraisLivraison) - parseFloat(this.editedItem.poidsFrais);
        if(this.editedItem.poids<=5) return this.editedItem.poidsFrais=0 ; 
        if(this.$page.auth.type=='details')  {
          if(parseFloat(this.editedItem.poids) > 5 && parseFloat(this.editedItem.poids) <= 15 )
              return [this.editedItem.poidsFrais = 300 , this.editedItem.fraisLivraison=parseFloat(this.editedItem.fraisLivraison)+300]
          else 
            if(parseFloat(this.editedItem.poids) > 15 && parseFloat(this.editedItem.poids) <= 20 )
              return [ this.editedItem.poidsFrais = 500, this.editedItem.fraisLivraison=parseFloat(this.editedItem.fraisLivraison)+500]
            else 
              if(parseFloat(this.editedItem.poids)>20)
                return [ this.poidsFrais= parseFloat(this.editedItem.fraisLivraison), this.editedItem.fraisLivraison = 2*parseFloat(this.editedItem.fraisLivraison) ]
        }else 
          if(parseFloat(this.editedItem.poids)>5) {
              var x = parseFloat(this.editedItem.poids)-5;
              return [ this.editedItem.poidsFrais = 50 * x , this.editedItem.fraisLivraison = parseFloat(this.editedItem.fraisLivraison) + 50 * x ]
          } 
               
            
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








