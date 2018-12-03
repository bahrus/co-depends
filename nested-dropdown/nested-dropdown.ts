//import { XtallatX } from 'xtal-latx/xtal-latx.js';

const inp_label = document.createElement('template');
inp_label.innerHTML = /* html */`
      <input type='checkbox'  aria-haspopup='true' role='button' tabindex='1'/>
      <label for='link-top' id='menu' role='none' tabindex='-1'></label>
`;

const nestedDD = document.createElement('template');
nestedDD.innerHTML = /* html */`
<slot name="generator"></slot>
<div class="html">
  <div class="body">
    <main ontouchstart='true' role='main'>
      <nav  role='menu' id="content"></nav>
    </main>
  </div>
</div>
<style>
    :host{
      display:block;
    }
  *, *:before, *:after {
    box-sizing: border-box;
  }

  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
  }

  *:focus {
    outline: none !important;
  }

  div.body, div.html {
    height: 100%;
  }

  ol,ul {
    list-style: none;
    padding-inline-start:0px;
  }

  a {
    cursor: pointer;
  }

  div.body {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    background: #fbeae7;
    color: #A6ADA7;
    font-family: "brandon-grotesque", "Brandon Grotesque", "Source Sans Pro", "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
  }

  nav {
    position: relative;
    opacity: 0;
    -webkit-animation: bounceInUp 1000ms linear 500ms forwards;
            animation: bounceInUp 1000ms linear 500ms forwards;
  }
  nav label, nav a {
    transition: all 150ms ease-out;
    cursor: pointer;
    display: flex;
    align-items: center;
    align-content: center;
    height: 48px;
    width: 216px;
    padding: 0 12px;
    background: white;
    border: 2px solid #A6ADA7;
    border-radius: 2px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -1px;
  }
  nav a:hover, nav a:focus {
    border-color: #d0ddd1;
  }
  nav a:active {
    border-color: #F5C8BF;
  }
  nav label {
    position: relative;
  }
  nav label:before, nav label:after {
    transition: all 150ms ease-out;
    content: "";
    display: block;
    position: absolute;
    width: 2px;
    height: 12px;
    background: #A6ADA7;
    border-radius: 2px;
  }
  nav label:before {
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
  }
  nav label:after {
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
  }
  nav label.down:before, nav label.down:after {
    -webkit-transform-origin: center 11px;
            transform-origin: center 11px;
    top: 50%;
    margin-top: -6px;
    right: 20px;
  }
  nav label.right:before, nav label.right:after {
    -webkit-transform-origin: left center;
            transform-origin: left center;
    top: 50%;
    right: 20px;
  }
  nav label.right:before {
    margin-top: -9px;
  }
  nav label.right:after {
    margin-top: -3px;
  }
  nav > label {
    -webkit-transform: translateZ(1px);
            transform: translateZ(1px);
    z-index: 1;
  }
  nav ul {
    will-change: visibility;
    transition: visibility 0ms ease-out 600ms;
    visibility: hidden;
    z-index: 1;
  }
  nav ul li {
    will-change: transform, opacity;
    padding: 4px 0;
    opacity: 0;
  }
  nav ul li:nth-child(1) {
    transition: opacity 100ms ease-out 500ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms, opacity 100ms ease-out 500ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms, opacity 100ms ease-out 500ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms;
  }
  nav ul li:nth-child(2) {
    transition: opacity 100ms ease-out 400ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms, opacity 100ms ease-out 400ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms, opacity 100ms ease-out 400ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms;
  }
  nav ul li:nth-child(3) {
    transition: opacity 100ms ease-out 300ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms, opacity 100ms ease-out 300ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms, opacity 100ms ease-out 300ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms;
  }
  nav ul li:nth-child(4) {
    transition: opacity 100ms ease-out 200ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms, opacity 100ms ease-out 200ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms, opacity 100ms ease-out 200ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms;
  }
  nav ul li:nth-child(5) {
    transition: opacity 100ms ease-out 100ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms, opacity 100ms ease-out 100ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms, opacity 100ms ease-out 100ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms;
  }
  nav > ul {
    position: relative;
    padding-top: 4px;
  }
  nav > ul > li {
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
  }
  nav > ul > li > label {
    -webkit-transform: translateZ(0.5px);
            transform: translateZ(0.5px);
  }
  nav > ul ul {
    position: absolute;
    top: 0;
    right: -224px;
  }
  nav > ul ul > li {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
  nav input {
    cursor: pointer;
    -webkit-appearance: none;
      -moz-appearance: none;
            appearance: none;
    opacity: 0;
    position: absolute;
    width: 216px;
    height: 48px;
    margin: 0;
  }
  nav input:hover ~ label, nav input:focus ~ label {
    border-color: #d0ddd1;
  }
  nav input:active ~ label {
    border-color: #F5C8BF;
  }
  nav input:checked ~ label {
    border-color: #AEBFAF;
  }
  nav input:checked ~ label.down:before, nav input:checked ~ label.down:after {
    margin-top: -16px;
  }
  nav input:checked ~ label.down:before {
    -webkit-transform: rotate(-135deg);
            transform: rotate(-135deg);
  }
  nav input:checked ~ label.down:after {
    -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
  }
  nav input:checked ~ label.right:before {
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    margin-top: -11px;
  }
  nav input:checked ~ label.right:after {
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    margin-top: -2px;
  }
  nav input:checked ~ ul {
    visibility: visible;
    transition: visibility 0ms ease-out 0ms;
  }
  nav input:checked ~ ul > li {
    opacity: 1;
    -webkit-transform: none;
            transform: none;
  }
  nav input:checked ~ ul > li:nth-child(1) {
    transition: opacity 100ms ease-out 100ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms, opacity 100ms ease-out 100ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms, opacity 100ms ease-out 100ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms;
  }
  nav input:checked ~ ul > li:nth-child(2) {
    transition: opacity 100ms ease-out 200ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms, opacity 100ms ease-out 200ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms, opacity 100ms ease-out 200ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms;
  }
  nav input:checked ~ ul > li:nth-child(3) {
    transition: opacity 100ms ease-out 300ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms, opacity 100ms ease-out 300ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms, opacity 100ms ease-out 300ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms;
  }
  nav input:checked ~ ul > li:nth-child(4) {
    transition: opacity 100ms ease-out 400ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms, opacity 100ms ease-out 400ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms, opacity 100ms ease-out 400ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms;
  }
  nav input:checked ~ ul > li:nth-child(5) {
    transition: opacity 100ms ease-out 500ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms, opacity 100ms ease-out 500ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms, opacity 100ms ease-out 500ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms;
  }
  nav > input {
    z-index: 2;
    top: 0;
    left: 0;
  }
  nav > input:not(:checked) ~ ul > li input:checked ~ ul li {
    opacity: 0;
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
  nav > input:not(:checked) ~ ul > li input:checked ~ ul li:nth-child(1) {
    transition: opacity 100ms ease-out 500ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms, opacity 100ms ease-out 500ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms, opacity 100ms ease-out 500ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms;
  }
  nav > input:not(:checked) ~ ul > li input:checked ~ ul li:nth-child(2) {
    transition: opacity 100ms ease-out 400ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms, opacity 100ms ease-out 400ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms, opacity 100ms ease-out 400ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms;
  }
  nav > input:not(:checked) ~ ul > li input:checked ~ ul li:nth-child(3) {
    transition: opacity 100ms ease-out 300ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms, opacity 100ms ease-out 300ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms, opacity 100ms ease-out 300ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms;
  }
  nav > input:not(:checked) ~ ul > li input:checked ~ ul li:nth-child(4) {
    transition: opacity 100ms ease-out 200ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms, opacity 100ms ease-out 200ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms, opacity 100ms ease-out 200ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms;
  }
  nav > input:not(:checked) ~ ul > li input:checked ~ ul li:nth-child(5) {
    transition: opacity 100ms ease-out 100ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms, opacity 100ms ease-out 100ms;
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms, opacity 100ms ease-out 100ms, -webkit-transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms;
  }

  /* https://goo.gl/1h4kf5 */
  @-webkit-keyframes bounceInUp {
    0% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 200, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 200, 0, 1);
      opacity: 0;
    }
    5.51% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 95.356, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 95.356, 0, 1);
    }
    11.01% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 23.691, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 23.691, 0, 1);
    }
    16.52% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -9.467, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -9.467, 0, 1);
    }
    21.92% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -16.994, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -16.994, 0, 1);
    }
    36.24% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -3.682, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -3.682, 0, 1);
      opacity: 1;
    }
    50.55% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1.004, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1.004, 0, 1);
    }
    79.08% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.059, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.059, 0, 1);
    }
    100% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      opacity: 1;
    }
  }
  @keyframes bounceInUp {
    0% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 200, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 200, 0, 1);
      opacity: 0;
    }
    5.51% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 95.356, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 95.356, 0, 1);
    }
    11.01% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 23.691, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 23.691, 0, 1);
    }
    16.52% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -9.467, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -9.467, 0, 1);
    }
    21.92% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -16.994, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -16.994, 0, 1);
    }
    36.24% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -3.682, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -3.682, 0, 1);
      opacity: 1;
    }
    50.55% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1.004, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1.004, 0, 1);
    }
    79.08% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.059, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.059, 0, 1);
    }
    100% {
      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      opacity: 1;
    }
  }

</style>
`;

export class NestedDropDown extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(nestedDD.content.cloneNode(true));
    const target = this.shadowRoot!.querySelector('#content');

    this.shadowRoot!.querySelector('[name="generator"]')!.addEventListener('slotchange', outerE => {
      const sE = outerE.target as HTMLSlotElement;
      sE.assignedElements().forEach(el => {
        const hEl = el as HTMLInputElement;
        if (hEl.hasAttribute('disabled')) {
          hEl.addEventListener('value-changed', innerE => {
            const val2 = (<any>innerE.target!).value;
            console.log(val2);
            this.processList(val2.root, target! as HTMLElement, 'nav', 'button', '1');
          });
          hEl.removeAttribute('disabled');
        }

      })
    });
  }
  processList(node: any, parent: HTMLElement, controls: string, role: string, inputTabIndex: string) {
    const inpLabelCopy = inp_label.content.cloneNode(true) as HTMLElement;
    const inp = inpLabelCopy.firstElementChild;
    inp!.setAttribute('aria-labelledby', node.data.labelId);
    inp!.setAttribute('aria-controls', controls);
    inp!.setAttribute('role', role);
    inp!.setAttribute('tabIndex', inputTabIndex);
    inp!.id = node.data.controlId;
    const lbl = inpLabelCopy.lastElementChild as HTMLLabelElement;
    if(controls === 'nav'){
      lbl.className = 'down';
    }else if(node.items){
      lbl.className = 'right';
    }
    lbl!.id = node.data.labelId;
    lbl!.setAttribute('for', inp!.id);
    lbl!.innerText = node.data.labelText;
    parent.appendChild(inpLabelCopy);
    const ul = document.createElement('ul');
    ul.id = node.id;
    ul.setAttribute('role', 'menu');
    ul.setAttribute('aria-labelledby', lbl!.id);
    node.items.forEach((item: any) => {
      const li = document.createElement('li');
      li.setAttribute('role', 'none');

      if (item.sublist) {
        this.processList(item.sublist, li, 'nest', 'menuitem', '2');
        // <input aria-controls='nest' aria-haspopup='true' aria-labelledby='shop' id='link-shop' role='menuitem'
        // tabindex='2' type='checkbox'>
        // <label class='right' for='link-shop' id='shop' role='none' tabindex='-1'>Shop</label>
      } else {
        //li.innerHTML = item.text;
        if (item.link) {
          const lnk = item.link;
          const a = document.createElement('a');
          a.tabIndex = lnk.tabIndex;
          a.innerText = lnk.text;
          a.setAttribute('role', lnk.role);
          li.appendChild(a);
        }
      }

      ul.appendChild(li);
    })


    parent.appendChild(ul);
  }
}
customElements.define('co-depends-nested-dropdown', NestedDropDown);

