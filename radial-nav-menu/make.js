import { beCloned, beMounted } from 'trans-render/lib/mixins/TemplMgmt.js';
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
                },
                propInfo: {
                    isC: {
                        notify: {
                            toggleTo: {
                                key: 'toggled',
                                delay: 1000,
                            }
                        }
                    }
                }
            }
        },
    },
    menuOptionId: {
        be: 'definitive',
        having: {
            config: {
                propDefaults: {
                    icon: '',
                    label: '',
                    url: '',
                    open: false,
                    closed: true,
                    hyperlinkCss: '',
                    transitionDelay: '0ms',
                    type: 'quick',
                    index: 0,
                    labelCss: 'tooltip',
                    noshadow: true,
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
