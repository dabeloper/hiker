<template>
  <section id="about" class="page-section">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="service-item">
            <div class="icon">
              <img src="../assets/img/about_icon_01.png" alt="1" />
            </div>
            <h4>{{ $t('about.itemOneTitle') }}</h4>
            <div class="line-dec"></div>
            <p>{{ $t('about.itemOneDes') }}</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="service-item">
            <div class="icon">
              <img src="../assets/img/about_icon_02.png" alt="2" />
            </div>
            <h4>{{ $t('about.itemTwoTitle') }}</h4>
            <div class="line-dec"></div>
            <p>{{ $t('about.itemTwoDes') }}</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="service-item">
            <div class="icon">
              <img src="../assets/img/about_icon_03.png" alt="3" />
            </div>
            <h4>{{ $t('about.itemThreeTitle') }}</h4>
            <div class="line-dec"></div>
            <p>{{ $t('about.itemThreeDes') }}</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="service-item">
            <div class="icon">
              <img src="../assets/img/about_icon_04.png" alt="4" />
            </div>
            <h4>{{ $t('about.itemFourTitle') }}</h4>
            <div class="line-dec"></div>
            <p>{{ $t('about.itemFourDes') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-item {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  padding: 0.25rem;
}
</style>
