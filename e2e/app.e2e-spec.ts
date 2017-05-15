import { SpotifyBrowserAngularPage } from './app.po';

describe('spotify-browser-angular App', () => {
  let page: SpotifyBrowserAngularPage;

  beforeEach(() => {
    page = new SpotifyBrowserAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
