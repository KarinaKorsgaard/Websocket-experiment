import { Project } from '../types'

export const Fazer: Project = {
    title: 'Fazer interactive wall',
    id: 'Fazer',
    subtitle: 'A 15 * 3 meter interactive wall made for the new Fazer Visitor Centre in Vaanta, Helsinki.',
    tags: ['C++', 'openFrameworks', 'Open Sound Control', 'Installation', 'KinectV2'],
    content: [
        {
            type: 'image',
            src: 'hero.jpg',
            content: '',
            tag: 'full-width'
        },
        {
            type: 'image',
            src: '1.jpg',
            content: 'The installation is made with 4 kinect v. 2 cameras in the ceiling, which captures the silhouettes of the visitor and projects that to the visuals. The visitor can then push and trow the balls around the wall.'
        },
        
        {
            type: 'image',
            src: '2.jpg',
            content: 'The visuals are supposed to fit and extend the physical room, designed by Ateliér Sotoma.'
        },
       
        {
            type: 'image',
            src: '3.jpg',
            content: 'Final expression became more child-friendly and playful, using the visual elements from the physical room.'
        },
        {
            type: 'image',
            src: '4.jpg',
            content: ''
        },
        {
            type: 'image',
            src: '5.jpg',
            content: ''
        },
        {
            type: 'image',
            src: '6.png',
            content: ''
        },
    ],
    heroImage: 'hero.jpg',
    settings: {},
    thumbnail: 'hero.jpg',
    links: [],
    client: 'Fazer',
    location: 'Helsinki',
}
