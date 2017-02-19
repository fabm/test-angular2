import { PrimeTestPage } from './app.po';

describe('prime-test App', function() {
  let page: PrimeTestPage;

  beforeEach(() => {
    page = new PrimeTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
