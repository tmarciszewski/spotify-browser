import {Album} from "./album";
import {Artist} from "./artist";
export interface Track {
  id: string;
  name: string;
  duration_ms: number;
  album: Album;
  artists: Artist[];
  preview_url: string;
}
