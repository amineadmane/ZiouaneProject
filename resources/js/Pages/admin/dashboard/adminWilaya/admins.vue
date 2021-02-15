<template>
<v-app app>
    <div v-if="$page.errors" class="text-center"  style="width:fit-content;align-self:center;margin-top:15px">
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
            <v-card-title class="headline">Voulez vous vraiment supprimer cet admin?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Annuler</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Valider</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
      </v-dialog>
      <v-dialog v-model="dialog" max-width="560px">
          <v-card>
            <v-card-title>
              <span class="headline">Modifier</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-form action="" ref="form" v-model="valid" lazy-validation>
                <v-container>
                  <v-row>
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
                      <v-select
                        outlined
                        label="Wilaya"
                        item-text="nom"
                        item-value="code"
                        :items="wilayas"
                        v-model="editedItem.wilaya"
                        :rules="[rules.required]"
                        @change="onChange"
                      ></v-select>
                    </v-col>
                    
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                    <v-text-field
                      outlined
                      label="password"
                      v-model="editedItem.password"
                    >
                      </v-text-field>
                    
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
                @click="updateAdmin"
              >
                Valider
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>
      <v-dialog
              v-model="dialogNew"
              max-width="700px"
            >   
          <v-card>
            <v-card-title>
              <span class="headline">Nouveau Admin</span>
            </v-card-title>
            <v-card-text>
              <v-form action="" ref="form" v-model="valid" lazy-validation>
                <v-container>
                  <v-row>
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
                      md="12"
                    >
                    <v-text-field
                      outlined
                      label="password"
                      v-model="form.password"
                    >
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>

            <v-card-actions>
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
      <Drawer/>
      <v-main>
        <v-container
        id="dashboard"
        fluid
        tag="section"
        class="mt-4"
        >
          <div class="text-right">
            <v-btn
            @click="generate();dialogNew=true;"
            color="secondary"
            >
              Nouveau Admin
            </v-btn>
          </div>
          <v-data-table
            :headers="headers"
            :items="filteredAdmins"
            class="elevation-1"
            item-key="name"
            
          >
        
             
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
              @keyup.enter="filteredAdmins()"

            ></v-text-field>
          </template>
          <template v-slot:[`item.wilaya`]="{ item }">
            
              {{ item.wilaya!= null  && typeof(item.wilaya)=='object' ? item.wilaya['nom']: item.wil['nom'] }}
            
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
          <template v-slot:[`item.details`]>
              <v-icon
                small
                color="primary"
                class="mr-2"
              
              >
                mdi-account-card-details
              </v-icon>
          </template>
          </v-data-table>
            
        </v-container>   
      </v-main>
    </layout>
    
    
    
</v-app>
</template>

<script>
import layout from '@/Shared/Default'
import axios from 'axios'
import Drawer from '../../Drawer'

export default {
    props: ['admins','wilayas'],
    components: {
        layout,
        Drawer
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    computed:{
      filteredAdmins(){
     var result=[];
     this.search=this.search.toLowerCase();
      
      return this.admins.filter(colis =>{
        if(colis.wilaya!=null && typeof(colis.wilaya)==='object')  {
            if(colis.wilaya['nom'].toLowerCase().match(this.search) !=null ) 
                {  return true; }
          }  
         return colis.nom.toLowerCase().match(this.search)!=null ||
              colis.prenom.toLowerCase().match(this.search)!=null ||
              colis.email.toLowerCase().match(this.search)!=null 
              
      });
    
      
      }
    
    },
    data () {
      return {
        selected: [],
        valid:true,
        rules: {
        required: (value) => !!value ||  "Champ pbligatoire.",
        counter: (value) =>
          value.length >= 8 || "longueur minimum 8 caractères",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
        form:{
        nom:'',
        prenom:'',
        telephone:'',
        wilaya:'',
        communes:[],
        email:'',
        password:''
        },
        search:'',
        dialogDelete: false,
        dialog:true,
        page: 1,
        dialogNew:false,
        dialog:false,
        editedIndex: -1,
        pageCount: 0,
        itemsPerPage: 4,
        editedItem: {
        id:'',
        nom: '',
        prenom: 0,
        email: 0,
        telephone: 0,
        password: 0,
        wilaya: '',
        communes: '',
      },
        headers: [
          {
            text: 'Nom',
            align: 'start',
            sortable: false,
            value: 'nom',
          },
          { text: 'Prenom', value: 'prenom' },
          
          { text: 'Email', value: 'email' },
          { text: 'Wilaya', value: 'wilaya' },
          
          { text: 'Actions', value: 'actions' },
          
        ],
      }
    },

    methods: {
      onChange(){
        axios.get('/communes/'+this.form.wilaya).then((response) => {
            this.communes=response.data.communes
          })  
        this.editedItem.communes=[];
      },
      generate () {
      //let charactersArray = this.characters.split(',');  
      let CharacterSet = '';
      let password = '';
      CharacterSet += 'abcdefghijklmnopqrstuvwxyz';
      for(let i=0; i < 8; i++) {
        password += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length));
      }
      this.form.password = password;
    },
       validate () {
        this.$refs.form.validate()
        if(this.$refs.form.validate()) return this.createAdmin();
      },
      createAdmin(){
          var _this = this;
          this.dialogNew=false;
          this.form.communes=JSON.stringify(this.form.communes);
          var ele = this.wilayas.filter(function(ele){
                      return  ele.code==_this.form.wilaya
                    });
        
          this.form.wil=ele[0];
          this.admins.push(this.form);
          this.$inertia.post(route('admin.nadmin'),this.form).then(()=> {
            this.$toast.open({
              message: "Admin ajouté avec succés ",
              type: "success",
              duration: 9000,
              dismissible: true,
              position:"top-right"
            });
      });
      this.clear();
      },
      clear(){
        this.form={password:'',email:''};
      },
      editItem (item) {
        this.editedIndex = this.admins.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.editedItem.id=item.id_admin;
        this.editedItem.password='';
        this.dialog = true
      },
      updateAdmin(){
        var _this = this ; 
        var ele = this.wilayas.filter(function(ele){
             return  ele.code==_this.editedItem.wilaya
          });
        this.editedItem.wil=ele[0];
        Object.assign(this.admins[this.editedIndex], this.editedItem)
        this.dialog=false;
        this.editedItem.communes=JSON.stringify(this.editedItem.communes)
        this.$inertia.post(route('admin.uadmin'),this.editedItem).then(()=> { 
          this.$toast.open({
            message: "Admin modifié avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
         });
      },
      deleteItem (item) {
        this.editedIndex = this.admins.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.editedItem.id=item.id_livreur;
        this.dialogDelete = true
      },
      close(){
        this.editedItem={},
        this.dialog=false
      },
      deleteItemConfirm () {
        this.admins.splice(this.editedIndex, 1)
        this.closeDelete()
        this.$inertia.post(route('admin.radmin'),this.editedItem).then(()=> {
            
          this.$toast.open({
            message: "Admin supprimé avec succés ",
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
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
    },

}
</script>








