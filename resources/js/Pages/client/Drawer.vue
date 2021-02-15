<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template>
      
    </template>
      <div class="text-center">
       <img src="/images/logo-ziouane.png" alt="" class="" style="heigh:50px;width:180px" srcset="">
      </div>
   
    <v-list
      dense
      nav
    >
      
    </v-list>



    <v-list
      expand
      nav
    >
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <v-list
      expand
      nav
    >
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->

      <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
        
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <inertia-link :href="item.to" style="text-decoration: none; color: inherit;" >
            <v-list-item-content >
                <v-list-item-title style="" >{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </inertia-link>
        </v-list-item>
    </v-list>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>
   
  </v-navigation-drawer>
</template>

<style >

</style>
<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'DashboardCoreDrawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          title: 'Statistiques',
          icon: 'mdi-clipboard-outline',
          to: '/stats',
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'Mes Colis En cours',
          to: '/colis',
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'Ajouter Colis',
          to: '/ajoutercolis',
        },
        
        {
          title: 'Importer colis',
          icon: 'mdi-clipboard-outline',
          to: '/importercolis',
        },
        {
          title: 'Mes colis livrés',
          icon: 'mdi-clipboard-outline',
          to: '/colis/livres',
        },
        {
          title: 'Mes colis Annulés',
          icon: 'mdi-clipboard-outline',
          to: '/colis/annules',
        },
        
        {
          title: 'Mes Paiements',
          icon: 'mdi-clipboard-outline',
          to: '/colis/paiements',
        },
        {
          title: 'Mes Retours',
          icon: 'mdi-clipboard-outline',
          to: '/colis/retours',
        },
        {
          title: 'Mes Frais Livraison',
          icon: 'mdi-clipboard-outline',
          to: '/mesfrais',
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'Profile',
          to: '/monprofile',
        },
        
      ],
    }),

    computed: {
      ...mapState(['barColor', 'barImage']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
          title: this.$t('avatar'),
        }
      },
    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
      darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
