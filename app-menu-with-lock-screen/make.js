import { beCloned, beMounted } from 'trans-render/lib/mixins/TemplMgmt.js';
const N = {
    clamp: (min, value, max) => Math.min(Math.max(min, value), max),
    rand: (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
};
var Default;
(function (Default) {
    Default["PIN"] = "1234";
})(Default || (Default = {}));
const T = {
    format: (date) => {
        const hours = T.formatHours(date.getHours()), minutes = date.getMinutes(), seconds = date.getSeconds();
        return `${hours}:${T.formatSegment(minutes)}`;
    },
    formatHours: (hours) => {
        return hours % 12 === 0 ? 12 : hours % 12;
    },
    formatSegment: (segment) => {
        return segment < 10 ? `0${segment}` : segment;
    }
};
const LogInUtility = {
    verify: async (pin) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (pin === Default.PIN) {
                    resolve(true);
                }
                else {
                    reject(`Invalid pin: ${pin}`);
                }
            }, N.rand(300, 700));
        });
    }
};
class ViewModel extends HTMLElement {
    provideUIHints({ userStatus }) {
        return {
            userStatusCls: userStatus.replace(/\s+/g, "-").toLowerCase(),
            notInErrorState: userStatus !== 'Log In Error',
            pinEnteringNotEnabled: userStatus === 'Logging In' || userStatus === 'Log In Error'
        };
    }
    async verifyLogin(pin) {
        this.userStatus = 'Verifying Log In';
        try {
            if (await LogInUtility.verify(pin)) {
                this.userStatus = 'Logged In';
            }
        }
        catch (e) {
            console.error(e);
            this.userStatus = 'Log In Error';
        }
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
                    notInErrorState: true,
                    transform: {
                        appId: [{ className: 'userStatusCls' }]
                    }
                },
                actions: {
                    ...beCloned,
                    provideUIHints: 'userStatus',
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
