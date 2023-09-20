export function wheel(element) {
  const spinButton = element.querySelector('#spin')
  const canvas = element.querySelector('#wheel')
  const wheelImage = element.querySelector('#wheel-image')

  // set canvas size
  canvas.width = 500
  canvas.height = 500

  // get context
  const ctx = canvas.getContext('2d')

  // draw wheel
  const drawWheel = () => {
    ctx.drawImage(wheelImage, 0, 0, canvas.width, canvas.height)
  }

  let lastTime = 0
  let spinning = false

  const step = (timeStamp) => {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // rotate wheel
    if (spinning) {
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate(deltaTime / 1000)
      ctx.translate(-canvas.width / 2, -canvas.height / 2)
    }
    drawWheel()
    requestAnimationFrame(step)
  }

  requestAnimationFrame(step)

  // spin wheel
  const spin = (wheelRandom) => {
    spinButton.removeAttribute('disabled')

  }

  spinButton.addEventListener('click', () => {
    spinButton.setAttribute('disabled', true)
    const wheelRandom = Math.ceil(Math.random() * 12)
    spinning = true
  })
}


// const spin = (wheelRandom) => {
//   spinButton.removeAttribute('disabled')
//   wheelImage.classList.toggle('spin-stop')
//   wheelElement.textContent = `The wheel spun ${wheelRandom}`
// }

// spinButton.addEventListener('click', () => {
//   spinButton.setAttribute('disabled', true)
//   const wheelRandom = Math.ceil(Math.random() * 12)
//   wheelImage.classList.add('spin-it')
//   wheelImage.classList.remove('spin-stop')
//   const animationTime = 1000 + ((wheelRandom -1) * 1000 / 12)
//   setTimeout(() =>{spin(wheelRandom)}, animationTime)
// })
// }
