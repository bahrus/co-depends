import {EndUserProps as BeDefEUP} from 'be-definitive/types';
import { TemplMgmtProps, beCloned, beMounted } from 'trans-render/lib/mixins/TemplMgmt.js';
import {EndUserProps, Props, Actions} from './types';

class ViewModel extends HTMLElement implements Actions{
    getStatusClass({userStatus}: this){
        return {
            userStatusCls: userStatus.replace(/\s+/g, "-").toLowerCase(),
        } as Partial<Props>
    }
}

interface ViewModel extends Props{}

export const make = {
    "beScopedAs": {
        be: 'scoped',
        waitForResolved: true,
    },
    ":host": {
        be: 'definitive',
        having: {
            config: {
                propDefaults:{
                    userStatus: 'Logged Out',
                    userStatusCls: 'logged-out',
                    transform:{
                        appId:[{className: 'userStatusCls'}]
                    }
                },
                actions:{
                    ...beCloned,
                    getStatusClass: 'userStatus',
                    ...beMounted,
                },

            },
            superclass: ViewModel
        } as BeDefEUP<Props & TemplMgmtProps<Props & HTMLElement>, Actions>,
    },
    "<>": {
        be: 'spawn-of'
    }
}