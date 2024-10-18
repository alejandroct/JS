import { BreakingbadApp } from './src/breakingbad/breakingbad-app'
import './style.css'
import viteLogo from '/vite.svg'


document.querySelector('#app').innerHTML = `
  <div>
  
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">

    </div>

  </div>
`
const element = document.querySelector('.card')
BreakingbadApp(element);

