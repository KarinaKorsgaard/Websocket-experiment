export type contentBlock = {
    type: 'text' | 'image' | 'video'
    src?: string,
    content: string,
    tag?:string,
}

type Link = {
    link: string,
    linkLabel: string, 
    linkImage: string,
}

type Settings = {

}

export type Project = {
    thumbnail: string,
    id: string,
    tags: string[],
    hero?: contentBlock,
    client: string,
    title: string,
    subtitle: string,
    heroImage: string,
    content: contentBlock[],
    links: Link[],
    settings: Settings,
    location?: string,
}

/* type layoutBlock = {
    content: contentBlock[],
    layoutType: 
} */