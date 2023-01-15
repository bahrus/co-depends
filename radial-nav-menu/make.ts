import {EndUserProps as BeDefEUP} from 'be-definitive/types';
import {TemplMgmtProps, PSettings} from 'trans-render/lib/types';
import {Props, IMenuOptionProps, IMenuOptionsEndUserProps, IMenuOptionActions} from './types';
import {beCloned, beMounted} from 'trans-render/lib/mixins/TemplMgmt.js';

class MenuOptionsVM extends HTMLElement implements IMenuOptionActions{
    derive(self: this): Partial<IMenuOptionProps> {
        const {type, open, index} = self;
        return ({
            hyperlinkCss: `menu-${type}-option`,
            transitionDelay: `${(open ? 200 : 0) + 50*index}ms`,
            closed: !open,
        }) as Partial<IMenuOptionProps>
    }
}

interface MenuOptionsVM extends IMenuOptionProps{}

export const make = {
    ":host": {
        be: 'definitive',
        having: {
            config: {
                propDefaults: {
                    toggled: false,
                    isC: true,
                },
                propInfo: {
                    isC:{
                        notify:{
                            toggleTo: {
                                key: 'toggled',
                                delay: 1000,
                            }
                        }
                    }
                }
            }
        } as BeDefEUP<Props & TemplMgmtProps<Props & HTMLElement>>,
    },
    menuOptionId: {
        be: 'definitive',
        having: {
            config:{
                propDefaults:{
                    icon: '',
                    label: '',
                    url: '',
                    open: false,
                    closed: true,
                    hyperlinkCss: '',
                    type: 'quick',
                    index: 0,
                    transform: {
                        a: [{
                            href: 'url',
                            className: 'hyperlinkCss',
                            disabled: 'closed',
                        }] as PSettings<HTMLAnchorElement & HTMLInputElement>,
                        '^': [{
                            'style.transitionDelay': 'delay'
                        }] as PSettings<any>,

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
        } as BeDefEUP<IMenuOptionProps & TemplMgmtProps<Props & HTMLElement>, IMenuOptionActions>
    }
}