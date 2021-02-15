<template>
    
  <v-app
  style="background: url( '/images/131.jpg') no-repeat center center;"
  >
  <div v-if="$page.errors" class="text-center" style="width:fit-content;align-self:center;margin-top:15px" >
      <div v-for="(v, k) in $page.errors" :key="k">
          <p v-for="error in v" :key="error" class="text-sm">
            <v-alert type="error" dismissible>
                {{error}}
          </v-alert>
          </p>
      </div>
    </div>
  <v-main>
   <v-container 
   >
        <v-row class="d-flex justify-center mt-10">
            <v-col
                cols="12"
                md="4"
                >
                <base-material-card
                    color="primary"
                    class="px-5 py-3 "
                    >
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light text-center">
                            Espace Client Ziouane Express
                        </div>
                    </template>
                    
                    <v-row dense class="mt-4"  >
                        <v-col cols="12" md="12">
                            <v-text-field
                                v-model="form.email"
                                outlined
                                label="Email"
                                
                            >
                            </v-text-field>
                        </v-col>
                        
                        <v-col cols="12">
                            <v-text-field
                            v-model="form.password"
                            outlined
                            :type="show ? 'text' : 'password'"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show = !show"
                            
                            label="Mot de passe"
                            
                            ></v-text-field>
                        </v-col>
                        
                    </v-row>
                    <v-row class="text-right">
                        <v-col>
                            <v-btn
                            color="primary"
                            @click="login"
                            >
                                Se Connecter
                            </v-btn>
                        </v-col>
                    </v-row>
                    
                </base-material-card>
            </v-col>
            
        </v-row>
        
    </v-container>
  </v-main>


        

  </v-app>
</template>

<script>
export default {
    data(){
      return {
         form:{
           password:''  ,
           email:''
         },
         show:false,

      }

    },
    methods:{
       login(){
           this.$inertia.post(route('client.login'),this.form)
       }
    }
}
</script>