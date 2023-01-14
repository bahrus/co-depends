import {EndUserProps as BeDefEUP} from 'be-definitive/types';
import {Props} from './types';
import {EndUserProps as BeBndEUP} from 'be-bound/types';

export const make = {
    ":host": {
        be: 'definitive',
        having: {
            config:{
                propDefaults:{
                    rating: '0',
                    ratingAsNumber: 0,
                },
                propInfo:{
                    rating: {
                        notify: {
                            toFormValue: true,
                            parseTo: {
                                key: 'ratingAsNumber',
                                as: 'number'
                            }
                        }
                    },
                    ratingAsNumber: {
                        notify: {
                            toStringTo: 'rating',
                            mapTo: {
                                key: 'ratingDescription',
                                map: [
                                    [0, 'Not rated'],
                                    [1, 'Terrible'],
                                    [2, 'Bad'],
                                    [3, 'OK'],
                                    [4, 'Good'],
                                    [5, 'Excellent']
                                ]

                            }
                        }
                    }
                },
                formAss: true,
            }
        } as BeDefEUP<Props>,
    },
    formE: {
        be: 'bound',
        having: {
            propBindings: [
                ['.rating.value', 'rating']
            ]
        } as BeBndEUP<any, Props>,
    }
}