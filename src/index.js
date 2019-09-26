const Header = () => {
  const h1 = document.createElement('h1')
  h1.innerHTML = 'tok'
  return h1
}

const header = Header()
document.body.appendChild(header)
