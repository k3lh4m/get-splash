
export interface IUnsplahPhotos {
	categories: string[];
	color: string;
	created_at: Date;
	current_user_collections: string[];
	description: string;
	height: number;
	id: string;
	liked_by_user: boolean;
	likes: number;
	links: IUnsplashLinks;
	slug: string|null;
	sponsored: boolean;
	sponsored_by: IUnsplashUser;
	sponsored_impressions_id: string;
	updated_at: Date;
	urls: IUnsplashUrls;
	user: IUnsplashUser;
	width: number;
}

export interface IUnsplashLinks {
	download: string;
	download_location: string;
	html: string;
	self: string;
}

export interface IUnsplashUser {
	accepted_tos: boolean;
	bio: string;
	first_name: string;
	id: string;
	instagram_username: string;
	last_name: string|null;
	links: IUnsplashSponsoredByLinks;
	location: string;
	name: string;
	portfolio_url: string;
	profile_image: IUnsplashProfileImage;
	total_collection: number;
	total_likes: number;
	total_photos: number;
	twitter_username: string;
	updated_at: Date;
	username: string;
}

export interface IUnsplashSponsoredByLinks {
	followers: string;
	following: string;
	html: string;
	likes: string;
	photos: string;
	portfolio: string;
	self: string;
}

export interface IUnsplashProfileImage {
	large: string;
	medium: string;
	small: string;
}

export interface IUnsplashUrls {
	full: string;
	raw: string;
	regular: string;
	small: string;
	thumb: string;
}