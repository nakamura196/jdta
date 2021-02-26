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
    <v-container>
      <template v-if="loadingFlag">
        <div class="text-center my-10">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </div>
      </template>
      <template v-else>
        <!--
        <v-row align="center" class="mt-5">
          <v-col cols="12">
            <v-text-field
              v-model="keywordStr"
              single-line
              background-color="grey lighten-3"
              class="px-4"
              filled
              rounded
              dense
              hide-details
              :label="$t('add_a_search_term')"
              append-icon="mdi-magnify"
              clearable
              clear-icon="mdi-close-circle"
              @click:append="updateQuery()"
              @keydown.enter="trigger"
            ></v-text-field>
          </v-col>
        </v-row>
        -->

        <div class="text-center my-5">
          <v-pagination
            v-model="currentPage"
            :length="paginationLength"
            :total-visible="7"
            @input="setCurrentPage"
          ></v-pagination>
        </div>

        <Grid cols="12" :sm="2" :list="people"></Grid>

        <div class="text-center my-5">
          <v-pagination
            v-model="currentPage"
            :length="paginationLength"
            :total-visible="7"
            @input="setCurrentPage"
          ></v-pagination>
        </div>
      </template>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import axios from 'axios'
import Grid from '~/components/Grid.vue'

@Component({
  components: {
    Grid,
  },
})
export default class about extends Vue {
  endpoint: string = 'https://dydra.com/ut-digital-archives/jdta/sparql?query='

  name: string = 'search'
  type: string = 'agential'

  total: number = 0
  perPage: number = 24

  people: any[] = []

  loadingFlag: boolean = true

  currentPage: number = 1

  keywordStr: any = ''

  @Watch('$route')
  watchR(): void {
    this.search()
  }

  async getTotal() {
    const query = `
      PREFIX dcepk: <http://enpaku-jdta.jp/ontologies/>
      SELECT DISTINCT (count(distinct ?cho) as ?c) WHERE {
        ?cho a dcepk:Agent
      }
    `

    const url = this.endpoint + encodeURIComponent(query) + '&output=json'

    const results = await axios.get(url)

    return Number(results.data[0].c)
  }

  // state
  created() {
    this.search()
  }

  get paginationLength() {
    return Math.ceil(this.total / this.perPage)
  }

  get lang() {
    return this.$i18n.locale
  }

  get items() {
    return [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
      },
      {
        text: this.$t(this.type),
      },
      {
        text:
          this.$t('search') +
          (this.total > 0 ? '（' + this.total.toLocaleString() + '）' : ''),
      },
    ]
  }

  async search() {
    this.loadingFlag = true

    const keyword = this.$route.query.keyword || ''
    this.keywordStr = keyword

    const total = await this.getTotal()
    this.total = total

    const from = Number(this.$route.query.from) || 0
    this.currentPage = from / this.perPage + 1

    const lang = this.lang

    const query = `
      PREFIX o: <http://omeka.org/s/vocabs/o#>
      PREFIX dcepk: <http://enpaku-jdta.jp/ontologies/>
      select distinct ?cho ?label WHERE {
        ?cho a dcepk:Agent; o:title ?label;
      }
      ORDER BY asc(?label)
      LIMIT ${this.perPage}
      OFFSET ${from}
    `

    axios
      .get(this.endpoint + encodeURIComponent(query) + '&output=json')
      .then((response) => {
        const people = []

        const results = response.data

        for (let i = 0; i < results.length; i++) {
          const obj = results[i]

          const label = obj.label

          const person: any = {
            label,
            href: process.env.BASE_URL + '/snorql/?describe=' + obj.cho,
          }

          if (obj.thumbnail) {
            person.image = obj.thumbnail.value
          } else {
            person.image =
              'https://icon-library.com/images/user-icon-free/user-icon-free-8.jpg'
          }

          people.push(person)
        }

        this.people = people

        this.loadingFlag = false
      })
  }

  setCurrentPage(value: number) {
    const from: any = (value - 1) * this.perPage
    const query: any = Object.assign({}, this.$route.query)
    query.from = from
    this.$router.push(
      this.localePath({
        name: 'search',
        query,
      }),
      () => {},
      () => {}
    )
  }

  trigger(event: any) {
    // 日本語入力中のEnterキー操作は無効にする
    if (event.keyCode !== 13) return

    this.updateQuery()
  }

  updateQuery() {
    const query: any = Object.assign({}, this.$route.query)

    let keywordStr = this.keywordStr

    if (!keywordStr) {
      keywordStr = ''
    }

    let keywords
    if (keywordStr.startsWith('"') && keywordStr.endsWith('"')) {
      keywords = [keywordStr]
    } else {
      keywords = keywordStr.split(' ')
    }

    query.keyword = keywords

    delete query.from

    this.$router.push(
      this.localePath({
        name: 'search',
        query,
      }),
      () => {},
      () => {}
    )
  }

  head() {
    const title = this.$t('search')
    return {
      title,
    }
  }
}
</script>
