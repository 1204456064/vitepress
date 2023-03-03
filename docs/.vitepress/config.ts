module.exports = {
    title: '1204456064',
    description: 'Just Do It',
    lang: 'zh-CN',
    // 头部head
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        // 启动页面丝滑滚动
        smoothScroll: true,
        logo: '/logo.png',
        // 导航栏配置
        nav: [
            {text: '指南', link: '/guide/' },
            {text: '学习', link: '/codereview/' },
            {text: 'Gitlub', link: 'https://github.com/1204456064/vitepress'}
        ],
        sidebar: {
            '/guide/': getSideBarGuide(),
            '/codereview/': getSideBarCodeReview()
        },
        footer: {
            message: '',
            copyright: 'Copyright © 2022-2099 1204456064--chenwen'
        }
    }
}

function getSideBarGuide() {
    return [
        {
            text:'指南',
            items: [
                { text: '介绍', link: '/guide/' },
                { text: 'markdown使用指南', link: '/guide/markdown' },
                { text: 'uni-app本地打包', link: '/guide/localPackage' },
                { text: 'uni-app扫码带提示音', link: '/guide/languageBroadcasting' },
                { text: '扫码方式之广播录入', link: '/guide/scanType' },
            ],
        },
    ]
}

function getSideBarCodeReview() {
    return [
        {
            text:'学习',
            items: [
                // {
                //     text:'test',
                //     link:'/codereview/2022.01.md',
                // },
            ],
        },
    ]
}


