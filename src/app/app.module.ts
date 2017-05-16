import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { TracksComponent } from './tracks/tracks.component';
import { SearchComponent } from './search/search.component';
import {SpotifyService} from './spotify.service';
import { RouterModule } from '@angular/router';
import { AlbumViewComponent } from './album-view/album-view.component';
import { ArtistViewComponent } from './artist-view/artist-view.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtistsComponent,
    AlbumsComponent,
    TracksComponent,
    SearchComponent,
    AlbumViewComponent,
    ArtistViewComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/search/yolo', pathMatch: 'full' },
      { path: 'search/:term', component: SearchComponent },
      { path: 'album/:id', component: AlbumViewComponent },
      { path: 'artist/:id', component: ArtistViewComponent }
    ])
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


