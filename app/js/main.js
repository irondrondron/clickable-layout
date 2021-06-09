const preloader = document.getElementById("preloader")
const preloaderLogo = document.getElementById("preloaderLogo")
const give = document.getElementById("give")
const like1 = document.getElementById("like1")
const like2 = document.getElementById("like2")
const like3 = document.getElementById("like3")
const like4 = document.getElementById("like4")
const cool = document.getElementById("cool")
const layout = document.getElementById("layout")
const ball1 = document.getElementById("ball1")
const ball2 = document.getElementById("ball2")
const ball3 = document.getElementById("ball3")
const textOver = document.getElementById("textOver")
const textUnder = document.getElementById("textUnder")
const man = document.getElementById("man")

const animLoader = (duration, delay) => {
  preloader.animate([
    { transform: 'translateY(0vh)' },
    { transform: 'translateY(-110vh)' }
  ], {
    duration: duration,
    iterations: 1,
    delay: delay,
    easing: 'cubic-bezier(0, 0, 0, 1)',
  })
  preloaderLogo.animate([
    { transform: 'translate(36vw, 48vh) scale(1)' },
    { transform: 'translate(36vw, 90vh) scale(2)' },
  ], {
    duration: duration,
    iterations: 1,
    delay: delay,
    easing: 'cubic-bezier(0, 0, 0, 1)',
  })
  setTimeout(() => {
    preloader.style.transform = 'translateY(-110vh)',
      preloaderLogo.style.transform = 'translate(36vw, 90vh) scale(2)'
  }, duration)
}

const animWidth = (el, from, to, duration, delay) => {
  el.animate([
    { width: `${from}%`, padding: '0px' },
    { width: `${to}%`, padding: '0 3px' }
  ], {
    duration: duration,
    iterations: 1,
    delay: delay,
    easing: 'cubic-bezier(0, 0, 0, 1)',
  })
  setTimeout(() => {
    el.style.width = `${to}%`,
      el.style.padding = '0 3px'

  }, duration)
}

const animPos = (el, from, to, duration, delay) => {
  el.animate([
    { left: `${from}px` },
    { left: `${to}px` }
  ], {
    duration: duration,
    iterations: 1,
    delay: delay,
    easing: 'cubic-bezier(0, 0, 0, 1)',
  })
  setTimeout(() => {
    el.style.left = `${to}px`

  }, duration)
}

const animBall = (el, duration, delay) => {
  el.animate([
    {
      opacity: 0,
      transform: 'scale(0.8) translateY(400px) translateZ(10px)'
    },
    {
      opacity: 1,
      transform: 'scale(1) translateY(0px) translateZ(10px)'
    }
  ], {
    duration: duration,
    iterations: 1,
    delay: delay,
    easing: 'cubic-bezier(0, 0, 0, 1)',
  })
  setTimeout(() => {
    el.style.opacity = 1
    el.style.transform = 'scale(1) translateY(0px)  translateZ(10px)'

  }, duration)
}

const animOpa = (el, duration, delay) => {
    el.animate([
      { opacity: 0 },
      { opacity: 1 }
    ], {
      duration: duration,
      iterations: 1,
      delay: delay,
      easing: 'cubic-bezier(0, 0, 0, 1)',
    })
    setTimeout(() => {
      el.style.opacity = 1
    }, duration)
}

window.onload = () => {
  animLoader(3000, 2000)
  setTimeout(() => {
    animWidth(give, 0, 100, 2300, 500)
    const clientWidth = document.body.clientWidth
    switch (true) {
      case clientWidth <= 959:
        animWidth(like1, 0, 11, 1300, 500)
        animWidth(like2, 0, 11, 1300, 500)
        animPos(like2, 0, 42, 5000, 2300)
        animWidth(like3, 0, 101, 1000, 500)
        animPos(like3, 0, 84, 5000, 2300)
        animWidth(like4, 0, 101, 1000, 500)
        animPos(like4, 0, 100, 5000, 2300)
        break;

      default:
        animWidth(like1, 0, 11, 1300, 500)
        animWidth(like2, 0, 11, 1300, 500)
        animPos(like2, 0, 42, 5000, 2300)
        animWidth(like3, 0, 101, 1000, 500)
        animPos(like3, 0, 84, 5000, 2300)
        animWidth(like4, 0, 101, 1000, 500)
        animPos(like4, 0, 100, 5000, 2300)
        break;
    }



    animWidth(cool, 0, 100, 2300, 500)

    animWidth(layout, 0, 100, 2300, 500)

    animOpa(textOver, 7000, 3500)
    animOpa(textUnder, 8000, 3500)

    document.addEventListener('mousemove', parallax)
    function parallax(e) {
      const x = (e.pageX * 9 / 100)
      man.style.transform = `translateX(${x}px) translateZ(10px)`
    }
  }, 4000)
}

animBall(ball1, 2000, 1000)
animBall(ball2, 2000, 1800)
animBall(ball3, 3000, 2500)