export const config = {
    propDefaults: {
        isDarkMode: false,
        isShrinkView: false,
    },
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
