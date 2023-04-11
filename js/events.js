export function BackgroundChange({bgHome, bgUniverse, bgExploration}) {
  function backgroundHome() {
    document.body.classList.remove("universe")
    document.body.classList.remove("exploration")
    document.body.classList.add('home-bg')
    bgHome.classList.add('active')
    bgUniverse.classList.remove('active')
    bgExploration.classList.remove('active')
  }

  function backgroundUniverse() {
    document.body.classList.remove("exploration")
    document.body.classList.remove("home-bg")
    document.body.classList.add('universe')
    bgUniverse.classList.add('active')
    bgHome.classList.remove('active')
    bgExploration.classList.remove('active')
  }

  function backgroundExploration() {
    document.body.classList.remove("home-bg")
    document.body.classList.remove("universe")
    document.body.classList.add('exploration')
    bgExploration.classList.add('active')
    bgUniverse.classList.remove('active')
    bgHome.classList.remove('active')
  }

    return {
    backgroundHome,
    backgroundUniverse,
    backgroundExploration,
  }

  }


 