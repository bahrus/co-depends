import {EndUserProps as BeDefEUP} from 'be-definitive/types';
import {EndUserProps} from './types';
import {TemplMgmtProps} from 'trans-render/lib/mixins/TemplMgmt';

export const make = {
    ":host": {
        be: 'definitive',
        having: {
            config:{
                propDefaults:{
                    vertical: false,
                    hydratingTransform: {
                        directionToggleId:[,{click:{prop: 'vertical', toggleProp: true}}]
                    },
                    transform: {
                        directionToggleId: [,,{'.toggle--vertical': 'vertical'}],
                        wrapperC: [,,{'.wrapper--vertical': 'vertical'}],
                        marqueeCss: [,,{'.marquee--vertical': 'vertical'}]
                    }
                }
            }
        } as BeDefEUP<EndUserProps & TemplMgmtProps>,
    },
}