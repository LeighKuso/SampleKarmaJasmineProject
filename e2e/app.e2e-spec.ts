import { SampleKarmaJasmineProjectPage } from './app.po';

describe('sample-karma-jasmine-project App', () => {
  let page: SampleKarmaJasmineProjectPage;

  beforeEach(() => {
    page = new SampleKarmaJasmineProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
