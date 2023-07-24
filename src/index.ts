import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import './components/button';
import './components/demoElement';
import './components/input'
import './components/form'


@customElement('my-app')
class MyApp extends LitElement {
  override render() {
    return html`
      
      <hr/>
      
      <my-element></my-element>
      <hr/>
      
      <pw-button>PW Button</pw-button>
      <hr/>
      
      <name-tag></name-tag>
      <hr/>

      <my-form></my-form>
    `;
  }
}

export default MyApp;

