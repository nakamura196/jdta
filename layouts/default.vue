<template>
  <v-app>
    <div>
      <v-navigation-drawer v-model="drawer" app :temporary="true">
        <v-list>
          <v-list-item link :to="localePath({ name: 'index' })" exact>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            :to="
              localePath({
                name: 'entity',
                params: { entity: 'agent' },
              })
            "
          >
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t('agential') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            :to="
              localePath({
                name: 'count',
              })
            "
          >
            <v-list-item-action>
              <v-icon>mdi-chart-bar</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{
                $t('タイプ別アイテム数')
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link target="_blank" href="https://www.enpaku-jdta.jp/">
            <v-list-item-action>
              <v-icon>mdi-database</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{
                $t('JAPAN DIGITAL THEATRE ARCHIVES')
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link target="_blank" href="snorql">
            <v-list-item-action>
              <v-icon>mdi-database</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>{{ $t('RDFストア') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>
          <nuxt-link
            :to="
              localePath({
                name: 'index',
              })
            "
            style="color: inherit; text-decoration: inherit"
          >
            {{ $t(siteName) }}
          </nuxt-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template #activator="{ on }">
            <v-btn depressed btn v-on="on">
              <v-icon class="mr-2">mdi-translate</v-icon>
              <template v-if="$vuetify.breakpoint.name != 'xs'">
                {{ $i18n.locale == 'ja' ? '日本語' : 'English' }}</template
              >
              <v-icon class="ml-2">mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item :to="switchLocalePath('ja')">
              <v-list-item-title>日本語</v-list-item-title>
            </v-list-item>
            <v-list-item :to="switchLocalePath('en')">
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer :dark="true" class="mt-5">
      <v-container class="text-center my-5">
        <p class="my-0">
          <nuxt-link style="color: white" :to="localePath({ name: 'index' })">{{
            $t(siteName)
          }}</nuxt-link>
        </p>
      </v-container>
    </v-footer>

    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      dark
      fixed
      bottom
      right
      large
      color="error"
      @click="toTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import firebase from '../plugins/firebase'

@Component({
  components: {},
})
export default class search extends Vue {
  fab: boolean = false

  drawer: boolean = false
  baseUrl: string = process.env.BASE_URL || ''
  siteName: string = process.env.siteName || ''
  github: string = process.env.github || ''

  userName: any = null
  userPic: any = null
  dialog: boolean = false
  dialog4login: boolean = false

  get isSignedIn(): boolean {
    return this.$store.getters.getIsSignedIn
  }

  set isSignedIn(value) {
    this.$store.commit('setSignedIn', value)
  }

  created() {
    this.onAuthStateChanged()
  }

  onScroll(e: any): void {
    if (typeof window === 'undefined') return
    const top = window.pageYOffset || e.target.scrollTop || 0
    this.fab = top > 20
  }

  toTop(): void {
    // @ts-ignore
    this.$vuetify.goTo(0)
  }

  signInWithGoogle() {
    this.$store.dispatch('login')
    this.dialog4login = !this.dialog4login
  }

  onAuthStateChanged() {
    firebase.auth().onAuthStateChanged((user: any) => {
      this.userName = user ? user.displayName : null
      this.userPic = user ? user.photoURL : null
      this.isSignedIn = !!user
    })
  }

  async signOut() {
    await firebase.auth().signOut()
  }
}
</script>
<style>
.teiDate {
  background-color: #bbdefb;
}
.teiTime {
  background-color: #fff9c4;
}
.teiPersName {
  background-color: #ffccbc;
}
.teiPlaceName {
  background-color: #c8e6c9;
}
a {
  text-decoration: none;
}
</style>
