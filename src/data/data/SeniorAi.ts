import { Project } from '../types'

export const SeniorAi: Project = {
    title: 'Senior AI',
    id: 'SeniorAI',
    subtitle: 'A bartender machine that takes dance moves instead of money. And only serves one kind of drink.',
    tags: ['C++', 'box2D', 'openPose', 'Supervised Machine Learning', 'electronics', 'Arduino', 'Installation'],
    content: [
        {
            type: 'text',
            content: 'The bartender uses a webcam and openPose to estimate a human skeleton. This data is then sent through a random forrest classifier trained to recognize a number of different poses <br> When the user steps in, the bartender selects 3 random poses that the user needs to match within a certain time span. If the user succeeds, an arduino in combination with a ball valve serves a drink from a cocktail dispenser.<br>Using machine learning allowed me to quickly test which set of poses were the right ones to teach the bartender.<br>OpenPose skeleton model data is sent to a random forest classifier and interpreted as 1 of 9 poses. If the user hits 3 in row, a drink it served',
            tag:'full-width'
        },
        
        { type: 'video', src: "senior_party.mp4", content: "How it works" },
        { type: 'video', src: "senior_users.mp4", content: "Shots of the guests from the party" },
        { type: 'video', src: "senior_production.mp4", content: "During prototyping" }

    ],
    heroImage: 'hero.jpg',
    settings: {},
    thumbnail: 'hero.jpg',
    links: [],
    client: 'MolaLab',
    location: 'Copenhagen',
}
