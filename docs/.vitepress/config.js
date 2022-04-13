import { defineConfig } from "vitepress"
import 'dotenv/config'

export default defineConfig({
    lang: 'en-US',
    title: 'CookieConsent',
    description: 'Simple cross-browser cookie-consent plugin written in vanilla js',
    lastUpdated: true,

    themeConfig: {
        repo: 'orestbida/cookieconsent',
        docsDir: 'docs',
        docsBranch: 'docs',
        lastUpdated: 'Last Updated',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        algolia: {
            appId: process.env.ALGOLIA_APP_ID,
            apiKey: process.env.ALGOLIA_API_KEY,
            indexName: process.env.ALGOLIA_INDEX_NAME
        },

        nav: [
            {
                text: 'Demo Playground',
                link: 'https://orestbida.com/demo-projects/cookieconsent/'
            },
            {
                text: 'Latest release',
                link: 'https://github.com/orestbida/cookieconsent/releases'
            }
        ],

        sidebar: {
            '/': getGuideSidebar(),
            '/advanced/': getGuideSidebar()
        },
    }
});


function getGuideSidebar() {
    return [
        {
            text: 'Introduction',
            children: [
                { text: 'What you should know', link: '/introduction/must-know' },
                { text: 'Getting Started', link: '/introduction/getting-started' },
            ]
        },
        {
            text: 'Advanced',
            children: [
                { text: 'Configuration Reference', link: '/advanced/configuration-reference' },
                { text: 'API Reference', link: '/advanced/api-reference' },
                { text: 'UI Customization', link: '/advanced/ui-customization' },
                { text: 'Callbacks and Events', link: '/advanced/callbacks-events' },
                { text: 'Custom Button Actions', link: '/advanced/button-actions' },
                { text: 'Scripts Management', link: '/advanced/manage-scripts' },
                { text: 'Revision Management', link: '/advanced/revision-management'}
            ]
        },
        {
            text: 'Additional resources',
            children: [
                { text: 'FAQ', link: '/additional/faq' },
                { text: 'Troubleshooting', link: '/additional/troubleshooting' },
                { text: 'License', link: '/additional/license' },
            ]
        }
    ]
}