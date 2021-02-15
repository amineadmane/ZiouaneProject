<template>
<v-app app>
    <layout>

    <v-app-bar
      id="app-bar"
      app
      color="transparent"
      flat
      height="75"
    >
      <v-btn
        class="mr-3"
        elevation="1"
        fab
        @click="goBack"
        small
        
      >
        
        <v-icon >
          mdi-arrow-left
        </v-icon>
        
      </v-btn>

      <v-toolbar-title
        class="hidden-sm-and-down font-weight-light"
        
      />

      

      <v-spacer />

      
      <div class="mx-3" />

      
    
      <v-btn
        class="ml-2"
        min-width="0"
        text
        
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
        <v-container>
          <v-timeline>
              <v-timeline-item
                  v-for="(log, i) in logs"
                  :key="i"
                  small
                >
              
                <template >
                  <span
                    :class="`headline font-weight-bold`"
                    
                  >{{log.created_at}}</span>
                </template>
                <div class="py-4">
                  <h4 :class="`headline font-weight-light mb-4`">
                   {{log.user}}
                    <br>
                 {{log.livreur}} 
                <br>
                {{log.etat1}} ( {{log.etat2}} )
                   
                  </h4>
                  <div>


                  </div>
                </div>
              </v-timeline-item>
          </v-timeline>
        </v-container>
      </v-main>
    
      
    </layout>
</v-app>


</template>

<script>
import layout from '@/Shared/Default'
import Drawer from '../../Drawer'
export default {
    props: ['logs'],
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

    data () {
      return {
        dialogDelete: false,
        page: 1,
        pageCount: 0,
        itemsPerPage: 4,
        e1: 1,
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
          { text: 'Action', value: 'actions' },
        ],

        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },

    methods: {
      deleteItem (item) {
        this.dialogDelete = true
      },
      closeDelete () {
        this.dialogDelete = false
      },
      goBack(){
        this.$inertia.visit(route('client.colis'));
      },
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
    },

}
</script>








