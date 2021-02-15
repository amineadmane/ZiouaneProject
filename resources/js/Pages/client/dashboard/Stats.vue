
<template>
<v-app app>
    
    <layout>
    <Drawer />
      <v-main>
        <v-container
  id="dashboard"
  fluid
  tag="section"
>
  <v-row>
    
     <v-col
      cols="12"
      sm="6"
      lg="6"
    >
      <base-material-stats-card
        color="success"
        icon="mdi-trending-up"
        title="Total colis"
        :value="totalColis"
        
      />
    </v-col>

    <v-col
      cols="12"
      sm="6"
      lg="6"
    >
      <base-material-stats-card
        color="orange"
        icon="mdi-truck"
        title="Total colis livrés"
        :value="totalColisLiv"
        
        
      />
    </v-col>

    <v-col
      cols="12"
      lg="12"
    >
      <base-material-chart-card
        :data="emailsSubscriptionChart.data"
        :options="emailsSubscriptionChart.options"
        :responsive-options="emailsSubscriptionChart.responsiveOptions"
        color="#E91E63"
        hover-reveal
        type="Bar"
      >
        <template v-slot:reveal-actions>
          <v-tooltip bottom>
            
            
          </v-tooltip>

          <v-tooltip bottom>
            
          </v-tooltip>
        </template>

        <h4 class="card-title font-weight-light mt-2 ml-2">
          Colis Livrés par mois
        </h4>

        
       
      </base-material-chart-card>
    </v-col>

    
   
   
    
   
    
  </v-row>
        </v-container>
      </v-main>
    </layout>
    
    
    
</v-app>
</template>

<script>
import layout from '@/Shared/Default'
import Drawer from '../Drawer'
export default {
    props: ['totalColisLiv','totalColis','colis','colisLiv','colisWilaya','colisLivWilaya','wilayas'],
    components: {
        layout,
        Drawer
    },
    mounted(){
      var t = [0,0,0,0,0,0,0,0,0,0,0];
      const _this = this
      Object.keys(this.colisLiv).forEach(function(ele){
        t.splice(ele, 0, _this.colisLiv[ele].length); 
      })
      this.emailsSubscriptionChart.data.series.push(t);
      this.emailsSubscriptionChart.options.high=Math.max(...t)+1;
      this.ColisWIL.data.labels=this.wilayas;
      
      var x = new Array(48).fill(0);
      
      Object.keys(this.colisLivWilaya).forEach(function(ele){
        
        x.splice(ele, 0, _this.colisLivWilaya[ele].length); 
      })
      this.ColisWIL.data.series.push(x);
      this.ColisWIL.options.high=Math.max(...x)+1;


    },
    
    

    data () {
      return {
         dailySalesChart: {
          data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
              
            ],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
        ColisWIL: {
          data: {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
              
            ],
          },
          options: {
            axisX: {
              showGrid: false,
            },
            low: 0,
            high: 1,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0,
            },
          },
        },
        emailsSubscriptionChart: {
          data: {
            labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
            series: [
              
            ],
          },
          options: {
            axisX: {
              showGrid: false,
            },
            low: 0,
            high: 1,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0,
            },
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                },
              },
            }],
          ],
        },
        headers: [
          {
            sortable: false,
            text: 'ID',
            value: 'id',
          },
          {
            sortable: false,
            text: 'Name',
            value: 'name',
          },
          {
            sortable: false,
            text: 'Salary',
            value: 'salary',
            align: 'right',
          },
          {
            sortable: false,
            text: 'Country',
            value: 'country',
            align: 'right',
          },
          {
            sortable: false,
            text: 'City',
            value: 'city',
            align: 'right',
          },
        ],
        items: [
          {
            id: 1,
            name: 'Dakota Rice',
            country: 'Niger',
            city: 'Oud-Tunrhout',
            salary: '$35,738',
          },
          {
            id: 2,
            name: 'Minerva Hooper',
            country: 'Curaçao',
            city: 'Sinaai-Waas',
            salary: '$23,738',
          },
          {
            id: 3,
            name: 'Sage Rodriguez',
            country: 'Netherlands',
            city: 'Overland Park',
            salary: '$56,142',
          },
          {
            id: 4,
            name: 'Philip Chanley',
            country: 'Korea, South',
            city: 'Gloucester',
            salary: '$38,735',
          },
          {
            id: 5,
            name: 'Doris Greene',
            country: 'Malawi',
            city: 'Feldkirchen in Kārnten',
            salary: '$63,542',
          },
        ],
        tabs: 0,
        
        list: {
          0: false,
          1: false,
          2: false,
        },
      }

    },
  
    methods: {
      
    },

}
</script>








