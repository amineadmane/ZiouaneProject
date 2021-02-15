<template>
<v-app app>
    
    <layout>
      <Drawer />
      <v-main>
        <v-container
        id="dashboard"
        fluid
        tag="section"
        class="mt-4"
        >
          <v-data-table
            :headers="headers"
            :items="filteredColis"
            class="elevation-1"
            :page.sync="page"
            @page-count="pageCount = $event"
            item-key="id_colis"
            
          >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
              @keyup.enter="filteredColis()"
            ></v-text-field>
          </template>
          
          <template v-slot:[`item.adresse`]="{ item }">
           {{item.adresse}} , {{item.commune['nom']}},  {{item.wilaya['nom']}} 
          </template>
          
          <template v-slot:[`item.frais`]="{ item }">
            <p v-if="item.livraison==0">
              {{item.fraisLivraison}} DZD
            </p>
              <v-chip v-else
                color="primary"
              >
              Livraison Gratuite
              </v-chip>
          </template>
          
          <template v-slot:[`item.total`]="{ item }">
            {{item.livraison==0?parseFloat(item.fraisLivraison)+parseFloat(item.prix):item.prix}}
           DZD
          </template>

          <template v-slot:[`item.prix`]="{ item }">
            {{item.prix}} DZD
           
          </template>

         
          <template v-slot:[`item.ref`]="{ item }">
              <v-chip
                color="primary"
              >
                {{item.ref}}
              </v-chip>
          </template>
        
          
          <template v-slot:[`item.etat1`]="{ item }">
              <v-chip
                color="primary"
              >
                {{item.etat2!=null? item.etat1+" ( "+item.etat2+" )": item.etat1 }}
              </v-chip>
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
    props: ['colis'],
    components: {
        layout,
        Drawer
    },
    mounted(){


    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    data () {
      return {
        dialogDelete: false,
        singleSelect: true,
        page: 1,
        etat:'',
        search:'',
        items:['en preparation','pret','pret a ramasser'],
        selected:[],
        itemTODelete:'',
        pageCount: 0,
        itemsPerPage: 4,
        headers: [
          {
            text: 'client',
            value: 'nomclient',
          },
          { text: 'Reference', value: 'ref' },
          
          { text: 'Etat', value: 'etat1' },
          { text: 'Telephone', value: 'telephone' },
          { text: 'Adresse', value: 'adresse' },
          { text: 'CodePostal', value: 'codePostal' },
          { text: 'Produits', value: 'produits' },
          
          { text: 'Prix', value: 'prix' },
          { text: 'Frais Livraison', value: 'frais' },
          { text: 'Total', value: 'total' },
          
          { text: 'Remarque', value: 'remarque' },
          

          
        ],
      }
    },

    computed:{

    filteredColis(){
     
     this.search=this.search.toLowerCase();
      return  this.colis.filter(colis =>{
        if(colis.wilaya!=null)  
            if(colis.wilaya['nom'].toLowerCase().match(this.search) !=null ) 
                {    
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
      
      
      }
    

    },

    methods: {
      confirmDelete(item){
        var form={};
        form.id=item.id_colis;
        this.$inertia.post(route('colis.clientdestory'),form).then(()=> {
          this.$toast.open({
            message: "Colis supprimé avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
      });
      },

     
      printColis(item){
          this.$inertia.visit('/colis/'+item.id_colis+'/invoice')
      },
      buildTableBody(data, columns) {
        var body = [];

        body.push(columns);

        data.forEach(function(row) {
            var dataRow = [];
            
            columns.forEach(function(column) {
                
                
                if(column=="prix"){
                  if(row['livraison']==0){
                    var x = parseInt(row['prix'])+parseInt(row['fraisLivraison'])
                    row['prix']=x;
                   
                    dataRow.push(row['prix']);
                  }
                  else 
                  dataRow.push(parseInt(row['prix']))

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

      editItem(item){
         this.$inertia.visit('/colis/'+item.id_colis+'/modifier')
      },
      deleteItem (item) {
        this.itemTODelete=item.id_colis;
        this.dialogDelete = true
      },
      deleteItemConfirm(){
        var form ={};
        form.id=this.itemTODelete;
        this.$inertia.post(route('colis.clientdestroy'),form).then(()=> {
          this.dialogDelete = true;
          this.itemTODelete="";
          this.$toast.open({
            message: "Colis supprimé avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
        });

      },
      changerEtat(){
        var canChange = true;
        if(this.selected.length==0) 
          return  this.$toast.open({
            message: "Aucun colis selectionné ",
            type: "error",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
        if(this.etat=="pret a ramasser"){
            var i = 0;
              this.colis.forEach(element => {
                 if(element.etat1=="pret a ramasser") i++;
            });
            if(i+this.selected.length <10 )
                return  this.$toast.open({
                  message: "la demande de ramassage necessite avoir plus de 10 colis",
                  type: "error",
                  duration: 9000,
                  dismissible: true,
                  position:"top-right"
                });

        } 
        var form = {};
        this.selected.forEach(element => {
          if(element.etat1!="en preparation" && element.etat1!="pret" ) canChange=false;
          else element.etat1=this.etat; 
          this.colis[this.colis.indexOf(element)]=element
          
        });
        if(!canChange)
          return  this.$toast.open({
              message: "certains colis ne peuvent pas etre modifié ",
              type: "error",
              duration: 9000,
              dismissible: true,
              position:"top-right"
            });
        form.selected=this.selected
        form.etat=this.etat
        this.$inertia.post(route('client.changerEtat'),form).then(()=> {
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
      bordereaux(){
      if(this.selected.length==0) 
          this.$toast.open({
            message: "Aucun colis selectionné ",
            type: "error",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
      else this.$inertia.post(route('colis.clientInvoices'),this.selected)
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








