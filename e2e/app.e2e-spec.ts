import { CitrixGithubIoPage } from './app.po';

describe('citrix-github-io App', function() {
  let page: CitrixGithubIoPage;

  beforeEach(() => {
    page = new CitrixGithubIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
