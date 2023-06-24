export const config = {
    propDefaults: {
        isDarkMode: false,
        isShrinkView: false,
    },
    derivedProps: ['viewButtonPartProps'],
    propInfo: {
        isShrinkView: {
            notify: {
                mapTo: {
                    key: "viewButtonPartProps",
                    map: [
                        [true, { ariaLabel: 'Expand SideBar', title: 'Expand' }],
                        [false, { ariaLabel: 'Shrink Sidebar', title: 'Shrink' }]
                    ]
                }
            }
        }
    }
};
