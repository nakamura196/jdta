<template>
  <div>
    <v-sheet color="grey lighten-2">
      <v-container fluid class="py-4">
        <v-breadcrumbs class="py-0" :items="items">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-sheet>

    <v-container class="my-10">
      <ChartCount />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import axios from 'axios'
import ChartCount from '~/components/ChartCount.vue'

@Component({
  components: {
    ChartCount,
  },
})
export default class about extends Vue {
  endpoint: string = 'https://dydra.com/ut-digital-archives/jdta/sparql?query='

  title: any = this.$t('Item')
  id: any = null

  results: any[] = []

  // name: string = 'keywords'
  // type: string = 'keyword'

  get type() {
    return this.$route.params.entity
  }

  get name() {
    const type = this.type
    return type === 'spatial' ? 'map' : type
  }

  get items() {
    return [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
      },
      {
        text: this.$t('タイプ別アイテム数'),
      },
    ]
  }

  @Watch('$route')
  watchR(): void {
    this.init()
  }

  // state
  created() {
    this.init()
  }

  async init() {
    const entity = this.$route.params.entity
    const type = entity === 'agent' ? 'dcepk:Agent' : ''
    const limit = 100
    const query = `
        SELECT distinct ?s ?label WHERE {
          
          ?s a ${type}; dct:title ?label . 
        }
        LIMIT ${limit}
      `

    this.results = [
      {
        label: '中村覚',
        url: 'http://yahoo.co.jp',
      },
    ]

    const result = await axios.get(
      this.endpoint + encodeURIComponent(query) + '&output=json'
    )

    const results = result.data.results.bindings

    console.log({ results })
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
