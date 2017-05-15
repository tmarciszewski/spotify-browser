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
import {SpotifyService} from "./spotify.service";
import { RouterModule } from '@angular/router';
import { AlbumViewComponent } from './album-view/album-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtistsComponent,
    AlbumsComponent,
    TracksComponent,
    SearchComponent,
    AlbumViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/search', pathMatch: 'full' },
      { path: 'search', component: SearchComponent },
      { path: 'album/:id', component: AlbumViewComponent }
    ])
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


