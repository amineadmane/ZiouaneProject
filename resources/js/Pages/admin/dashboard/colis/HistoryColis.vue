<template>
<v-app app>
    <layout>
      <v-main>
        <v-container>
          <v-timeline>
              <v-timeline-item
                  v-for="(log, i) in logs"
                  :key="i"
                  small
                >
              
                <template v-slot:opposite>
                  <span
                    :class="`headline font-weight-bold`"
                    
                  >{{log.created_at}}</span>
                </template>
                <div class="py-4">
                  <h4 :class="`headline font-weight-light mb-4`">
                    {{log.user}}
                    <br v-if="log.livreur!=null">
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
export default {
    props: ['logs'],
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
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
    },

}
</script>








