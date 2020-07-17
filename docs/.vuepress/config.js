module.exports = {
    title: 'ITDTP的',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '主页', link: '/'},
            { text: 'Guide', link: '/guide/'},
            { text: 'Back to Portfolio', link: 'https://irwinqi.com'},
        ],
        sidebar: {
            '/guide/' : [
                '',
                'frontend',
                'backend'
            ]
        }
    }
}