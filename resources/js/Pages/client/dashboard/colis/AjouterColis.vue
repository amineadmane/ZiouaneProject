<template>
<v-app app>
    <layout>
      <Drawer />
      <v-main>
        <v-container
        id="user-profile"
        fluid
        tag="section"
        class=""
      >
    <v-row justify="center">
      <v-col
        cols="12"
        md="12"
      >   
       
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
              v-model="form.nomclient"
              :rules="[rules.required]"
              outlined
              label="Nom "
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="form.telephone"
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
                    
                <v-col cols="12" md="6">
                  <v-checkbox
                    v-model="form.livraison"
                    label="Livraison Gratuite"
                    color="red darken-3"
                  ></v-checkbox>
                </v-col>
               
                <v-radio-group 
                        v-model="form.typeLivraison"
                        v-on:change="changeFrais()"
                      >
                        <v-radio
                          label="Stop Agence"
                          value="agence"
                        ></v-radio>
                        <v-radio
                          label="Livraison a domicile"
                          value="domicile"
                        ></v-radio>
                    </v-radio-group>

                    <v-col cols="12">
                      <v-text-field
                        v-model="form.adresse"
                        outlined
                        :rules="[rules.required]"
                        :disabled="form.typeLivraison=='agence'"
                        label="Adresse"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-select  
                        v-model="form.wilaya"
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
                        v-model="form.commune"
                        outlined
                        :items="communes"
                        item-text="nom"
                        item-value="id"
                        :rules="[rules.required]"
                        label="Commune"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        outlined
                        label="Frais livraison"
                        disabled
                        v-model="form.fraisLivraison"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="form.codePostal"
                        outlined
                        :rules="[rules.required]"
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
                    v-model="form.produits"
                    outlined
                    :rules="[rules.required]"
                    label="Produit(s)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.poids"
                    outlined
                    @keyup="updateFrais"
                    :rules="[rules.required]"
                    type="number"
                    label="Poids (KG)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="poidsFrais"
                    outlined
                    type="number"
                    label="Rajouter frais Livraison"
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.codecolis"
                    outlined
                    :rules="[rules.required]"
                    label="code commande"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.prix"
                    outlined
                    type="number"
                    :rules="[rules.required]"
                    label="Prix (DZD)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.remarque"
                    outlined
                    label="Remarque"
                  ></v-text-field>
                </v-col>
                
          </v-row>
        </base-material-card>
      
        
      </v-form>
      <div class="d-flex justify-end">
       <v-btn
          color="primary"
          @click="validate"
        >
          Sauvegarder
      </v-btn>
       
      </div>   
    </v-col>

      
    </v-row>
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
    props: ['page','wilayas','communes'],
    components: {
        layout,
        Drawer
    },

   mounted(){
        
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
    },

    data () {
      return {
        fraisLivraison:0,
        poidsFrais:0,
        form:{
          nomclient:'',
          codecolis:'',
          telephone:'',
          adresse:'',
          wilaya:'',
          prix:'',
          typeLivraison:'domicile',
          remarque:'',
          commune:'',
          codePostal:'',
          produits:'',
          poids:'',
          livraison:'',
          fraisLivraison:0,
        },
        communes:[],
        valid: true,
        lazy: false,
        e1:1,
        rules: {
        required: (value) => !!value ||  "Champ Obligatoire.",
        counter: (value) =>
          value.length >= 8 || "longueur minimum 8 caractères",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },

      }
    },

    methods: {
      livGratos(){                 
      },
      changeFrais(){
         //noveau agence
         
         
         if(this.form.wilaya!='' && this.form.fraisLivraison!=0){
             // ancien  = domicile
             this.form.fraisLivraison = 0;
             this.form.poidsFrais=0;
            if(this.form.typeLivraison=='agence'){
                this.form.adresse="bureau " + this.wilaya.wT;
                this.form.fraisLivraison = parseFloat(this.form.fraisLivraison) + parseFloat(this.wilaya.agence)
                this.updateFrais();
               return  this.form.fraisLivraison = parseFloat(this.form.fraisLivraison)+parseFloat(this.poidsFrais);
                
            }
            else{
                this.form.fraisLivraison = parseFloat(this.form.fraisLivraison) +parseFloat(this.wilaya.prix)
                if(this.$page.auth.TypeRemise=="pourcentage")
                this.form.fraisLivraison = parseFloat(parseFloat(this.form.fraisLivraison) - parseFloat((parseFloat(this.$page.auth.remise)*parseFloat(this.form.fraisLivraison))/100))
                if(this.$page.auth.TypeRemise=="dzd")
                this.form.fraisLivraison = parseFloat(this.form.fraisLivraison) - parseFloat(this.$page.auth.remise)
                this.updateFrais();
                return this.form.fraisLivraison = parseFloat(this.form.fraisLivraison)+parseFloat(this.poidsFrais);
            }
         }
      },
      updateFrais(){
         
        this.form.fraisLivraison = this.form.fraisLivraison - this.poidsFrais;
        if(this.form.poids<=5) return this.poidsFrais=0 ; 
        if(this.$page.auth.type=='detail')  {
          if(parseFloat(this.form.poids) > 5 && parseFloat(this.form.poids) <= 15 )
              return [this.poidsFrais = 300 , this.form.fraisLivraison=parseFloat(this.form.fraisLivraison)+300]
          else 
            if(parseFloat(this.form.poids) > 15 && parseFloat(this.form.poids) <= 20 )
              return [ this.poidsFrais = 500, this.form.fraisLivraison=parseFloat(this.form.fraisLivraison)+500]
            else 
              if(parseFloat(this.form.poids)>20)
                return [ this.poidsFrais= parseFloat(this.form.fraisLivraison), this.form.fraisLivraison = 2*parseFloat(this.form.fraisLivraison) ]
        }else 
          if(parseFloat(this.form.poids)>5) {
              var x = parseFloat(this.form.poids)-5;
              return [ this.poidsFrais = 50 * x , this.form.fraisLivraison = parseFloat(this.form.fraisLivraison) + 50 * x ]
          } 
               
            
      },
      
      validate () {
        this.$refs.form.validate()
        if(this.$refs.form.validate()) return this.createColis();
      },
      
      createColis(){
        if(this.form.livraison==true) this.form.livraison=1;
        else this.form.livraison=0;
        this.$inertia.post(route('colis.store'),this.form).then(()=> {
          this.$toast.open({
            message: "Colis ajouté avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
    });
      },
      onChange(){
        var _this = this ;
        var x=this.wilayas.filter(function(element){
            return element.to == _this.form.wilaya;
          });
          this.wilaya = x[0];

        if(this.$page.auth.TypeRemise=='prix unique')
             this.form.fraisLivraison = this.$page.auth.remise;
        else {      
          this.form.fraisLivraison=0;
           
          var element = this.wilayas.find(Element=>Element.id==this.form.wilaya);

          
          if(this.form.typeLivraison=='domicile'){
          this.form.fraisLivraison= parseFloat(this.form.fraisLivraison)+ parseFloat(x[0].prix)
          
          if(this.$page.auth.TypeRemise=="pourcentage")
          this.form.fraisLivraison = parseFloat(parseFloat(this.form.fraisLivraison) - parseFloat((parseFloat(this.$page.auth.remise)*parseFloat(this.form.fraisLivraison))/100))
          if(this.$page.auth.TypeRemise=="dzd")
          this.form.fraisLivraison = parseFloat(this.form.fraisLivraison) - parseFloat(this.$page.auth.remise)
          this.form.fraisLivraison = parseFloat(this.form.fraisLivraison)+parseFloat(this.poidsFrais);
          }
          else {
          this.form.fraisLivraison= parseFloat(this.form.fraisLivraison)+ parseFloat(x[0].agence);
          this.form.adresse = "bureau "+x[0].wT;
          this.form.fraisLivraison = parseFloat(this.form.fraisLivraison)+parseFloat(this.poidsFrais);

          }
        }
        axios.get('/communes/'+this.form.wilaya).then((response) => {
            this.communes=response.data.communes
          })

      },
      validate_form2() {
        this.$refs.form2.validate()
        if(this.$refs.form2.validate()) this.e1=3;
      },
      validate_form3() {
        this.$refs.form3.validate()
        if(this.$refs.form3.validate()) this.e1=3;
      },
    },

}
</script>








