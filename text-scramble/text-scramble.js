import { XtallatX } from 'xtal-latx/xtal-latx.js';
import { define } from 'xtal-latx/define.js';
// Based on https://codepen.io/soulwire/pen/mErPAK
export class TextScramble extends XtallatX(HTMLElement) {
    //resolve: any;
    constructor() {
        super();
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    static get is() {
        return 'co-depends-text-scramble';
    }
    static get observedAttributes() {
        return super.observedAttributes.concat(['text']);
    }
    connectedCallback() {
        this._upgradeProperties(['text']);
    }
    attributeChangedCallback(n, ov, nv) {
        super.attributeChangedCallback(n, ov, nv);
        switch (n) {
            case 'text':
                this._text = nv;
                this.setText(ov, nv);
                break;
        }
    }
    get text() {
        return this._text;
    }
    set text(nv) {
        this.attr('text', nv);
    }
    setText(oldText, newText) {
        if (oldText === null)
            oldText = '';
        const length = Math.max(oldText.length, newText.length);
        //const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        //return promise;
    }
    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            }
            else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            }
            else {
                output += from;
            }
        }
        this.innerHTML = output;
        if (complete === this.queue.length) {
            this.de('text-setting-complete', {}, true);
        }
        else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}
define(TextScramble);
//# sourceMappingURL=text-scramble.js.map