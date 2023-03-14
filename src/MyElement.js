class MyElement extends HTMLElement {
  constructor() {
    super();
    this.textContent = "Hello, world!";
  }
}

customElements.define('my-element', MyElement);

export { MyElement };