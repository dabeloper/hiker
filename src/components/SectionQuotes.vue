<template>
  <section id="quotes" v-if="dabeloper.quotes?.length > 0">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div id="owl-quote" class="owl-carousel owl-theme">
            <div v-for="quote of dabeloper.quotes" :key="quote.id" class="item">
              <div class="quote-item">
                <p>
                  {{ quote.quote }}
                </p>
                <!-- <h4>{{ quote.subtitle }}</h4>
                <span>{{ quote.title }}</span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { useDabeloperStore } from '@/stores/dabeloper'

export default {
  name: 'SectionQuotes',
  methods: {},
  data() {
    const dabeloper = useDabeloperStore()
    return {
      dabeloper
    }
  }
}
</script>
