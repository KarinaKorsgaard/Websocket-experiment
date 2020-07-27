import { Project } from '../types'

export const Apotekerne: Project = {
    title: 'Viden til forskel',
    id: 'Apotekerne',
    subtitle: 'Quiz app for employees of the danish pharmacies, Apotekerne',
    tags: ['React native', 'App'],
    
    content: [
        /* {
            type: 'image',
            content: '',
            src: '01.jpg'
        },
        {
            type: 'image',
            content: '',
            src: '02.jpg'
        },
        {
            type: 'image',
            content: '',
            src: '03.jpg'
        },
        {
            type: 'image',
            content: '',
            src: '04.jpg'
        }, */
        {
            type: 'video',
            content: 'The design of the app uses a unconventional style for the menu, requiring a lot of customization',
            src: 'krav_1.mp4'
        },
        {
            type: 'video',
            content: 'The app integrates with firebase messaging for push notifications',
            src: 'ny_artikel.mp4'
        },
        {
            type: 'video',
            content: 'Users of the app can save up points by answering quizzes',
            src: 'kravquiz.mp4'
        },
    ],
    heroImage: 'hero.jpg',
    settings: {},
    thumbnail: 'thumb.jpg',
    links: [],
    client: 'Apoteket'
}