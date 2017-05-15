
import {AlbumList} from "./album-list";
import {ArtistList} from "./artist-list";
import {TrackList} from "./track-list";

export interface SearchResult {
  albums: AlbumList;
  artists: ArtistList;
  tracks: TrackList;
}
