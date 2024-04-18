jQuery(document).ready(function (t) {
  'use strict'
  t('#owl-quote').owlCarousel({
    pagination: !0,
    paginationNumbers: !1,
    autoPlay: 6e3,
    items: 1,
    itemsDesktop: [1e3, 1],
    itemsDesktopSmall: [900, 1],
    itemsTablet: [600, 1],
    itemsMobile: !1
  })
  var e = t('.parallax-content')
  e.css({ 'background-position': 'center center' }),
    t(window).scroll(function () {
      var n = t(this).scrollTop()
      e.css({ 'background-position': 'center calc(50% + ' + 0.5 * n + 'px)' })
    }),
    t('.counter').each(function () {
      var e = t(this),
        n = e.attr('data-count')
      t({ countNum: e.text() }).animate(
        { countNum: n },
        {
          duration: 8e3,
          easing: 'linear',
          step: function () {
            e.text(Math.floor(this.countNum))
          },
          complete: function () {
            e.text(this.countNum)
          }
        }
      )
    }),
    t(window).on('scroll', function () {
      t(window).scrollTop() > 100
        ? t('.header').addClass('active')
        : t('.header').removeClass('active')
    }),
    t('.projects-holder').mixitup({
      effects: ['fade', 'grayscale'],
      easing: 'snap',
      transitionSpeed: 400
    })
}),
  $(document).ready(function () {
    const t = (t, e) => Math.floor(Math.random() * e) + t
    function e(t, { x: e, y: n, size: i, thickness: o, velocity: s, opacity: a }) {
      ;(this.x = e),
        (this.y = n),
        (this.endY = i),
        (this.velocity = s),
        (this.opacity = a),
        (this.draw = function () {
          t.beginPath(),
            t.moveTo(this.x, this.y),
            t.lineTo(this.x, this.y - this.endY),
            (t.lineWidth = o),
            (t.strokeStyle = 'rgba(255, 255, 255, ' + this.opacity + ')'),
            t.stroke()
        }),
        (this.update = function () {
          const t = window.innerHeight + 100
          ;(this.y = this.y >= t ? this.endY - 100 : this.y + this.velocity), this.draw()
        })
    }
    new (class {
      drops = []
      constructor({
        size: n = [2, 10],
        thickness: i = [1, 2],
        speed: o = [2, 20],
        amount: s = 140
      } = {}) {
        const [a, c] = n,
          [r, l] = o,
          [d, h] = i
        this.#t()
        for (let n = 0; n < s; n++)
          this.drops.push(
            new e(this.context, {
              x: t(1, window.innerWidth),
              y: -500 * Math.random(),
              size: t(a, c),
              thickness: t(d, h - 1) + t(1, 9) / 10,
              velocity: t(r, l),
              opacity: 0.55 * Math.random()
            })
          )
      }
      #t() {
        const t = document.querySelector('canvas.rain')
        ;(this.context = t.getContext('2d')),
          (t.width = window.innerWidth),
          (t.height = window.innerHeight)
      }
      animate() {
        const t = () => {
          requestAnimationFrame(t),
            this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
          for (let t = 0; t < this.drops.length; t++) this.drops[t].update()
        }
        t()
      }
    })().animate(),
      document.getElementById('home').addEventListener('mousemove', (t) => {
        const e = 0.01 * (t.clientY - window.innerHeight / 2),
          n = -0.005 * (t.clientX - window.innerWidth / 2)
        Object.assign(document.documentElement, {
          style: `--rotate-x: ${e}deg;--rotate-y: ${n}deg;`
        })
      })
  }),
  $(document).ready(function () {
    $('.scroll-link').on('click', function (t) {
      t.preventDefault()
      var e,
        n,
        i,
        o,
        s = $(this).attr('data-id')
      ;(e = 750),
        (n = 50),
        (i = $('#' + s).offset().top - n),
        (o = $('#main-nav')),
        $('html,body').animate({ scrollTop: i }, e),
        o.hasClass('open') &&
          (o.css('height', '1px').removeClass('in').addClass('collapse'), o.removeClass('open'))
    }),
      $('.scroll-top').on('click', function (t) {
        t.preventDefault(), $('html, body').animate({ scrollTop: 0 }, 'slow')
      }),
      $('#nav-toggle').on('click', function (t) {
        t.preventDefault(), $('#main-nav').toggleClass('open')
      }),
      'undefined' == typeof console && (console = { log: function () {} })
  })
