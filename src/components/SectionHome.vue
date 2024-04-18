<template>
  <section class="parallax-content layers" id="home">
    <div class="layers__container">
      <div class="layers__item layer-background"></div>
      <div class="layers__item layer-1-Tbranch"></div>
      <div class="layers__item layer-2-main">
        <div class="main-content">
          <h1>
            {{ $t('home.welcome') }} <br />
            {{ $t('home.to') }} <span class="block">{{ $t('home.jungle') }}</span>
          </h1>
          <div class="subtitle">{{ $t('home.terms') }}</div>
        </div>
      </div>
      <div class="layers__item layer-3-rain">
        <canvas class="rain"></canvas>
      </div>
      <div class="layers__item layer-4-leaves"></div>
      <div class="layers__item layer-5-mist"></div>
    </div>
  </section>
</template>
