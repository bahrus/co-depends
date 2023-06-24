import {Config} from '../../xtal-element/types';
import {Props} from './types';

export const config: Config<Props> = {
    propDefaults:{
        isDarkMode: false,
        isShrinkView: false,
    },
    derivedProps: ['viewButtonPartProps'],
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