import { Project } from '../types'

export const Ticks: Project = {
    title: 'Puugi Protsess / Ticks',
    id: 'Ticks',
    subtitle: 'An interactive theatre play consisting of 13 mini games played by the audience.',
    tags: ['Multiplayer games', 'open frameworks', 'theatre', 'mini games'],
    content: [
        {
            type: 'image',
            src: 'usertest2.jpg',
            content: '',
        },
        {
            type: 'image',
            content: '',
            src: 'tennis.jpg'
        },
        {
            type: 'image',
            content: '',
            src: 'audience.jpg'
        },
        {
            type: "text",
            content: 'The games are controlled via the 12 interactive tables throughout the theatre hall. The audience is divided in 2 teams of 36 people and compete though the 13 minigames',
            tag: 'full-width'
        },
        {
            type: 'image',
            content: '',
            src: 'audience2.jpg'
        },
        {
            type: 'image',
            content: '',
            src: 'show.jpg'
        },
        {
            type: 'text',
            content: 'Each game has a simple game mechanic, requiring the audience to collaborate',
            tag: 'full-width'
        },
        {
            type: 'video',
            content: 'In this game, they must fill up the factories. Each tick has a color and a symbol. In each factory there can not be two of the same symbol or two of the same color.',
            src: 'organize.mp4',
            tag: 'full-width'
        },
        {
            type: 'video',
            content: 'Some games requires the audience to collectively agree who should sacrifice themselves for the team. In this game, only 6 ticks will get though the gates, and only if everyone else stays behind the line, letting them',
            src: 'gates.mp4',
            tag: 'full-width'
        },
        {
            type: 'image',
            content: 'The tick elevator only works when 4 ticks stand on the start button. On each level of the elevator further 3 ticks will need to sacrifice themeselves so other can walk over the canyon',
            src: 'elevator_start.png',
            tag: 'full-width'
        },
        {
            type: 'image',
            content: 'Each games is build with box2D and can be played by 36 people.',
            src: 'elevator_debug.png',
            tag: 'full-width'
        },
        {
            type: 'video',
            content: '',
            src: 'maze.mp4',
            tag: 'full-width'
        },
        {
            type: 'text',
            content: 'The play is produced by the Estonian theatre group Erinevate Tubade Klubi/Cabaret Rhizome',
            tag: 'full-width'
        },
    ],
    heroImage: 'maze.png',
    settings: {},
    thumbnail: 'maze.png',
    links: [],
    client: 'Erinevate Tubade Klubi',
    location: 'Tallinn, Estonia'
}