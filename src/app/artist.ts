import {CoverImage} from "./cover-image";

export interface Artist {
  id: string;
  name: string;
  images: CoverImage[];
}
