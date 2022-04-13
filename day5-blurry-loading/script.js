class loader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.timer = setInterval(() => this.count++, 30);
		this.message = 'Loading...';
	}

	get count() {
		return this.getAttribute('count');
	}

	set count(val) {
		this.setAttribute('count', val);
	}

	static get observedAttributes() {
		return ['count'];
	}

	attributeChangedCallback(prop, ovlVal, newVal) {
		if (prop === 'count') {
			if (this.count === '100') {
				clearInterval(this.timer);
				this.message = 'Loaded!';
			}
			this.render();
		}
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
     <style>
     * { 
       box-sizing: border-box;
     }
     .wrapper {
       align-items: center;
       background: gray;
       display: flex;
       height: 500px;
       justify-content: center;
       width: 500px;
       padding: 1rem;
     }
      .message {
        color: white;
        text-align: center;
        font-family: 'Roboto', sans-serif;
      }

      .loading-percent {
        background: radial-gradient(blue, blue 20%, navy 20%, navy 40%, blue 40%, blue 60%, navy 60%, navy 80%, blue 80%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(50px + ${this.count} * 4px);
        opacity: calc(${this.count} / 100);
        width: ${this.count}%;
		  }
     </style>
      <div class="wrapper">
          <div class='loading-percent' >
            <div class="message">${this.count}% ${this.message}</div>
          </div>
      </div>
    `;
	}
}

customElements.define('wc-loader', loader);
