<script>
import { Bar } from 'vue-chartjs'
import axios from 'axios'

export default {
  name: 'Chart',
  extends: Bar,
  props: ['u'],
  data: () => ({
    uris: [],
  }),
  watch: {
    u() {
      this.init()
    },
  },
  created() {
    this.init()
  },
  methods: {
    handle(point, event) {
      const item = event[0]
      if (!item) {
        console.log({ point })
        return
      }

      const uri = this.uris[item._index]

      const query = `
        SELECT DISTINCT ?cho ?label ?image WHERE {
          {
            ?cho rdfs:label ?label;
            schema:creator/owl:sameAs? <${this.u}> 
          } UNION {
            ?cho rdfs:label ?label;
            ?x ?y . ?y <https://jpsearch.go.jp/term/property#value> <${this.u}>
          }
          ?cho rdfs:label ?label ;  jps:sourceInfo/schema:provider <${uri}> .
          OPTIONAL {?cho schema:image ?image}
        }
      `

      const url =
        'https://jpsearch.go.jp/rdf/sparql/easy/?query=' +
        encodeURIComponent(query)

      open(url, '_blank')
    },
    init() {
      this.chartData = []

      const query = `
      PREFIX o: <http://omeka.org/s/vocabs/o#>
      SELECT DISTINCT (count(?s) as ?c) ?type 
        WHERE {
          ?s a ?type . filter(?type != o:Item)
        }
        GROUP BY ?type
        ORDER BY desc(?c)`

      axios
        .get(
          'https://dydra.com/ut-digital-archives/jdta/sparql?query=' +
            encodeURIComponent(query) +
            '&output=json'
        )
        .then((response) => {
          const results = response.data

          const labels = []
          const values = []
          const uris = []
          for (let i = 0; i < results.length; i++) {
            const obj = results[i]

            const label = obj.type
              .replace('http://omeka.org/s/vocabs/o#', 'o:')
              .replace('http://enpaku-jdta.jp/ontologies/', 'dcepk:')

            labels.push(label)
            values.push(Number(obj.c))
          }

          this.uris = uris

          const data = {
            labels,
            datasets: [
              {
                label: this.$t('アイテム数'),
                data: values,
                borderWidth: 1,
              },
            ],
          }

          const options = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: TextTrackCue,
                  },
                },
              ],
            },
            responsive: true,
            maintainAspectRatio: false,
            // onClick: this.handle,
          }

          this.renderChart(data, options)
        })
    },
  },
}
</script>
