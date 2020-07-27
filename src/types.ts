export type ProjectType = {
    id: string,
    hero: string,
    title: string,
    description: string[],
    tags: string,
    images: string[],
    vimeoIDs: string[],
    movies: string[],
    client: string,
    useVideoAsHero: boolean | undefined,
    dontShow: boolean | undefined,
}

export type Point = {x: number, y: number, dx: number, dy: number}