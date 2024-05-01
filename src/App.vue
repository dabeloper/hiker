<template>
  <div class="header">
    <div class="container">
      <nav class="navbar navbar-inverse" role="navigation">
        <div class="navbar-header">
          <button
            type="button"
            id="nav-toggle"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#main-nav"
          >
            <span class="sr-only">{{ $t('app.nav') }}</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="#" class="navbar-brand scroll-top"><em>D</em>ABELOPER</a>
        </div>
        <div id="main-nav" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <a href="#" class="nav-link scroll-top" data-id="home">{{ $t('app.menuHome') }}</a>
            </li>
            <li>
              <a href="#" class="nav-link scroll-link" data-id="about">{{ $t('app.menuAbout') }}</a>
            </li>
            <li>
              <a href="#" class="nav-link scroll-link" data-id="mapics">{{ $t('app.menuPics') }}</a>
            </li>
            <li>
              <a
                href="#"
                class="nav-link scroll-link"
                data-id="quotes"
                v-if="dabeloper.quotes?.length > 0"
                >{{ $t('app.menuQuotes') }}</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>

  <SectionHome></SectionHome>
  <SectionAbout></SectionAbout>
  <SectionMapics></SectionMapics>
  <SectionQuotes></SectionQuotes>

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <div class="logo">
            <a class="logo-ft scroll-top" href="#"><em>D</em>ABELOPER</a>
            <p>{{ $t('app.vue') }}</p>
            <p>Copyright &copy; {{ new Date().getFullYear() }}</p>
          </div>
        </div>
        <div class="col-md-2 col-md-offset-6 col-sm-12">
          <div class="connect-us">
            <h4>{{ $t('app.social') }}</h4>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/dabeloper/"
                  target="_blank"
                  aria-label="linkedIn"
                  ><i class="fa fa-linkedin"></i
                ></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dev.hiker/"
                  target="_blank"
                  aria-label="instagram"
                  ><i class="fa fa-instagram"></i
                ></a>
              </li>
              <li>
                <a href="https://www.facebook.com/dabeloper/" target="_blank" aria-label="facebook"
                  ><i class="fa fa-facebook"></i
                ></a>
              </li>
              <li>
                <a href="https://www.twitter.com/dev_hiker/" target="_blank" aria-label="twitter"
                  ><i class="fa fa-twitter"></i
                ></a>
              </li>
              <li>
                <a href="https://github.com/dabeloper/" target="_blank" aria-label="github"
                  ><i class="fa fa-github"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import SectionHome from './components/SectionHome.vue'
import SectionAbout from './components/SectionAbout.vue'
import SectionMapics from './components/SectionMapics.vue'
import SectionQuotes from './components/SectionQuotes.vue'
import { useDabeloperStore } from '@/stores/dabeloper'

const dabeloper = useDabeloperStore()
</script>
