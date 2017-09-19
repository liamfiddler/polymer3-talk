import { Element } from '@polymer/polymer/polymer-element'
import styles from './my-app.css'
import markup from './my-app.html'

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

    console.log('styles', styles)
    console.log('markup', markup)

    setInterval(() => {
      this.date = (new Date).toString()
    }, 2000)
  }

  static get template() {
    return `
      <style> ${styles} </style>
      ${markup}
    `
  }
}

customElements.define('my-app', MyApp)
