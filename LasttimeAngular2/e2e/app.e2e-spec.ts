import { LasttimeAngular2Page } from './app.po';

describe('lasttime-angular2 App', function() {
  let page: LasttimeAngular2Page;

  beforeEach(() => {
    page = new LasttimeAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
