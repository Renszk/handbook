module.exports = {
    title: 'Handbook',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'}
        ],
        sidebar: { '/guide/': [
                {
                    title: 'Projects',   // required
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                        ['/guide/codepuzzle/', 'codepuzzle'],
                    ]
                },
                {
                    title: 'Communication',   // required
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                        ['/guide/communication/', 'communication']
                    ]
                },
                {
                    title: 'Other Rules',   // required
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                        ['/guide/others/', 'others']
                    ]
                },

            ]
        }
    }
}