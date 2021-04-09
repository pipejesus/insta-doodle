import {LitElement, html, css} from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
 export class PolcoInstaDoodle extends LitElement {

  static get styles() {
    return css`
      :host {
				/**
				 * Styles applied to the host element (i.e. <polcode-recipe>)
				 */
      }
			.recipe-contents.closed {
				display: none;
			}
			.recipe-contents.opened {
				display: block;
			}
    `;
  }

  static get properties() {
    return {
      opened: {type: Boolean},
    };
  }

  constructor() {
    super();
		this.opened = false;
  }

  render() {
    return html`
			<article class="recipe">
				<header class="recipe-header">
					<slot name="header"></slot>
				</header>
				<div class="recipe-contents ${ this.opened ? 'opened':'closed' }">
					<slot name="contents"></slot>
				</div>
				<div class="recipe-actions">
					<button @click=${this._onClick}>Read the recipe</button>
				</div>
			</article>
    `;
  }

  _onClick() {
    this.opened = !this.opened;
  }

	// createRenderRoot() { return this; }
}

window.customElements.define('polcode-insta-doodle', PolcoInstaDoodle);
