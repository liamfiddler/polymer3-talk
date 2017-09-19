import { Element } from '@polymer/polymer/polymer-element'

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
      <style> div { color: red; } </style>
      <h1> 03 - Polymer 3 with Webpack </h1>
      <div> The time is [[date]] </div>
    `
  }
}

customElements.define('my-app', MyApp)
