export interface Data { 
        id: number,
        title: string,
        preview: string,
        artist: {
        id: number,
        name: string,
        picture_medium: string,
        },
        album: {
        id: number,
        title: string,
        cover_medium: string,
        tracklist: string,
        },
}