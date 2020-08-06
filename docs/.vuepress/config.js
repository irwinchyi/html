module.exports = {
    title: 'ITDTP Notes',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Cinema 4D',
            items: [
                {text: 'C4D', link: '/Cinema 4D/'},
                {text: 'Octane', link: '/Cinema 4D/Octane/'},
            ]  
        },
        { text: 'AE',
            items: [
                {text: 'AE Pending', link: '/Cinema 4D/'},
                {text: 'Pending', link: '/Cinema 4D/Octane/'},
            ]  
        },
        { text: '语法',
            items: [
                {text: '时态', link: '/Grammar/Tense/'},
                {text: 'Octane', link: '/Cinema 4D/Octane/'},
            ]  
        },
        { text: 'Fitness',
            items: [
                {text: 'CPT', link: '/Exercise/CPT/'},
                {text: 'Exercise Science', link: '/Exercise/Exercise Science/'},
            ]  
        },
            { text: 'Back to Portfolio', link: 'https://irwinqi.com'},
        ],
        sidebar: 'auto',
    },
    plugins: [
    "vuepress-plugin-auto-sidebar",{
        nav: true
        },
    '@vuepress/last-updated',
    ]
};