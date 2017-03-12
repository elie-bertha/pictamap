import { PictamapsPage } from './app.po';

describe('pictamaps App', function() {
  let page: PictamapsPage;

  beforeEach(() => {
    page = new PictamapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
