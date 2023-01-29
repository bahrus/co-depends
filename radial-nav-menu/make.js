import { beCloned, beMounted } from 'trans-render/lib/mixins/TemplMgmt.js';
const html = String.raw;
class RadialNavMenuVM extends HTMLElement {
    [html `<quick-options/>`](ctx, fragment) {
        console.log({ ctx });
        const { target } = ctx;
        target.innerHTML = html `<div>Hello, world</div>`;
    }
    [html `<menu-option/>`](ctx, fragment) {
    }
}
class MenuOptionsVM extends HTMLElement {
    derive(self) {
        const { type, open, index } = self;
        return ({
            hyperlinkCss: `menu-${type}-option`,
            transitionDelay: `${(open ? 200 : 0) + 50 * index}ms`,
            closed: !open,
            labelCss: type === 'quick' ? 'tooltip' : 'label'
        });
    }
}
export const make = {
    ":host": {
        be: 'definitive',
        having: {
            config: {
                propDefaults: {
                    open: false,
                    isC: true,
                    quickOptions: [
                        { icon: "fa-solid fa-bell", label: "Notifications", url: "https://codepen.io/Hyperplexed" },
                        { icon: "fa-solid fa-gear", label: "Settings", url: "https://codepen.io/Hyperplexed" },
                        { icon: "fa-solid fa-moon", label: "Theme", url: "https://codepen.io/Hyperplexed" }
                    ],
                    transform: {
                        menuQuickOptionsId: html `
                            <inner-join with option, index of host.quickOptions>
                                <menu-option 
                                    key, icon, label, url, in option;
                                    index;
                                    type in host;
                                /> 
                            </inner-join>`
                    },
                },
                propInfo: {
                    isC: {
                        notify: {
                            toggleTo: {
                                key: 'open',
                                delay: 1000,
                            }
                        }
                    }
                }
            },
            superclass: RadialNavMenuVM
        },
    },
    // profileImageN: {
    //     be: 'ferried',
    // },
    menuOptionId: {
        be: 'definitive',
        having: {
            config: {
                derivedProps: ['closed', 'hyperlinkCss', 'transitionDelay', 'labelCss'],
                propDefaults: {
                    icon: '', label: '', url: '', open: false,
                    type: 'quick', index: 0, noshadow: true,
                    transform: {
                        aE: [{
                                href: 'url',
                                className: 'hyperlinkCss',
                            }],
                        '^': [{
                                disabled: 'closed',
                                '.style.transitionDelay': 'transitionDelay',
                            }],
                        iE: [{
                                className: 'icon'
                            }],
                        h3: [{
                                textContent: 'label',
                                className: 'labelCss',
                            }],
                    }
                },
                actions: {
                    ...beCloned,
                    derive: {
                        ifKeyIn: ['type', 'open', 'index']
                    },
                    ...beMounted,
                }
            },
            superclass: MenuOptionsVM,
        }
    }
};
