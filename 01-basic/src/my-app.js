import { Element } from '../node_modules/@polymer/polymer/polymer-element.js'

export class MyApp extends Element {
  static get properties() {
    return {
      date: {
        type: String,
        value: (new Date).toString(),
      },
    }
  }

  constructor() {
    super()

    setInterval(() => {
      this.date = (new Date).toString()
    }, 2000)
  }

  static get template() {
    return `
      <style> div { color: yellow; } </style>
      <h1> 01 - Polymer 3 </h1>      
      <div> The time is [[date]] </div>
    `
  }
}

customElements.define('my-app', MyApp)
