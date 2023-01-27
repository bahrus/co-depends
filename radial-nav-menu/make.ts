import {EndUserProps as BeDefEUP} from 'be-definitive/types';
import {TemplMgmtProps, PSettings, RenderContext} from 'trans-render/lib/types';
import {Props, IMenuOptionProps, IMenuOptionsDerivedProps, IMenuOptionsEndUserProps, IMenuOptionActions} from './types';
import {beCloned, beMounted} from 'trans-render/lib/mixins/TemplMgmt.js';


const html = String.raw;
class RadialNavMenuVM extends HTMLElement{
    [html `<get-quick-options/>`](ctx: RenderContext){
        console.log({ctx});
    }
}
class MenuOptionsVM extends HTMLElement implements IMenuOptionActions{
    derive(self: this): IMenuOptionsDerivedProps {
        const {type, open, index} = self;
        return ({
            hyperlinkCss: `menu-${type}-option`,
            transitionDelay: `${(open ? 200 : 0) + 50*index}ms`,
            closed: !open,
            labelCss: type === 'quick' ? 'tooltip' : 'label'
        }) as IMenuOptionsDerivedProps;
    }
}

interface MenuOptionsVM extends IMenuOptionProps{}

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
                    isC:{
                        notify:{
                            toggleTo: {
                                key: 'open',
                                delay: 1000,
                            }
                        }
                    }
                }
            },
            superclass: RadialNavMenuVM
        } as BeDefEUP<Props & TemplMgmtProps<Props & HTMLElement>>,
    },
    // profileImageN: {
    //     be: 'ferried',
    // },
    menuOptionId: {
        be: 'definitive',
        having: {
            config:{
                derivedProps: ['closed', 'hyperlinkCss', 'transitionDelay', 'labelCss'],
                propDefaults:{
                    icon: '', label: '', url: '', open: false,
                    type: 'quick', index: 0, noshadow: true,
                    transform: {
                        aE: [{
                            href: 'url',
                            className: 'hyperlinkCss',
                        }] as PSettings<HTMLAnchorElement, IMenuOptionProps>,
                        '^': [{
                            disabled: 'closed',
                            '.style.transitionDelay': 'transitionDelay',
                        }] as PSettings<any, IMenuOptionProps>,
                        iE:[{
                            className: 'icon'
                        }]   as PSettings<HTMLElement, IMenuOptionProps>,
                        h3: [{
                            textContent: 'label',
                            className: 'labelCss',
                        }] as PSettings<HTMLElement, IMenuOptionProps>,
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