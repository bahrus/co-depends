import { beCloned, beMounted } from 'trans-render/lib/mixins/TemplMgmt.js';
class ViewModel extends HTMLElement {
    getStatusClass({ userStatus }) {
        return {
            userStatusCls: userStatus.replace(/\s+/g, "-").toLowerCase(),
        };
    }
}
export const make = {
    // "beScopedAs": {
    //     be: 'scoped',
    //     waitForResolved: true,
    // },
    ':host': {
        be: 'definitive',
        having: {
            config: {
                propDefaults: {
                    userStatus: 'Logged Out',
                    userStatusCls: 'logged-out',
                    transform: {
                        appId: [{ className: 'userStatusCls' }]
                    }
                },
                actions: {
                    ...beCloned,
                    getStatusClass: 'userStatus',
                    ...beMounted,
                },
            },
            superclass: ViewModel
        },
    },
    '<>': {
        be: 'spawn-of'
    },
    'bound': {
        be: 'bound'
    }
};
