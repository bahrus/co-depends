export interface EndUserProps{
    rating: string;
    ratingAsNumber: number;
}

export interface Props extends EndUserProps{
    ratingDescription: string;
}