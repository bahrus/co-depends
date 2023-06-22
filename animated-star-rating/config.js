export const config = {
    propDefaults: {
        value: '0',
        rating: 0,
    },
    propInfo: {
        value: {
            notify: {
                toFormValue: true,
                parseTo: {
                    key: 'rating',
                    as: 'number'
                },
                dispatch: true,
            },
        },
        rating: {
            notify: {
                toStringTo: 'value',
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
                },
                dispatch: true,
            }
        }
    },
    formAss: true,
};
