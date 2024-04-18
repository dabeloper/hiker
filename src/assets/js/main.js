jQuery(document).ready(function ($) {
  'use strict'

  var owl = $('#owl-quote')

  owl.owlCarousel({
    pagination: true,
    paginationNumbers: false,
    autoPlay: 6000, //Set AutoPlay to 3 seconds
    items: 1, //10 items above 1000px browser width
    itemsDesktop: [1000, 1], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 1], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
  })

  var top_header = $('.parallax-content')
  top_header.css({ 'background-position': 'center center' }) // better use CSS

  $(window).scroll(function () {
    var st = $(this).scrollTop()
    top_header.css({ 'background-position': 'center calc(50% + ' + st * 0.5 + 'px)' })
  })

  $('.counter').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count')

    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo
      },

      {
        duration: 8000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum))
        },
        complete: function () {
          $this.text(this.countNum)
          //alert('finished');
        }
      }
    )
  })

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('.header').addClass('active')
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $('.header').removeClass('active')
    }
  })

  /************** Mixitup (Filter Projects) *********************/
  $('.projects-holder').mixitup({
    effects: ['fade', 'grayscale'],
    easing: 'snap',
    transitionSpeed: 400
  })
})

$(document).ready(function () {
  // https://freecodez.com
  const random = (min, max) => Math.floor(Math.random() * max) + min

  function RainDrop(context, { x, y, size, thickness, velocity, opacity }) {
    this.x = x
    this.y = y
    this.endY = size
    this.velocity = velocity
    this.opacity = opacity

    this.draw = function () {
      context.beginPath()
      context.moveTo(this.x, this.y)
      context.lineTo(this.x, this.y - this.endY)
      context.lineWidth = thickness
      context.strokeStyle = 'rgba(255, 255, 255, ' + this.opacity + ')'
      context.stroke()
    }

    this.update = function () {
      const canvasBottom = window.innerHeight + 100
      this.y = this.y >= canvasBottom ? this.endY - 100 : this.y + this.velocity
      this.draw()
    }
  }

  class Rain {
    drops = []

    constructor({ size = [2, 10], thickness = [1, 2], speed = [2, 20], amount = 140 } = {}) {
      const [sizeMin, sizeMax] = size
      const [speedMin, speedMax] = speed
      const [thicknessMin, thicknessMax] = thickness

      this.#initCanvas()

      for (let i = 0; i < amount; i++) {
        this.drops.push(
          new RainDrop(this.context, {
            x: random(1, window.innerWidth),
            y: Math.random() * -500,
            size: random(sizeMin, sizeMax),
            thickness: random(thicknessMin, thicknessMax - 1) + random(1, 9) / 10,
            velocity: random(speedMin, speedMax),
            opacity: Math.random() * 0.55
          })
        )
      }
    }

    #initCanvas() {
      const canvas = document.querySelector('canvas.rain')
      this.context = canvas.getContext('2d')

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    animate() {
      const animateRain = () => {
        requestAnimationFrame(animateRain)
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)

        for (let i = 0; i < this.drops.length; i++) {
          this.drops[i].update()
        }
      }

      animateRain()
    }
  }

  const rain = new Rain()
  rain.animate()

  document.getElementById('home').addEventListener('mousemove', (e) => {
    const rotateX = (e.clientY - window.innerHeight / 2) * 0.01
    const rotateY = (e.clientX - window.innerWidth / 2) * -0.005
    Object.assign(document.documentElement, {
      style: `--rotate-x: ${rotateX}deg;--rotate-y: ${rotateY}deg;`
    })
  })
})

$(document).ready(function () {
  // navigation click actions
  $('.scroll-link').on('click', function (event) {
    event.preventDefault()
    var sectionID = $(this).attr('data-id')
    scrollToID('#' + sectionID, 750)
  })
  // scroll to top action
  $('.scroll-top').on('click', function (event) {
    event.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, 'slow')
  })
  // mobile nav toggle
  $('#nav-toggle').on('click', function (event) {
    event.preventDefault()
    $('#main-nav').toggleClass('open')
  })
  // scroll function
  function scrollToID(id, speed) {
    var offSet = 50
    var targetOffset = $(id).offset().top - offSet
    var mainNav = $('#main-nav')
    $('html,body').animate({ scrollTop: targetOffset }, speed)
    if (mainNav.hasClass('open')) {
      mainNav.css('height', '1px').removeClass('in').addClass('collapse')
      mainNav.removeClass('open')
    }
  }
  if (typeof console === 'undefined') {
    console = {
      log: function () {}
    }
  }
})
