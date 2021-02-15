<template>
<v-app app>
    
    <layout>
      <Drawer/>
      <v-main>
        <v-container
        id="dashboard"
        fluid
        tag="section"
        class="mt-4"
        >
          
          <v-data-table
            :headers="headersO"
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

          
          </v-data-table>
            
        </v-container>   
      </v-main>
    </layout>
    
    
    
</v-app>
</template>

<script>
import layout from '@/Shared/Default'
import Drawer from './Drawer'
export default {
    props: ['frais','wilayasF','wilayasT'],
    components: {
        layout,
        Drawer
    },
    mounted(){
      var _this = this;
    if(this.$page.auth.TypeRemise=='prix unique')
          this.frais.forEach(element => {
            return  [  element.prix = _this.$page.auth.remise ];
          });

    if(this.$page.auth.TypeRemise=='dzd')
          this.frais.forEach(element => {
             if(element.agence==null) element.agence=0; 
             return [ element.prix = parseFloat(element.prix)-parseFloat(_this.$page.auth.remise)]
          });

    if(this.$page.auth.TypeRemise=='pourcentage')
          this.frais.forEach(element => {
            if(element.agence==null) element.agence=0;
             return [ element.prix = parseFloat(element.prix)-parseFloat((parseFloat(this.$page.auth.remise)*parseFloat(element.prix))/100) , 
                           ]
          });


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
        this.search=this.search.toLowerCase();
        return this.frais.filter(colis =>{  
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








