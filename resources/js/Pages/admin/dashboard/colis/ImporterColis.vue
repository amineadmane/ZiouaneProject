<template>
<v-app app>
     <v-dialog v-model="dialogDelete" max-width="560px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
      </v-dialog>
    <layout>
      <v-main>
        <v-container
        id="dashboard"
        fluid
        tag="section"
        class="mt-4"
        >
        <div>
          <base-material-card
          color=""
          class="px-5 py-3 "
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Veuillez suivre ce modele de fichier excel 
              
              <v-btn
                :loading="loading5"
                :disabled="loading5"
                color="blue-grey"
                class="ma-2 white--text"
                fab
                @click="loader = 'loading5'"
              >
                <v-icon dark>
                  mdi-cloud-download
                </v-icon>
              </v-btn>
            </div>  
            <div class="text-center">
              <v-btn
                class="ma-2 text-center" 
                color="secondary"
              >
                Importer Fichier Excel
              </v-btn>
        
            </div>
            
          </template>
          </base-material-card>
        </div>
        <div class="text-right">
          <v-btn
            class="ma-2"
            color="secondary"
            @click="saveColis"
          >
            Valider
          </v-btn>
        </div>
        
        <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
          :page.sync="page"
          :items-per-page="4"
          @page-count="pageCount = $event"
          :search="search"
          item-key="name"
          :custom-filter="filterOnlyCapsText"
        >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
          ></v-text-field>
        </template>
        <template v-slot:[`item.calories`]="{ item }">
          <v-chip
            :color="getColor(item.calories)"
            dark
          >
            {{ item.calories }}
          </v-chip>
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
<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
<script>
import layout from '@/Shared/Default'
export default {
    props: ['page'],
    components: {
        layout,
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    
    },

    data () {
      return {
        loader: null,
        loading5: false,
        dialogDelete: false,
        page: 1,
        pageCount: 0,
        itemsPerPage: 4,
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
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
    },

}
</script>








