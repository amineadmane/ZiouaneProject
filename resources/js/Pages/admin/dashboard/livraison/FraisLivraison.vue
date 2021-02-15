<template>
<v-app app>
     <v-dialog v-model="dialogDelete" max-width="560px">
          <v-card>
            <v-card-title class="headline">voulez vous vraiment supprimer ?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialogDelete=false">Annuler</v-btn>
              <v-btn color="primary" text @click="confirmDelete">Valider</v-btn>
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
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field  
                        v-model="editedItem.wF"
                        outlined
                        :rules="[rules.required]"
                        
                        disabled
                        item-text="nom"
                      >
                    </v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field  
                        v-model="editedItem.wT"
                        outlined
                        :rules="[rules.required]"
                        label="Wilaya"
                        disabled
                        item-text="nom"
                        item-value="code"
                      >
                    </v-text-field>
                  </v-col>


                  <v-col
                    cols="12"
                    sm="6"
                    md="12"
                  >
                   <v-text-field
                      outlined
                      type="number"
                      label="Prix"
                      :rules="[rules.required]"
                      v-model="editedItem.prix"
                    ></v-text-field>
                    
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="12"
                  >
                   <v-text-field
                      outlined
                      type="number"
                      label="Stop Agence"
                      :rules="[rules.required]"
                      v-model="editedItem.agence"
                    ></v-text-field>
                    
                  </v-col>
                </v-row>
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
                @click="saveEdited"
              >
                Valider
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>
      <v-dialog
          v-model="dialogNew"
          max-width="500px"
          persistent
        >         
          <v-card>
            <v-card-title
            >
              <span class="headline">Nouvelle wilaya</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-form ref="form">
                  <v-row>
                  <v-col 
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-select  
                        v-model="form.wilaya"
                        outlined
                        :items="wilayasF"
                        item-text="nom"
                        item-value="code"
                        :rules="[rules.required]"
                        label="De"
                        v-on:change="change()"
                        
                      >
                    </v-select>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-select  
                        v-model="form.selected"
                        outlined
                        :items="To"
                        item-text="nom"
                        :rules="[rules.required]"
                        label="A"
                        item-value="code"
                        multiple
                      >
                    </v-select>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      outlined
                      type="number"
                      label="Prix"
                      :rules="[rules.required]"
                      v-model="form.prix"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      outlined
                      type="number"
                      label="Stop Agence"
                      :rules="[rules.required]"
                      v-model="form.agence"
                    ></v-text-field>
                  </v-col>
                  
                </v-row>
                </v-form>
                
              </v-container>
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
            <v-btn  v-if="$page.auth.role=='super-admin'|| $page.auth.role=='agent-centre'"
            @click="dialogNew=true;"
            color="secondary"
            >
              Nouvelle wilaya
            </v-btn>
          </div>
          <v-data-table
            :headers="$page.auth.role=='super-admin' || $page.auth.role=='agent-centre'? headersSuperAdmin  : headersO"
            :items="filteredFrais"
            class="elevation-1"
            item-key="nom"
            
          >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
              @keyup.enter="filteredFrais()"
            ></v-text-field>
          </template>
          <template v-slot:[`item.from`]="{ item }">
             {{item.wilaya_f['nom']}}
          </template>
          <template v-slot:[`item.to`]="{ item }">
             {{item.wilaya_t['nom']}}
          </template>
          <template v-slot:[`item.frais`]="{ item }">
             {{item.prix}}
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
          </v-data-table>
            
        </v-container>   
      </v-main>
    </layout>
    
    
    
</v-app>
</template>

<script>
import layout from '@/Shared/Default'
import Drawer from '../../Drawer'
export default {
    props: ['frais','wilayasF','wilayasT'],
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
       filteredFrais(){
         var _this = this;
        this.search=this.search.toLowerCase();
        return this.frais.filter(colis =>{  
            if(_this.$page.auth.role=='super-admin' || _this.$page.auth.role=='agent-centre' )
            return  colis.wilaya_f['nom'].toString().toLowerCase().match(this.search)!=null;
            
            return  colis.wilaya_t['nom'].toString().toLowerCase().match(this.search)!=null;
            
          
        });
                

       }
    },
    data() {
      return {
        search:'',
        selected: [],
        dialogNew:false,
        dialog:false,
        dialogDelete: false,
        rules: {
        required: (value) => !!value ||  "Champ pbligatoire.",
        counter: (value) =>
          value.length >= 8 || "longueur minimum 8 caractères",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
        page: 1,
        form:{
          prix:'',
          selected:[],
          agence:''
        },
        dialogNew:false,
        dialog:false,
        editedIndex: -1,
        pageCount: 0,
        To:'',
        itemsPerPage: 4,
        editedItem: {
        wilaya: '',
        prix: 0,
        agence:0
        
      },
        headersSuperAdmin: [
          {
            text: 'Wilaya d\'origine',
            align: 'start',
            sortable: false,
            value: 'from',
          },
          {
            text: 'Destination',
            align: 'start',
            sortable: false,
            value: 'to',
          },
          { text: 'Frais Livraison', value: 'frais' },
          { text: 'Stop Agence', value: 'agence' },
          { text: 'Actions', value: 'actions' },
          
        ],
        headersO: [
          {
            text: 'Wilaya d\'origine',
            align: 'start',
            sortable: false,
            value: 'from',
          },
          {
            text: 'Destination',
            align: 'start',
            sortable: false,
            value: 'to',
          },
          { text: 'Frais Livraison', value: 'frais', sortable: true, },
          { text: 'Stop Agence', value: 'agence', sortable: true, },
          
        ],

        
      }
    },

    methods: {
      validate () {
        this.$refs.form.validate()
        if(this.$refs.form.validate()) return this.save();
      },
      editItem (item) {
        this.editedIndex = this.frais.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.editedItem.wF = this.editedItem.wilaya_f['nom']
        this.editedItem.wT = this.editedItem.wilaya_t['nom']
        this.dialog = true
      },
      change(){
        
        var _this = this ;
        var x = this.frais.filter(Element=>{
          return Element.from == _this.form.wilaya
        });
        
        var e = this.wilayasT.filter(Element=>{
          var t =  x.filter(element=>{
            return element.wilaya_t['code']==Element.code
          });
          if(t.length>0) return false;
          return true;
        })

        return this.To=e;
      },
      save(){ 
        this.$inertia.post(route('fraisLivraison.ajouter'),this.form)
          this.dialogNew=false;
          //this.form.selected=[];
          //this.form.prix=0;
          this.$toast.open({
            message: "Livraison ajouté avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
          this.ref()
         

      },
      ref(){
        this.form={};
      },
      saveEdited(){
        this.dialog=false;
        this.frais[this.editedIndex]=this.editedItem;
        this.$inertia.post(route('fraisLivraison.edit'),this.editedItem)
        
          this.$toast.open({
            message: "Livraison modifié avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
         
    });

      },
      deleteItem (item) {
        this.dialogDelete = true
         this.editedIndex = this.frais.indexOf(item)
         this.editedItem = Object.assign({}, item)
      },

      confirmDelete(){
        this.dialogDelete=false;
        this.$inertia.post(route('fraisLivraison.destroy'),this.editedItem).then(()=> {
          this.$toast.open({
            message: "Livraison supprimé avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
    });

      },
      close(){
        this.editedItem={},
        this.dialog=false
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








