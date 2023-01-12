import {EndUserProps as BeDefEUP} from 'be-definitive/types';
import {EndUserProps as BeFdEUP} from 'be-ferried/types';

export const make = {
    ":host": {
        be: 'definitive',
        having: {

        } as BeDefEUP,
    },
    slot: {
        be: 'ferried',
        having: {
            xsltHref: 'co-depends/responsive-honeycomb/ferry.xslt',
            //debug: true,
        } as BeFdEUP
    } 
}