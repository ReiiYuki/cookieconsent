import { defineConfig } from "vitepress"
import 'dotenv/config'
import { GithubIcon } from "../components/icons";

export default defineConfig({
    lang: 'en-US',
    title: 'CookieConsent',
    description: 'Simple cross-browser cookie-consent plugin written in vanilla js',
    lastUpdated: false,

    head: [
        ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
        ['link', {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true}],
        ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'}],
        ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'}]
    ],

    themeConfig: {
        repo: 'orestbida/cookieconsent',
        docsDir: 'docs',
        docsBranch: 'docs',
        editLinks: true,
        editLinkText: 'Suggest changes to this page',
        algolia: {
            appId: process.env.ALGOLIA_APP_ID,
            apiKey: process.env.ALGOLIA_API_KEY,
            indexName: process.env.ALGOLIA_INDEX_NAME
        },

        nav: [
            {
                text: 'Guide',
                link: '/essential/getting-started.html'
            },
            {
                text: 'Config Reference',
                link: '/reference/configuration-reference.html'
            },
            {
                text: 'API Reference',
                link: '/reference/api-reference.html'
            },
            {
                icon: GithubIcon,
                ariaLabel: 'Github page',
                link: 'https://github.com/orestbida/cookieconsent'
            }
        ],

        sidebar: {
            '/reference/': [{
                children: [
                    { text: 'Config Reference', link: '/reference/configuration-reference' },
                    { text: 'API Reference', link: '/reference/api-reference' },
                ]
            }],
            '/advanced/': getGuideSidebar(),
            '/': getGuideSidebar(),
        },
    }
});


function getGuideSidebar() {
    return [
        {
            text: 'Essential',
            children: [
                { text: 'Introduction', link: '/essential/introduction' },
                { text: 'Getting Started', link: '/essential/getting-started' },
            ]
        },
        {
            text: 'Advanced',
            children: [
                { text: 'Language Config', link: '/advanced/language-configuration' },
                { text: 'UI Customization', link: '/advanced/ui-customization' },
                { text: 'Callbacks and Events', link: '/advanced/callbacks-events' },
                { text: 'Custom Attribute', link: '/advanced/custom-attribute' },
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