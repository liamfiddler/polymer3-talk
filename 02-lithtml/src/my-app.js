import { Element } from '../node_modules/@polymer/polymer/polymer-element.js'
import { html, render } from '../node_modules/lit-html/lit-html.js'

export class MyApp extends Element {
  static get properties() {
    return {
      date: {
        type: String,
        value: (new Date).toString(),
        observer: 'render',
      },
    }
  }

  constructor() {
    super()

    setInterval(() => {
      this.date = (new Date).toString()
    }, 2000)
  }

  render() {
    render(html`
      <style> div { color: bisque; } </style>
      <h1> 02 - Polymer 3 with lit-html </h1>
      <div> The time is ${this.date} </div>
    `, this)
  }
}

customElements.define('my-app', MyApp)
