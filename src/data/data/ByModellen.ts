import { Project } from '../types'

export const ByModellen: Project = {
    title: 'City model',
    id: 'Bymodel',
    subtitle: 'Interactive installation at DAC',
    tags: [],
    content: [
        {
            type: 'video',
            src: "dac_bymodel_vid.mp4",
            content: '',
            tag: 'full-width'
        },
        {
            type: 'image',
            src: "dac_bymodel_1.jpg",
            content: ''
        },
        {
            type: 'image',
            src: "dac_bymodel_2.jpg",
            content: ''
        },
        {
            type: 'text',
            content:'The City model shows an overview of the street Vester Voldgade in Copenhagen. Each marked spot is fed with live login data from facebook and twitter visualising the current activity. The City model was part of the exhibition "Update" at Danish Centre of Architecture (DAC)", "My role was to create a system to easily change and update the traffic in the street and help out with the tracking done using 2 kinectV2 hanging in the ceiling'
        },
    ],
    heroImage: 'hero.jpg',
    settings: {},
    thumbnail: 'hero.jpg',
    links: [],
    client: 'Dansk Arkitektur Center'
}