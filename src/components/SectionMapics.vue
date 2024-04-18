<template>
  <section id="mapics">
    <div class="content-wrapper">
      <div class="inner-container container">
        <div class="row">
          <div class="col-md-8 col-sm-12">
            <div id="map" class="section-heading">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7895.485196115994!2d103.85995441789784!3d1.2880401763270322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7fb4e58ad9cd826e!2sSingapore+Flyer!5e0!3m2!1sen!2sth!4v1505825620371"
                width="100%"
                height="500"
                frameborder="0"
                style="border: 0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div id="igEmbed" class="col-md-4 col-sm-12">
            <div class="projects-holder-3">
              <div class="projects-holder">
                <div id="section-loading" class="row" v-if="!selected.src">
                  <div class="master-section-loading">
                    <div class="section-loading">
                      <div class="crescent"><span></span><span></span></div>
                      <div class="star s1"><span></span><span></span></div>
                      <div class="star s2"><span></span><span></span></div>
                      <div class="star s3"><span></span><span></span></div>
                      <div class="star s4"><span></span><span></span></div>
                      <div class="star s5"><span></span><span></span></div>
                      <div class="small-star ss1"><span></span><span></span></div>
                      <div class="small-star ss2"><span></span><span></span></div>
                      <div class="small-star ss3"><span></span><span></span></div>
                      <div class="small-star ss4"><span></span><span></span></div>
                      <div class="small-star ss5"><span></span><span></span></div>
                      <div class="small-star ss6"><span></span><span></span></div>
                      <div class="small-star ss7"><span></span><span></span></div>
                      <div class="small-star ss8"><span></span><span></span></div>
                      <div class="hut">
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                      </div>
                      <div class="marker"></div>
                      <div class="tree one">
                        <hr class="trunc" />
                        <hr class="leaves" />
                        <hr class="leaves" />
                        <hr class="leaves" />
                        <hr class="leaves" />
                      </div>
                      <div class="tree two">
                        <hr class="trunc" />
                        <hr class="leaves" />
                        <hr class="leaves" />
                        <hr class="leaves" />
                        <hr class="leaves" />
                      </div>
                      <div class="tree three">
                        <hr class="trunc" />
                        <hr class="leaves" />
                        <hr class="leaves" />
                        <hr class="leaves" />
                        <hr class="leaves" />
                      </div>
                      <div class="tree four">
                        <hr class="trunc" />
                        <hr class="leaves" />
                        <hr class="leaves" />
                        <hr class="leaves" />
                        <hr class="leaves" />
                      </div>
                      <div class="hill"></div>
                    </div>
                    <span class="loading-text">
                      {{ $t('map.select') }}
                      <img src="../assets/img/marker-icon.png" alt="P" />
                    </span>
                  </div>
                </div>
                <!-- IFRAME -->
                <div class="row" v-if="selected.src">
                  <h4>
                    {{ selected.title }}
                  </h4>
                  <iframe
                    :src="selected.src + 'embed?utm_source=ig_embedembed'"
                    width="100%"
                    height="500"
                    frameborder="0"
                    style="border: 0"
                    allowfullscreen
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { useDabeloperStore } from '../stores/dabeloper'
import type { DataModel } from '@/models/data.model'

export default {
  name: 'SectionMapics',
  methods: {
    setActiveTutorial(hike: DataModel) {
      this.selected = hike
    }
  },
  data() {
    const selected: DataModel = {}
    const map: any = null
    const dabeloper = useDabeloperStore()
    return {
      map,
      dabeloper,
      selected
    }
  },
  mounted() {
    this.dabeloper.fetchData()
  },
  onBeforeUnmount() {
  }
}
</script>

<style scoped>
#section-loading {
  background: #212121;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.master-section-loading {
  margin: 0;
  padding: 20px 40px;
  background-color: #131516;
  display: grid;
  border-radius: 13px;
  border: 1px solid #2c2d2e;
  transform: scale(0.7);
}

.section-loading {
  width: 300px;
  height: 300px;
  position: relative;
  margin: auto;
  border-radius: 50%;
  border: 2px solid white;
  overflow: hidden;
}

.crescent {
  position: relative;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  left: calc(50% - 25px);
  top: 12px;
  overflow: hidden;
  animation: rotate 3s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.crescent span:nth-child(2) {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 2px white;
  border-radius: 50%;
}

.crescent span:nth-child(1) {
  background-color: #131516;
  position: absolute;
  left: 40%;
  display: block;
  width: calc(70% - 6px);
  height: calc(70% - 6px);
  box-shadow: inset 0 0 0 2px white;
  border-radius: 50%;
  z-index: 9;
}

.star {
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  height: 20px;
  width: 20px;
}

.star span:nth-child(1)::before {
  content: '';
  border: 2px solid white;
  height: 50%;
  width: 50%;
  border-top-color: transparent;
  border-left-color: transparent;
  border-radius: 0% 0% 100% 10%;
  display: block;
  left: -3px;
  top: -3px;
  position: absolute;
}

.star span:nth-child(1)::after {
  content: '';
  border: 2px solid white;
  height: 50%;
  width: 50%;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-radius: 0% 100% 0% 0%;
  display: block;
  left: -3px;
  bottom: -3px;
  position: absolute;
}

.star span:nth-child(2)::before {
  content: '';
  border: 2px solid white;
  height: 50%;
  width: 50%;
  border-top-color: transparent;
  border-right-color: transparent;
  border-radius: 0% 0% 0% 100%;
  display: block;
  right: -3px;
  top: -3px;
  position: absolute;
}

.star span:nth-child(2)::after {
  content: '';
  border: 2px solid white;
  height: 50%;
  width: 50%;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-radius: 100% 0% 0% 0%;
  display: block;
  right: -3px;
  bottom: -3px;
  position: absolute;
}

.small-star {
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  height: 12px;
  width: 12px;
}

.small-star span:nth-child(1)::before {
  content: '';
  border: 1.5px solid white;
  height: 50%;
  width: 50%;
  border-top-color: transparent;
  border-left-color: transparent;
  border-radius: 0% 0% 100% 10%;
  display: block;
  left: -2px;
  top: -2px;
  position: absolute;
}

.small-star span:nth-child(1)::after {
  content: '';
  border: 1.5px solid white;
  height: 50%;
  width: 50%;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-radius: 0% 100% 0% 0%;
  display: block;
  left: -2px;
  bottom: -2px;
  position: absolute;
}

.small-star span:nth-child(2)::before {
  content: '';
  border: 1.5px solid white;
  height: 50%;
  width: 50%;
  border-top-color: transparent;
  border-right-color: transparent;
  border-radius: 0% 0% 0% 100%;
  display: block;
  right: -2px;
  top: -2px;
  position: absolute;
}

.small-star span:nth-child(2)::after {
  content: '';
  border: 1.5px solid white;
  height: 50%;
  width: 50%;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-radius: 100% 0% 0% 0%;
  display: block;
  right: -2px;
  bottom: -2px;
  position: absolute;
}

.s1 {
  left: 60px;
  top: 50px;
  animation: glow 1.1s 0.9s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.s2 {
  right: 35px;
  bottom: 155px;
  animation: glow 1.3s 0.5s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.s3 {
  left: calc(50% - 10px);
  top: 75px;
  animation: glow 1.5s 0.3s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.s4 {
  left: 35px;
  bottom: 155px;
  animation: glow 3s 0.7s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.s5 {
  right: 60px;
  top: 50px;
  animation: glow 2s 1.2s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.ss1 {
  right: 15px;
  bottom: 130px;
  animation: glow 2s 1s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.ss2 {
  left: 15px;
  bottom: 130px;
  animation: glow 1s 0s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.ss3 {
  left: 35px;
  bottom: 195px;
  animation: glow 1.9s 0.1s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.ss4 {
  right: 35px;
  bottom: 195px;
  animation: glow 1.6s 0.9s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.ss5 {
  left: 100px;
  bottom: 180px;
  animation: glow 1s 0.5s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.ss6 {
  right: 100px;
  bottom: 180px;
  animation: glow 1.7s 0.6s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.ss7 {
  right: 90px;
  top: 30px;
  animation: glow 0.8s 0.8s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.ss8 {
  left: 90px;
  top: 30px;
  animation: glow 1.8s 0.3s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
}

.hill {
  display: block;
  width: 140%;
  height: 100%;
  border: 2px solid white;
  border-radius: 50%;
  bottom: -40%;
  position: relative;
  left: -20%;
  background-size: 3%;
  background-repeat: repeat;
  opacity: 0.7;
}

.marker {
  position: absolute;
  left: calc(50% - 9px);
  bottom: 25px;
  z-index: 99;
}

.log1 {
  background-color: white;
  height: 2px;
  transform: rotate(35deg);
  transform-origin: center;
  position: relative;
  left: -3px;
  bottom: -1.5px;
}

.log2 {
  background-color: white;
  height: 2px;
  transform: rotate(-35deg);
  transform-origin: center;
  left: 3px;
  position: relative;
  bottom: -0px;
}

.hut {
  width: 0;
  height: 0;
  border-left: 38px solid transparent;
  border-right: 38px solid transparent;
  border-bottom: 75px solid #131516;
  position: absolute;
  left: calc(50% - 37.6px);
  z-index: 11;
  bottom: 80px;
  transform: scale(1.3);
}

.hut hr:nth-child(1) {
  height: 0px;
  position: absolute;
  width: 75px;
  bottom: -75px;
  left: calc(50% - 37.6px);
}

.hut hr:nth-child(2) {
  height: 0px;
  position: absolute;
  width: 96px;
  bottom: -32px;
  left: -32px;
  transform: rotate(63.5deg);
  border: 1px solid white;
}

.hut hr:nth-child(3) {
  height: 0px;
  position: absolute;
  width: 96px;
  bottom: -32px;
  right: -32px;
  transform: rotate(-63.5deg);
  border: 1px solid white;
}

.hut hr:nth-child(4) {
  height: 0px;
  position: absolute;
  width: 60px;
  bottom: -60px;
  left: -30px;
  border: 0.5px solid white;
}

.hut hr:nth-child(5) {
  height: 0px;
  position: absolute;
  width: 55px;
  bottom: -55px;
  left: -27.5px;
  border: 0.5px solid white;
}

.hut hr:nth-child(6) {
  height: 0px;
  position: absolute;
  width: 50px;
  bottom: -50px;
  left: -25px;
  border: 0.5px solid white;
}

/* Trees */
.tree {
  position: absolute;
  width: 25px;
  height: 48px;
  z-index: 21;
  transform: scale(1.3);
}

.tree .trunc {
  height: 48px;
  width: 1px;
  background-color: white;
  left: 12.5px;
  position: absolute;
  margin-top: 1.5px;
}

.tree .leaves {
  height: 18px;
  width: 18px;
  transform: rotate(45deg);
  border-left: 1.5px solid white;
  border-top: 1.5px solid white;
  border-bottom: 0;
  border-right: 0;
  margin-bottom: -15px;
  margin-top: 5px;
  left: 4px;
  position: relative;
}

.one {
  left: 30px;
  bottom: 90px;
}

.two {
  right: 30px;
  bottom: 90px;
}

.three {
  left: 80px;
  bottom: 115px;
}

.four {
  right: 80px;
  bottom: 115px;
}

.loading-text {
  color: white;
  font-size: large;
  font-family: 'Roboto', arial, sans-serif;
  display: block;
  text-align: center;
  padding: 20px 0 0 0;
  opacity: 0.8;
}

@keyframes glow {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(10deg);
  }

  100% {
    transform: rota(0);
  }
}

#mapics .section-heading {
  padding-top: 200px;
  padding-bottom: 200px;
  background-color: #33c1cf;
  height: 732px;
  margin-left: -100vh;
  padding-left: 100vh;
}

#mapics .project-item {
  margin: 0px -16px;
}

#mapics .section-heading h4 {
  margin-top: 0px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
}

#mapics .section-heading .line-dec {
  width: 270px;
  height: 1px;
  background-color: rgba(250, 250, 250, 0.5);
  margin: 20px 0px 15px 0px;
}

#mapics .section-heading p {
  color: #fff;
  padding-right: 70px;
}

:deep(.leaflet-tooltip-pane) {
  font-size: large !important;
}

#map {
  width: auto;
  height: 100vh;
}

#igEmbed {
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 1rem;
}

:deep(.leaflet-tile-pane) {
  -webkit-filter: saturate(0.5);
  filter: saturate(0.5);
}

:deep(.marker-selected) {
  border-radius: 100%;
  background: rgb(255 155 0 / 25%);

  animation-name: ripple;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

@keyframes ripple {
  0% {
    box-shadow:
      0 0 0 0 rgb(255 155 0 / 25%),
      0 0 0 0 rgb(255 155 0 / 25%);
  }

  80% {
    box-shadow:
      0 0 0 20px #fff0,
      0 0 0 40px #fff0;
  }

  100% {
    box-shadow:
      0 0 0 0 #fff0,
      0 0 0 0 #fff0;
  }
}

@media (min-width: 991px) {
  #igEmbed {
    margin-top: 5%;
  }
}
</style>
