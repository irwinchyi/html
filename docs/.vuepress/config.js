module.exports = {
    title: 'ITDTP的',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '主页', link: '/'},
            { text: 'AE', link: '/ae/'},
            { text: 'C4D', 
                items: [
                    {
                    text: '建模 Modeling', items: [
                        { text: 'Cinema 4D', link: '/c4d/01.Cinema4D/'},
                        { text: 'Cinema 4D', link: '/c4d/01.Cinema4D/'},
                    ]
                        },
                    {
                    text: '渲染 Rendering', items: [
                        { text: 'Octane', link: '/c4d/02.Octane/'},
                        { text: 'Redshift', link: '/c4d/03.Redshift/'},
                    ]
                        },
                ]
            },
            { text: 'Code',
                items: [
                    {
                        text: '前端 Front End', items: [
                            { text: '前端开发指南', link: '/ae/'},
                        ]
                    }
                ],
            link: '/code/'},
            { text: 'Back to Portfolio', link: 'https://irwinqi.com'},
        ],
        sidebar: {
            '/ae/' : [
                '',
                'frontend',
                'backend'
            ]
        }
    }
}