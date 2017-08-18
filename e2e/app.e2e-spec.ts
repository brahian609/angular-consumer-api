import { AngularConsumerApiPage } from './app.po';

describe('angular-consumer-api App', () => {
  let page: AngularConsumerApiPage;

  beforeEach(() => {
    page = new AngularConsumerApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
