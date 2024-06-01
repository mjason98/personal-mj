export type Foto = {
    id: string;
    url: string;
}

export type PersonalInfo = {
    id: string;
    name: string;
    desc: string;
    linkedin: string;
    faceFoto: Foto
}

export type PersonalProject = {
    id:string;
    name:string;
    desc:string;
    thumbnail: Foto;
}