<template>
  <div>
    <v-container>
      <p class="text-right">
        <v-chip v-if="ref" class="text-right" label>{{ ref }}</v-chip>
      </p>
    </v-container>

    <v-container class="py-5">
      <v-card flat>
        <div class="my-5 pa-5 text-center">
          <img
            width="45px"
            class="mb-2"
            src="https://enpaku-jdta.jp/assets/img/icon.png"
          />
          <h1>{{ $t(siteName) }}</h1>
          <p class="py-5">
            {{ $t(siteDesc) }}
          </p>
        </div>

        <div v-if="items.length > 0">
          <h3 class="my-10 text-center">{{ $t('menu') }}</h3>

          <v-row class="mb-10">
            <v-col v-for="(obj, key) in items" :key="key" cols="12" :sm="3">
              <v-card flat no-body class="mb-4">
                <template v-if="obj.href">
                  <a :href="obj.href" target="_blank">
                    <div class="text-center grey lighten-2 pa-10">
                      <v-icon size="100">{{ obj.icon }}</v-icon>
                    </div>
                  </a>
                  <div class="pa-4">
                    <a :href="obj.href" target="_blank">
                      <h4>{{ obj.label }}</h4>
                    </a>

                    <p v-if="obj.description" class="mt-2 mb-0">
                      {{ obj.description }}
                    </p>
                  </div>
                </template>
                <template v-else>
                  <nuxt-link :to="localePath(obj.path)">
                    <div class="text-center grey lighten-2 pa-10">
                      <v-icon size="100">{{ obj.icon }}</v-icon>
                    </div>
                  </nuxt-link>
                  <div class="pa-4">
                    <nuxt-link :to="localePath(obj.path)">
                      <h4>{{ obj.label }}</h4>
                    </nuxt-link>

                    <p v-if="obj.description" class="mt-2 mb-0">
                      {{ obj.description }}
                    </p>
                  </div>
                </template>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''

  icon: string = 'https://jpsearch.go.jp/assets/img/brand/logo-sq-4c.svg'

  ref: string = ''

  top: string = ''

  get items(): any[] {
    return [
      {
        label: this.$t('agential'),
        path: {
          name: 'entity',
          params: {
            entity: 'agent',
          },
        },
        description: '',
        icon: 'mdi-account',
      },
      {
        label: this.$t('タイプ別アイテム数'),
        path: {
          name: 'count',
        },
        description: '',
        icon: 'mdi-chart-bar',
      },
    ]
  }

  get siteName(): any {
    const siteName: any = process.env.siteName || ''
    return this.$t(siteName)
  }

  get siteDesc(): any {
    const siteDesc: any = process.env.siteDesc || ''
    return this.$t(siteDesc)
  }

  head() {
    const title = this.siteName
    return {
      titleTemplate: null,
      title,
    }
  }
}
</script>
