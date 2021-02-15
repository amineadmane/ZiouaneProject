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
          width="40%"
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
              v-model="colis.nomclient"
              :rules="[rules.required]"
              outlined
              label="Nom"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="colis.telephone"
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
                        v-model="colis.adresse"
                        outlined
                        :rules="[rules.required]"
                        label="Adresse"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-select  
                        v-model="colis.wilaya"
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
                    <v-col cols="12" md="3">
                      <v-select
                        v-model="colis.commune"
                        outlined
                        :items="communes"
                        item-text="nom"
                        item-value="id"
                        :rules="[rules.required]"
                        label="Commune"
                      ></v-select>
                    </v-col>
                    
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model="colis.codePostal"
                        outlined
                        :rules="[rules.required]"
                        label="Code postal"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        outlined
                        v-model="colis.fraisLivraison"
                        label="frais livraison"
                        disabled
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
                    v-model="colis.produits"
                    outlined
                    :rules="[rules.required]"
                    label="Produit(s)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="colis.poids"
                    outlined
                    :rules="[rules.required]"
                    label="Poids (KG)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="colis.codecolis"
                    outlined
                    :rules="[rules.required]"
                    label="code commande"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="colis.prix"
                    outlined
                    :rules="[rules.required]"
                    label="Prix (DZD)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="colis.remarque"
                    outlined
                    label="Remarque"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-checkbox
                    label="Livraison Gratuite"
                    color="red darken-3"
                  ></v-checkbox>
                </v-col>
          </v-row>
        </base-material-card>
      
      </v-form>
      <div class="text-right">
        <v-btn
          color="primary"
          @click="validate"
        >
          valider
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
    props: ['colis','wilayas','communes'],
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
    mounted(){
        var _this = this;
        this.colis.wilaya=this.colis.wilaya['id'];
        this.wilayas.map(function(element){
          return element['wT']=element.wilaya_t['nom'];
        });
      },
    data () {
      return {
        nom:'',
        prenom:'',
        numero:'',
        adresse:'',
        wilaya:'',
        commune:'',
        codePostal:'',
        codeCommande:'',
        produits:'',
        valid: true,
        lazy: false,
        e1:1,
        rules: {
        required: (value) => !!value ||  "Champ pbligatoire.",
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
      validate () {
        this.$refs.form.validate()
        if(this.$refs.form.validate()) this.update();
      },
      update(){
        this.$inertia.post(route('colis.clientupdate'),this.colis).then(()=> {
          this.$toast.open({
            message: "Colis modifié avec succés ",
            type: "success",
            duration: 9000,
            dismissible: true,
            position:"top-right"
          });
        });
      },
      onChange(){
        axios.get('/communes/'+this.colis.wilaya).then((response) => {
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








