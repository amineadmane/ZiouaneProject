<template>
<v-app app>
    <layout>
      <Drawer/>
      <v-main>
        <v-container
        id="user-profile"
        fluid
        tag="section"
        class=""
      >
    <div class="text-left">
        <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
    >
      <v-icon >
        mdi-arrow-left
      </v-icon>
      
    </v-btn>
    </div>
    <v-row justify="center">
      <v-col
        cols="12"
        md="12"
      >   
     
      <v-form action="" ref="form">
        
        <base-material-card
          color=""
          class="px-5 py-3 "
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Informations sur le client
            </div>
          </template>
          
          <v-row dense class="mt-4"  >
          <v-col cols="12" md="6">
            <v-text-field
              v-model="nom"
              :rules="[rules.required]"
              outlined
              label="Nom"
              readonly
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="prenom"
              outlined
              :rules="[rules.required]"
              label="Prenom"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="numero"
              outlined
              :rules="[rules.required]"
              label="Numéro de téléphone"
              readonly
            ></v-text-field>
          </v-col>
          </v-row>
        </base-material-card>
        
        <base-material-card
          color="info"
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
                        v-model="adresse"
                        outlined
                        :rules="[rules.required]"
                        label="Adresse"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field  
                        v-model="wilaya"
                        outlined
                        :rules="[rules.required]"
                        label="Wilaya"
                        readonly
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="commune"
                        outlined
                        :rules="[rules.required]"
                        readonly
                        label="Commune"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        outlined
                        label="frais livraison"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="codePostal"
                        outlined
                        :rules="[rules.required]"
                        label="Code postal"
                        readonly
                      ></v-text-field>
                    </v-col>
          </v-row>
        </base-material-card>
        
        <base-material-card
          color="info"
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
                    v-model="produits"
                    outlined
                    :rules="[rules.required]"
                    label="Produit(s)"
                    readonly
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="codeCommande"
                    outlined
                    :rules="[rules.required]"
                    label="code commande"
                    readonly
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-checkbox
                    label="Livraison Gratuite"
                    color="red darken-3"
                    readonly
                  ></v-checkbox>
                </v-col>
          </v-row>
        </base-material-card>
      
      </v-form> 
      </v-col>

      
    </v-row>
  </v-container>
   
      </v-main>
    </layout>
    
    
    
</v-app>
</template>

<script>

import layout from '@/Shared/Default'
import Drawer from '../../Drawer'
export default {
    props: ['page'],
    components: {
        layout,
        Drawer
    },
    watch: {
      
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
      
    },

}
</script>








