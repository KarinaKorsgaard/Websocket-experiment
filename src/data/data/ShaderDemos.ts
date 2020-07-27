import { Project } from '../types'

export const ShaderDemos: Project = {
    title: 'WebGL experiments',
    id: 'ShaderDemos',
    subtitle: 'Experiments with webGL',
    tags: ['webGL', 'regl', 'generative visuals'],
    content: [
        {
            type: 'video',
            content: '',
            src: 'voro_displacement.mp4',
            tag: 'full-width'
        },
        {
            type: 'video',
            src: 'labyrinth.mp4',
            content: '',
        },
        {
            type: 'video',
            content: '',
            src: 'ray.mp4'
        },
        {
            type: 'video',
            content: '',
            src: 'ray2.mp4'
        },
        {
            type: 'video',
            content: '',
            src: 'transition.mp4',
            tag: 'full-width'
        },
        
    ],
    heroImage: 'hero.png',
    settings: {},
    thumbnail: 'hero.png',
    links: [],
    client: 'No one',
    location: 'Everywhere'
}