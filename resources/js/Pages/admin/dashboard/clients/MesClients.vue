<template>
<v-app app>
    <div v-if="$page.errors" class="text-center">
      <div v-for="(v, k) in $page.errors" :key="k">
          <p v-for="error in v" :key="error" class="text-sm">
            <v-alert type="error" dismissible>
                {{error}}
          </v-alert>
          </p>
      </div>
    </div>
    <v-dialog v-model="dialogDelete" max-width="560px">
          <v-card>
            <v-card-title class="headline">Voulez vous vraiment supprimer ce client?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="closeDelete">Annuler</v-btn>
              <v-btn color="primary" text @click="deleteItemConfirm">Valider</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
      </v-dialog>
      <v-dialog v-model="dialog" max-width="850px">
          <v-card>
            <v-card-title>
              <span class="headline">Modifier</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-form action="" ref="form" v-model="valid" lazy-validation>
                <v-container>
                  <v-row>
                    <v-radio-group
                        v-model="editedItem.type"
                        row
                      >
                        <v-radio
                          label="Detail"
                          value="detail"
                        ></v-radio>
                        <v-radio
                          label="Gros"
                          value="gros"
                        ></v-radio>
                    </v-radio-group>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-text-field
                        outlined
                        v-model="editedItem.nom"
                        :rules="[rules.required]"
                        label="Nom"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-text-field
                        outlined
                        v-model="editedItem.prenom"
                        :rules="[rules.required]"
                        label="Prenom"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-text-field
                        outlined
                        v-model="editedItem.email"
                        :rules="[rules.email]"
                        required
                        label="Email"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-text-field
                        outlined
                        v-model="editedItem.telephone"
                        :rules="[rules.required]"
                        required
                        type="number"

                        label="telephone"
                      ></v-text-field>
                    </v-col>
                      <v-col
                        cols="12"
                        sm="12"
                        md="6"
                      >
                      <v-select v-if="$page.auth.role=='super-admin'"
                        outlined
                        label="Wilaya"
                        item-text="nom"
                        item-value="code"
                        :items="wilayas"
                        v-model="editedItem.wilaya"
                        :rules="[rules.required]"
                        @change="onChangeEdited"
                      ></v-select>
                    </v-col>

                    
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                    <v-select
                        outlined
                        label="commune"
                        item-text="nom"
                        item-value="id"
                        :items="communes"
                        v-model="editedItem.commune"
                        :rules="[rules.required]"    
                      ></v-select>

                    </v-col>
                    <v-col 
                        cols="12"
                        sm="12"
                        md="6"
                      >
                      <v-text-field
                        outlined
                        label="Adresse"
                        v-model="editedItem.adresse"
                        :rules="[rules.required]"  
                        
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-radio-group 
                        v-model="editedItem.TypeRemise"
                      >
                        <v-radio
                          label="Pas de remise"
                          value="aucune"
                        ></v-radio>
                        <v-radio
                          label="Pourcentage"
                          value="pourcentage"
                        ></v-radio>
                        <v-radio
                          label="DZD"
                          value="dzd"
                        ></v-radio>
                        <v-radio
                          label="prix unique"
                          value="prix unique"
                        ></v-radio>

                    </v-radio-group>

                    </v-col>
                    <v-col>
                      <v-text-field  v-if="editedItem.TypeRemise != 'aucune'"
                        v-model="editedItem.remise"
                        outlined
                        type="number"
                        :rules="[rules.required]"
                        label="Remise"
                      ></v-text-field>
                    </v-col>
                    

                  </v-row>
                </v-container>
              </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialog=false"
              >
                Annuler
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="updateClient"
              >
                Valider
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>
      <v-dialog
              v-model="dialogNew"
              max-width="850px"
            >   
          <v-card>
            <v-card-title>
              <span class="headline">Nouveau Client</span>
            </v-card-title>
            <v-card-text style="margin-top:-20px !important">
              <v-form action="" ref="form" v-model="valid" lazy-validation>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                    <v-radio-group
                        v-model="form.type"
                        row
                        :rules="[rules.required]"
                      >
                        <v-radio
                          label="Client Detail"
                          value="detail"
                        ></v-radio>
                        <v-radio
                          label="Client Gros"
                          value="gros"
                        ></v-radio>
                    </v-radio-group>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-text-field
                        outlined
                        v-model="form.nom"
                        :rules="[rules.required]"
                        label="Nom"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-text-field
                        outlined
                        v-model="form.prenom"
                        :rules="[rules.required]"
                        label="Prenom"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-text-field
                        outlined
                        v-model="form.email"
                        :rules="[rules.email]"
                        required
                        label="Email"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-text-field
                        outlined
                        v-model="form.telephone"
                        :rules="[rules.required]"
                        required
                        type="number"
                        label="telephone"
                      ></v-text-field>
                    </v-col>
                      <v-col 
                        cols="12"
                        sm="12"
                        md="6"
                      >
                      <v-select
                        outlined
                        label="Wilaya"
                        item-text="nom"
                        item-value="code"
                        :items="wilayas"
                        v-model="form.wilaya"
                        :rules="[rules.required]"
                        @change="onChange"  
                      ></v-select>
                    </v-col>
                    <v-col 
                        cols="12"
                        sm="12"
                        md="6"
                      >
                      <v-select
                        outlined
                        label="commune"
                        item-text="nom"
                        item-value="id"
                        :items="communes"
                        v-model="form.commune"
                        :rules="[rules.required]"  
                        
                      ></v-select>
                    </v-col>
                    <v-col 
                        cols="12"
                        sm="12"
                        md="6"
                      >
                      <v-text-field
                        outlined
                        label="Adresse"
                        v-model="form.adresse"
                        :rules="[rules.required]"  
                        
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                    <v-text-field
                      outlined
                      label="password"
                      v-model="form.password"
                    >
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                      
                    >
                      <v-radio-group 
                        v-model="form.typeRemise"
                        style="margin-top:-40px !important"
                      >
                        <v-radio
                          label="Pas de remise"
                          value="aucune"
                        ></v-radio>
                        <v-radio
                          label="Pourcentage"
                          value="pourcentage"
                        ></v-radio>
                        <v-radio
                          label="DZD"
                          value="dzd"
                        ></v-radio>

                        <v-radio
                          label="prix unique"
                          value="prix unique"
                        ></v-radio>


                    </v-radio-group>

                    </v-col>
                    <v-col>
                      <v-text-field  v-if="form.typeRemise != 'aucune'"
                        style="margin-top:-40px !important"
                        v-model="form.remise"
                        outlined
                        type="number"
                        :rules="[rules.required]"
                        label="Remise"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>

            <v-card-actions style="margin-top:-25px !important">
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialogNew=false"
              >
                Annuler
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="validate"
              >
                Valider
              </v-btn>
            </v-card-actions>
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
          <div class="text-right">
            
            <div class="text-right" style="float:right">
              <v-btn
                class="mb-2 mx-2"
                fab
                dark
                small
                large
                color="primary"
                @click="refreshClients"
              >
                <v-icon dark>
                  mdi-refresh
                </v-icon>
              </v-btn>
            </div>
            
            <v-btn
            @click="dialogNew=true;generate()"
            color="secondary"
            >
              Nouveau Client
            </v-btn>
          </div>
          <v-data-table
            :headers="$page.auth.role!='super-admin'?headersO:headersSuperA"
            v-model="selected"
            :single-select="!singleSelect"
            :items="filteredClients"
            class="elevation-1"
            :page.sync="page"
            show-select
            @page-count="pageCount = $event"
            item-key="id_client"
            
          >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
              @keyup.enter="filteredClients()"
              
              
            ></v-text-field>
          </template>
          <template v-slot:[`item.wilaya`]="{ item }">
            {{typeof(item.wilaya)=='object'? item.wilaya['nom'] :  item.wil['nom']}}
          </template>
          <template v-slot:[`item.remise`]="{ item }">
             <v-chip v-if="item['Typeremise']!='aucune' && item['TypeRemise']!=null" color="primary">
              <div v-if="item['TypeRemise']=='pourcentage'">
                {{  item['remise']+' %'}}
              </div>
              <div v-if="item['TypeRemise']=='dzd'">
                {{  item['remise']+' DZD'}}
              </div>
              <div v-if="item['TypeRemise']=='prix unique'">
                 {{ 'Prix Unique  '+ item['remise']+' DZD'}}
              </div>
             </v-chip>
             <v-chip v-else color="primary">
               AUCUNE REMISE
             </v-chip>
          </template>

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
          <template v-slot:[`item.details`]="{ item }">
              <Inertia-link :href="`/administration/clients/${item.id_client}/details`">
                <v-btn
                  small
                  color="primary"
                  class="mr-2 mx-2"
                >
                Details
                </v-btn>
              </Inertia-link>    
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
import Drawer from '../../Drawer'
import axios from 'axios'
import vuepass from '../../../../components/globals/vuepass'


export default {
    props: ['clients','wilayas'],
    components: {
        layout,
        Drawer,
        vuepass
    },
    
    mounted(){
     this.tableItems=this.clients;
     
    },
    computed:{

    filteredClients(){
     var result=[];
     this.search=this.search.toLowerCase();
      
      return this.tableItems.filter(colis =>{
        
        if(colis.wilaya!=null && typeof(colis.wilaya)=='object' )  
            if(colis.wilaya['nom'].toLowerCase().match(this.search) !=null ) {  
                return true; 
            }
         return colis.email.toLowerCase().match(this.search)!=null ||
              colis.nom.toLowerCase().match(this.search)!=null ||
              colis.prenom.toLowerCase().match(this.search)!=null ||
              colis.telephone.match(this.search)!=null 
               
      });
    
      
    }
    
    },
    data () {
      return {
        filtered:false,
        filteredCentre:false,
        livreur:'',
        dialogDelete: false,
        dialog:true,
        communes:[],
        page: 1,
        dialogNew:false,
        dialog:false,
        valid:true,
        form:{
          nom:'',
          prenom:'',
          email:'',
          telephone:'',
          wilaya:'',
          password:'',
          adresse:'',
          type:'',
          typeRemise:'aucune',
          remise:''
        },
        rules: {
        required: (value) => !!value ||  "Champ pbligatoire.",
        counter: (value) =>
          value.length >= 8 || "longueur minimum 8 caractères",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
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
          nom: '',
          prenom:'',          
          telephone: '',
          
          adresse: '',
          commune:'',
          type:'',
          remise:null

        },
        itemsPerPage: 4,
        headersSuperA: [
          {
            text: 'Type',
            align: 'start',
            sortable: false,
            value: 'type',
          },
          {
            text: 'Nom',
            align: 'start',
            sortable: false,
            value: 'nom',
          },
          { text: 'Prenom', value: 'prenom' },
          { text: 'Telephone', value: 'telephone' },
          { text: 'Email', value: 'email' },
          { text: 'Wilaya', value: 'wilaya' },
          { text: 'Remise', value: 'remise' },
          { text: 'Details', value: 'details' },
          { text: 'Actions', value: 'actions' },
          
        ],
        headersO: [
          {
            text: 'Type',
            align: 'start',
            sortable: false,
            value: 'type',
          },
          {
            text: 'Nom',
            align: 'start',
            sortable: false,
            value: 'nom',
          },
          { text: 'Prenom', value: 'prenom' },
          { text: 'Telephone', value: 'telephone' },
          { text: 'Email', value: 'email' },
          { text: 'Wilaya', value: 'wilaya' },
          { text: 'Remise', value: 'remise' },
          { text: 'Details', value: 'details' },
          
          
        ],  
      }
    },

    methods: {
      text: item => item.nom +" "+ item.prenom,
      
      createClient(){
          this.dialogNew=false;
          //
          var _this = this ; 
          var ele = this.wilayas.filter(function(ele){
             return  ele.code==_this.form.wilaya
        });
        
        this.form.wil=ele[0];
        this.tableItems.push(this.form);
   
          this.$inertia.post(route('admin.nclient'),this.form).then(()=> {
            this.$toast.open({
              message: "Client ajouté avec succés ",
              type: "success",
              duration: 9000,
              dismissible: true,
              position:"top-right"
            });
      });
      },
      onChange(){
        axios.get('/communes/'+this.form.wilaya).then((response) => {
            this.communes=response.data.communes
        })  
        //this.editedItem.commune=[];
      },
      onChangeEdited(){
        
        axios.get('/communes/'+this.editedItem.wilaya).then((response) => {
            this.communes=response.data.communes
        })  
        //this.editedItem.commune=[];
      },
     
      DetailsItem (item) {
        this.editedIndex = this.colis.indexOf(item)
        this.editedItem = Object.assign({}, item)
        
        this.dialog = true
      },
      
      validate () {
        this.$refs.form.validate()
        if(this.$refs.form.validate()) return this.createClient();
      },
      refreshClients(){
          this.$inertia.visit(route('admin.clients'))
      },
      editItem (item) {
        this.editedIndex = this.tableItems.indexOf(item)
        //alert(this.editedIndex);
        this.editedItem = Object.assign({}, item)
        this.editedItem.id=item.id_client;
        this.editItem.password="";
        if(this.editedItem.TypeRemise==null)  this.editedItem.TypeRemise="aucune";
        axios.get('/communes/'+this.editedItem.wilaya['id']).then((response) => {
            this.communes=response.data.communes
        })
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.clients.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.editedItem.id=item.id_client;
        this.dialogDelete = true
      },


    updateClient(){
        var _this=this;
        
        if(typeof(this.editedItem.wilaya)!='object'){
        var ele = this.wilayas.filter(function(ele){
             return  ele.code==_this.editedItem.wilaya
        });
        
        this.editedItem.wilaya=ele[0];
        }

        Object.assign(this.tableItems[this.editedIndex], this.editedItem)
  
        this.dialog=false; 
        this.$inertia.post(route('admin.uclient'),this.editedItem)  
          this.$toast.open({
            message: "Client modifié avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
        
      },

      deleteItemConfirm () {
        this.tableItems.splice(this.editedIndex, 1)
        this.closeDelete()
        this.$inertia.post(route('admin.rclient'),this.editedItem).then(()=> {
            
          this.$toast.open({
            message: "Client supprimé avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
         });

      },
      closeDelete () {
        this.dialogDelete = false
      },
      closeDetails(){
        this.dialog=false
      },
      generate () {  
        let CharacterSet = '';
        let password = '';
        CharacterSet += 'abcdefghijklmnopqrstuvwxyz';
        for(let i=0; i < 8; i++) {
          password += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length));
        }
        this.form.password = password;
      },
      
      filterElements() {
        this.filtered=!this.filtered;
        if(this.filtered)
        this.tableItems= this.colis.filter(element=>element.wilaya['id'] == this.$page.auth.user.wilaya);
        else this.tableItems= this.colis;
        
        return this.tableItems;
      },
      filterCentre() {
        this.filteredCentre=!this.filteredCentre;
        if(this.filtered) 
        this.tableItems= this.colis.filter(element=>element.wilaya['id'] in this.wilayas );
        else this.tableItems= this.colis;
        return this.tableItems;
      },
      
    },

}
</script>








