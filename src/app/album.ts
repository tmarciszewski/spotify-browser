import {CoverImage} from "./cover-image";

export interface Album {
  id: string;
  name: string;
  images: CoverImage[];
}
