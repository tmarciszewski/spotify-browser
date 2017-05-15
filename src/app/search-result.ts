import {Album} from "./album";
import {Artist} from "./artist";
import {Track} from "./track";

export interface SearchResult {
  albums: Album[];
  artists: Artist[];
  tracks: Track[];
}
