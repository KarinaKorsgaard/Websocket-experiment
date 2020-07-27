import { Project } from '../types'
export const KvanteKarina: Project = {
    title: 'Quantum Kate AR',
    id: 'Kvante',
    subtitle: 'Quantum Kate AR is an augmented reality game aiming to teach children about quantum chromodynamics. In this project my role was concept design, prototyping and development',
    tags: ['C#', 'game', 'Unity3D', 'Linq', 'ARCore', 'ARKit'],
    hero: {
        type: 'video',
        src: 'Quantum Kate AR Game - case video.mp4',
        content: ''
    },
    content: [
        
        /* {
            type: 'video',
            src: "GameRules_1_findSpot.mp4",
            content: "Find a good spot for playing, where furniture is not in the way."
        },
        {
            type: 'video',
            src: "GameRules_2_connectQuarks.mp4",
            content: "Connect quarks that fit together to create particles."
        },
        {
            type: 'video',
            src: "GameRules_3_particles.mp4",
            content: "Unlock all particles and and beat your high-score."
        }, */
        {
            type: 'video',
            src: "01_room.mp4",
            content: "The game center is an interactive 360 view of Quantum Kate’s room. From her room you can start the game, learn more about quarks and view the high-score board."
        },
        {
            type: 'video',
            src: "02_quarks.mp4",
            content: "The goal of the game is to discover as many particles as possible by connecting quarks! Set up as an infinite puzzle game, children almost accidentally learn about quantum chromo dynamics while playing the game! Genius - right?"
        },
        {
            type: 'video',
            src: "03_achievements.mp4",
            content: "All particles discovered during the game are saved in an interactive high-score board. On the high score board you can learn more about each individual particle you discovered. The more particles you collect, the more you level up."
        }
    ],
    heroImage: '06_feature_graphic.png',
    settings: {},
    thumbnail: '06_feature_graphic.png',
    links: [],
    client: 'Syddansk Universitet'
}
