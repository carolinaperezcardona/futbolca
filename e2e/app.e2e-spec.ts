import { FutbolcaPage } from './app.po';

describe('futbolca App', function() {
  let page: FutbolcaPage;

  beforeEach(() => {
    page = new FutbolcaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
