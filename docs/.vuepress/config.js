module.exports = {
    title: 'ITDTP的',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '主页', link: '/'},
            { text: 'AE', link: '/ae/'},
            { text: 'C4D', link: '/c4d/'},
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