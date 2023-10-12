import { useEffect } from 'react'

export function UseModalMenu() {
  useEffect(() => {
    var closeIcons = document.querySelectorAll('.icon.close')
    var navIcon = document.getElementById('nav-icon')
    var card = document.getElementsByClassName('card')[0]

    function handleIconClick() {
      document.getElementById('nav-icon').classList.toggle('open')
      card.classList.toggle('active')
    }

    navIcon.addEventListener('click', handleIconClick)

    for (var i = 0; i < closeIcons.length; i++) {
      closeIcons[i].addEventListener('click', handleIconClick)
    }

    // Limpia los event listeners cuando el componente se desmonte
    return () => {
      navIcon.removeEventListener('click', handleIconClick)

      for (var i = 0; i < closeIcons.length; i++) {
        closeIcons[i].removeEventListener('click', handleIconClick)
      }
    }
  }, [])
}
