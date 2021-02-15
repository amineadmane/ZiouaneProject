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
      <layout>
      <Drawer/>
      <v-main>
          <v-container column>
              
              <base-material-card
                color="primary"
                class="px-5 py-3 "
                width="40%"
              >
            <template v-slot:heading>
              <div class="display-2 font-weight-light text-center">
                Profile
              </div>
            </template>
              <v-container>
                <v-row>
                  <v-card-text>
                        <v-text-field
                          v-model="form.nom"
                          label="Nom"></v-text-field>
                        <v-text-field
                          v-model="form.prenom"
                          label="Prenom"></v-text-field>
                        <v-text-field
                          v-model="form.email"
                          label="Email"></v-text-field>
                        <v-text-field
                          v-model="form.password"
                          label="changez votre mot de passe"></v-text-field>
                  
                  </v-card-text>
                  <v-card-actions>
                      <div class="" style="float:right">
                        <v-btn color="primary"  :loading="loading" @click.native="update">  
                          Valider
                        </v-btn>
                      </div>
                      
                  </v-card-actions>
                </v-row>
              </v-container>
           
              </base-material-card>
        
              
          </v-container>
          
      </v-main>
    
      </layout>
    </v-app>
</template>
<script>
import layout from '@/Shared/Default'
import Drawer from '../Drawer'

    export default {
        components:{
            layout,
            Drawer
        },
        data () {
            return {
                loading: false,
                form: {
                    nom: this.$page.auth.nom,
                    prenom: this.$page.auth.prenom,
                    email: this.$page.auth.email,
                    password:'',
                    id:this.$page.auth.id
                },
                
            }
        },
        methods: {
            openAvatarPicker () {
                this.showAvatarPicker = true
            },
            selectAvatar (avatar) {
                this.form.avatar = avatar
            },
            update(){
                this.$inertia.post(route('admin.update'),this.form).then(()=> {
                    this.$toast.open({
                        message: "Informations modifié avec succés ",
                        type: "success",
                        duration: 9000,
                        dismissible: true,
                        position:"top-right"
                    });
                });

            }
        }
    }
</script>
