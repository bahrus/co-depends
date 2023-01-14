const iff = true;
export const make = {
    ":host": {
        be: 'definitive',
        having: {
            config: {
                propDefaults: {
                    isDarkMode: false,
                    isShrinkView: false,
                    hydratingTransform: {
                        viewButtonP: [, { click: { prop: 'isShrinkView', toggleProp: true } }]
                    },
                    transform: {
                        sidebarContainerP: [, , { '.shrink': 'isShrinkView' }],
                        viewButtonP: [iff,
                            { if: 'isShrinkView' },
                            [{ ariaLabel: ["Expand Sidebar"] }],
                            [{ ariaLabel: ["Shrink Sidebar"] }]
                        ]
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
