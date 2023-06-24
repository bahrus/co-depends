import {Config} from '../../xtal-element/types';
import {Props} from './types';

export const config: Config<Props> = {
    propDefaults:{
        viewButtonPartProps: {},
        isDarkMode: false,
        isShrinkView: false,
    },
    propInfo: {
        isShrinkView: {
            notify:{
                mapTo: {
                    key: "viewButtonPartProps",
                    map:[
                        [true, {ariaLabel: 'Expand SideBar', title: 'Expand'} as Partial<Element>],
                        [false, {ariaLabel: 'Shrink Sidebar', title: 'Shrink'} as Partial<Element>]
                    ]
                }
            }
        }
    }
}