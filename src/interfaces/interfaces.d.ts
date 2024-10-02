export interface Articles {
    theme: string,
    subthemes: SubThemes[],
}

export interface SubThemes {
    title: string,
    description: string,
    content: Content[],
}

interface Content {
    title: string, 
    description: string, 
}