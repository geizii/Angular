import { App1Page } from './app.po';

describe('app1 App', () => {
  let page: App1Page;

  beforeEach(() => {
    page = new App1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
