<template>
<v-app>
 <v-app-bar
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="75"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      
    />

    <v-spacer />
    <div class="text--right">
        <v-tooltip v-if="$vuetify.theme.dark" bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="primary" small fab @click="darkMode">
                <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode On</span>
          </v-tooltip>

          <v-tooltip v-else bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="primary" small fab @click="darkMode">
                <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode Off</span>
          </v-tooltip>
    </div>
    <div class="mx-3" />

    
    
    <v-btn
      class="ml-2"
      min-width="0"
      text
      @click="logout"
    >
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>

  
    <!-- Provides the application the proper gutter -->
    
  <slot />
    
  <Footer />
</v-app>
</template>
<script>
import { VHover, VListItem } from 'vuetify/lib'
import Drawer from '../components/globals/Drawer'
import Footer from '../components/globals/Footer'
  // Utilities
import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'DashboardCoreAppBar',

    components: {
      Drawer,
      AppBarItem: {
        render (h) {
          return h(VHover, {
            scopedSlots: {
              default: ({ hover }) => {
                return h(VListItem, {
                  attrs: this.$attrs,
                  class: {
                    'black--text': !hover,
                    'white--text secondary elevation-12': hover,
                  },
                  props: {
                    activeClass: '',
                    dark: hover,
                    link: true,
                    ...this.$attrs,
                  },
                }, this.$slots.default)
              },
            },
          })
        },
      },
    },

    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
    mounted(){
    const theme = localStorage.getItem("dark\_theme");
    if (theme) {
        if (theme == "true") {
            this.$vuetify.theme.dark = true;
        } else {
            this.$vuetify.theme.dark = false;
        }
    }
    },

    data: () => ({
      notifications: [
        'Mike John Responded to your email',
        'You have 5 new tasks',
        'You\'re now friends with Andrew',
        'Another Notification',
        'Another one',
      ],
    }),

    computed: {
      ...mapState(['drawer']),
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
      logout(){
        this.$inertia.visit(route('logout'));
      },
      darkMode() {
      
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark\_theme", this.$vuetify.theme.dark.toString());
    }
    },
  }

</script>



