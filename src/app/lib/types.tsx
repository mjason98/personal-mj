export type Foto = {
    id: string;
    url: string;
    width?:number;
    height?:number;
}

export type PersonalInfo = {
    id: string;
    name: string;
    desc: string;
    linkedin: string;
    x: string;
    faceFoto: Foto
}

export type Post = {
    id: number;
    image: {url:string;}
    text: string;
    title:string;
};

export type PersonalProject = {
    id:string;
    name:string;
    desc:string;
    thumbnail: Foto;
    personalPosts?: Post[];
    url: string;
}

export type Article = {
    id: string;
    title: string;
    url: string;
    keywords: string;
}