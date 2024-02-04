
export interface IAllHeroes {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;

}

export interface IHero {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
    thumbnail: IThumbnail;
    description: string;
    id: number;
    name: string;
}


export interface IThumbnail {
    path: string;
    extension: string;
}

export interface IItem {
    resourceURI: string;
    name: string;
}

export interface IComics {
    available: number;
    collectionURI: string;
    items: IItem[];
    returned: number;
}

export interface ISeries {
    available: number;
    collectionURI: string;
    items: IItem[];
    returned: number;
}



export interface IResult {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: IThumbnail;
    resourceURI: string;
    comics: IComics;
    series: ISeries;
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
    

}

export interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    id: number;
    results: IResult[];
}

