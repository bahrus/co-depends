import {EndUserProps as BeDefEUP} from 'be-definitive/types';
import { TemplMgmtProps, beCloned, beMounted } from 'trans-render/lib/mixins/TemplMgmt.js';
import {EndUserProps, Props, Actions} from './types';

interface INumberUtility {
    clamp: (min: number, value: number, max: number) => number;
    rand: (min: number, max: number) => number;
}
  
const N: INumberUtility = {
    clamp: (min: number, value: number, max: number) => Math.min(Math.max(min, value), max),
    rand: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
}
  
interface ITimeUtility {
    format: (date: Date) => string;
    formatHours: (hours: number) => number;
    formatSegment: (segment: number) => string | number;
}

enum Default {
    PIN = "1234"
}

const T: ITimeUtility = {
    format: (date: Date): string => {
      const hours = T.formatHours(date.getHours()),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();
      return `${hours}:${T.formatSegment(minutes)}`;
    },
    formatHours: (hours: number): number => {
      return hours % 12 === 0 ? 12 : hours % 12;
    },
    formatSegment: (segment: number): string | number => {
      return segment < 10 ? `0${segment}` : segment;
    }
  }
  
  interface ILogInUtility {
    verify: (pin: string) => Promise<boolean>;
  }
  
  const LogInUtility: ILogInUtility = {
    verify: async (pin: string): Promise<boolean> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(pin === Default.PIN) {
            resolve(true);
          } else {
            reject(`Invalid pin: ${pin}`);
          }
        }, N.rand(300, 700));
      });
    }
  }

class ViewModel extends HTMLElement implements Actions{
    provideUIHints({userStatus}: this){
        return {
            userStatusCls: userStatus.replace(/\s+/g, "-").toLowerCase(),
            notInErrorState: userStatus !== 'Log In Error',
            pinEnteringNotEnabled: userStatus === 'Logging In' || userStatus === 'Log In Error'
        } as Partial<Props>
    }

    async verifyLogin(pin: string){
        this.userStatus = 'Verifying Log In';
        try{
            if(await LogInUtility.verify(pin)){
                this.userStatus = 'Logged In';
            }
        }catch(e){
            console.error(e);
            this.userStatus ='Log In Error';
        }
    }


}

interface ViewModel extends Props{}

export const make = {
    // "beScopedAs": {
    //     be: 'scoped',
    //     waitForResolved: true,
    // },
    ':host': {
        be: 'definitive',
        having: {
            config: {
                propDefaults:{
                    userStatus: 'Logged Out',
                    userStatusCls: 'logged-out',
                    notInErrorState: true,
                    transform:{
                        appId:[{className: 'userStatusCls'}]
                    }
                },
                actions:{
                    ...beCloned,
                    provideUIHints: 'userStatus',
                    ...beMounted,
                },

            },
            superclass: ViewModel
        } as BeDefEUP<Props & TemplMgmtProps<Props & HTMLElement>, Actions>,
    },
    '<>': {
        be: 'spawn-of'
    },
    'bound':{
        be: 'bound'
    }
}