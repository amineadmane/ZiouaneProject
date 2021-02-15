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
            <v-card-title class="headline">Voulez vous vraiment supprimer ce centre?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="closeDelete">Annuler</v-btn>
              <v-btn color="primary" text @click="deleteItemConfirm">Valider</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
      </v-dialog>
      <v-dialog v-model="dialog" max-width="560px" persistent>
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
                      <v-select
                        outlined
                        label="Wilayas"
                        item-text="nom"
                        multiple
                        item-value="code"
                        :items="wilayas"
                        v-model="editedItem.wilayas"
                        :rules="[rules.required]"
                        
                      ></v-select>
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
                Cancel
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="updateCentre"
              >
                Save
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
              <span class="headline">Nouveau Centre</span>
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
                      <v-select
                        outlined
                        label="Wilaya"
                        item-text="nom"
                        item-value="code"
                        multiple
                        :items="wilayas"
                        v-model="form.wilaya"
                        :rules="[rules.required]"
                      ></v-select>
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
          <div class="text-right" v-if="$page.auth.role=='super-admin'">
            <v-btn
            @click="dialogNew=true;"
            color="secondary"
            >
              Nouveau Centre
            </v-btn>
          </div>
          <v-data-table
            :headers="$page.auth.role=='super-admin'?headers:headersO"
            :items="filteredCentres"
            class="elevation-1"
            item-key="nom"
            
          >
        
             
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Recherche"
              class="mx-4"
              @keyup.enter="filteredCentres()"
            ></v-text-field>
          </template>

          <template v-slot:[`item.wilaya`]="{ item }">
              <span v-for="wilaya in item.wilayas" :key="wilaya.id">
                    {{wilaya['nom']}}
              </span>
              
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
import vuepass from '../../../../components/globals/vuepass'

export default {
    props: ['centres','wilayas'],
    components: {
        layout,
        vuepass,
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
    filteredCentres(){
     var result=[];
     this.search=this.search.toLowerCase();
     
      return this.centres.filter(colis =>{
        var found=false;
        if(colis.wilayas!=null)  {
            colis.wilayas.forEach(element => {
               if(element.nom.toLowerCase().match(this.search)!=null)
                   return found=true;
            });
        }  
        
        if(found) return true;
         return colis.nom.toLowerCase().match(this.search)!=null 
          
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
        wilayas:'',
        
        },
        wil:['Alger','Blida'],
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
        wilayas: '',
        
      },
        headers: [
          {
            text: 'Nom',
            align: 'start',
            sortable: false,
            value: 'nom',
          },
          
          { text: 'Wilaya', value: 'wilaya' },
          
          { text: 'Actions', value: 'actions' },
          
        ],
        headersO: [
          {
            text: 'Nom',
            align: 'start',
            sortable: false,
            value: 'nom',
          },
          
          { text: 'Wilaya', value: 'wilaya' },
          
          
          
        ],
      }
    },

    methods: {
      close(){
        this.editedItem={},
        this.dialog=false
      },
       validate () {
        this.$refs.form.validate()
        if(this.$refs.form.validate()) return this.createCentre();
      },
      createCentre(){
          this.dialogNew=false;
          
          this.$inertia.post(route('admin.ncentre'),this.form).then(()=> {
            this.$toast.open({
              message: "Centre ajouté avec succés ",
              type: "success",
              duration: 9000,
              dismissible: true,
              position:"top-right"
            });
            this.clear()
      });
      
      },
      clear(){
        this.form.wilayas='';
        this.form.nom='';
      },
      editItem (item) {
        this.editedIndex = this.centres.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.editedItem.id=item.id_centre;
        this.dialog = true
      },
      updateCentre(){
        Object.assign(this.centres[this.editedIndex], this.editedItem)
        this.dialog=false;
        this.$inertia.post(route('admin.ucentre'),this.editedItem).then(()=> { 
          this.$toast.open({
            message: "Centre modifié avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
         });
      },
      deleteItem (item) {
        this.editedIndex = this.centres.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.editedItem.id=item.id_centre;
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.centres.splice(this.editedIndex, 1)
        this.closeDelete()
        this.$inertia.post(route('admin.rcentre'),this.editedItem).then(()=> {
          this.$toast.open({
            message: "Centre supprimé avec succés ",
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








