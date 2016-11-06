import { UserManPage } from './app.po';

describe('user-man App', function() {
  let page: UserManPage;

  beforeEach(() => {
    page = new UserManPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
