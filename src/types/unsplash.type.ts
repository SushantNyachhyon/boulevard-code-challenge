export type IUnsplash = {
    total: number;
    total_pages: number;
    results: IResult[];
}

export type IResult = {
    id: string;
    created_at: Date;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    likes: number;
    liked_by_user: boolean;
    description: string;
    user: IUser;
    current_user_collections: unknown[];
    urls: IUrls;
    links: IResultLinks;
}

export type IResultLinks = {
    self: string;
    html: string;
    download: string;
}

export type IUrls = {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}

export type IUser = {
    id: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    instagram_username: string;
    twitter_username: string;
    portfolio_url: string;
    profile_image: IProfileImage;
    links: IUserLinks;
}

export type IUserLinks = {
    self: string;
    html: string;
    photos: string;
    likes: string;
}

export type IProfileImage = {
    small: string;
    medium: string;
    large: string;
}
