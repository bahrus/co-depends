import { H2H_TF, instantiateTemplate, transfer } from 'h2h-tf/h2h-tf.js';
const inp_label = document.createElement('template');
inp_label.innerHTML = /* html */ `
      <input type='checkbox'  aria-haspopup='true' role='button' tabindex='1'/>
      <label for='link-top' id='menu' role='none' tabindex='-1'></label>
`;
const attribs = {
    nav: {
        'aria-controls': 'nav'
    }
};
function addAttribs(el) {
}
export class ListConverter extends H2H_TF {
    connectedCallback() {
        this._transform = {
            'ul': (context) => {
                const el = context.el;
                const id = el.id;
                instantiateTemplate(inp_label, {
                    'input': [
                        ['aria-labelledby', el.dataset.labelId]
                    ]
                });
                const ul = document.createElement('ul');
                transfer(ul, context.el, ['id']);
                context.leaf.appendChild(ul);
                context.leaf = ul;
                context.stack.push(ul);
                context.processChildren = true;
            },
            'li': (context) => {
                innerText = context.el.firstChild.nodeValue;
                const span = document.createElement('span');
                span.innerText = innerText;
                context.leaf.appendChild(span);
                context.leaf = span;
                context.stack.push(span);
                context.processChildren = true;
            }
        };
        super.connectedCallback();
    }
}
//# sourceMappingURL=ListConverter.js.map