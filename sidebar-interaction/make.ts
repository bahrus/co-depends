import {EndUserProps as BeDefEUP} from 'be-definitive/types';
import {TemplMgmtProps} from 'trans-render/lib/mixins/TemplMgmt.js';
import {Props} from './types';
import {EndUserProps as BeHdEUP} from 'be-headed/types';

const conditional = true;
export const make = {
    ":host": {
        be: 'definitive',
        having: {
            config:{
                propDefaults: {
                    isDarkMode: false,
                    isShrinkView: false,
                    hydratingTransform: {
                        viewButtonP: [,{click: {prop: 'isShrinkView', toggleProp: true}}],
                        themeToggleP: [,{click: {prop: 'isDarkMode', toggleProp: true}}]
                    },
                    transform: {
                        sidebarContainerP: [,,{'.shrink': 'isShrinkView'}],
                        viewButtonP: [conditional, 
                            {if: 'isShrinkView'}, 
                                [{ariaLabel: ["Expand Sidebar"], title: ["Expand"]}], 
                                [{ariaLabel: ["Shrink Sidebar"], title: ["Shrink"]}]
                        ],
                        themeToggleLabelP: [,,{'.switched': 'isDarkMode'}],
                        streamOratorWrapperP: [,,{'.dark': 'isDarkMode'}]
                    }
                }
            }
        } as BeDefEUP<Props & TemplMgmtProps<Props>>,
    },
    templateE: {
        be: 'headed',
        having: {
            id: 'fonts.gooleapis.com-css-family-Poppins:wght@400;500'
        } as BeHdEUP
    }
};