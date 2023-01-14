const conditional = true;
export const make = {
    ":host": {
        be: 'definitive',
        having: {
            config: {
                propDefaults: {
                    isDarkMode: false,
                    isShrinkView: false,
                    hydratingTransform: {
                        viewButtonP: [, { click: { prop: 'isShrinkView', toggleProp: true } }],
                        themeToggleP: [, { click: { prop: 'isDarkMode', toggleProp: true } }]
                    },
                    transform: {
                        sidebarContainerP: [, , { '.shrink': 'isShrinkView' }],
                        viewButtonP: [conditional,
                            { if: 'isShrinkView' },
                            [{ ariaLabel: ["Expand Sidebar"], title: ["Expand"] }],
                            [{ ariaLabel: ["Shrink Sidebar"], title: ["Shrink"] }]
                        ],
                        themeToggleLabelP: [, , { '.switched': 'isDarkMode' }],
                        streamOratorWrapperP: [, , { '.dark': 'isDarkMode' }]
                    }
                }
            }
        },
    },
    templateE: {
        be: 'headed',
        having: {
            id: 'fonts.gooleapis.com-css-family-Poppins:wght@400;500'
        }
    }
};
