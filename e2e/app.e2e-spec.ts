import { UserappPage } from './app.po';

describe('userapp App', () => {
  let page: UserappPage;

  beforeEach(() => {
    page = new UserappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
