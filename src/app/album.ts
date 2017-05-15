import {CoverImage} from "./cover-image";
import {Artist} from "./artist";

export interface Album {
  id: string;
  name: string;
  artists: Artist[],
  release_date: string;
  images: CoverImage[];
}
