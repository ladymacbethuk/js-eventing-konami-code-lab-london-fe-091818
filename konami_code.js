const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  

}

const input = document.querySelector('input')
input.addEventListener('keydown', e => console.log(e.which))

document.body.addEventListener('keydown', e => {
  if (e.which === 'code') {
    return alert('Hurray!')
  }
})