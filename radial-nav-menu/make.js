import { beCloned, beMounted } from 'trans-render/lib/mixins/TemplMgmt.js';
const html = String.raw;
class RadialNavMenuVM extends HTMLElement {
    [html `<get-quick-options/>`](ctx) {
        console.log({ ctx });
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
                    transform: {
                        menuQuickOptionsId: html `<get-quick-options/>`
                    }
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
