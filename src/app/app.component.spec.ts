import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SampleComponent
      ],
    }).compileComponents();
  }));

  it(`should contain the app-sample element @does-contain-element`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const childNodes = fixture.debugElement.childNodes;

    let sampleFound = 0;
    childNodes.forEach(element => {
      if (element.nativeNode.nodeType == 1) {
        if (element.nativeNode.localName == 'app-sample') {
          sampleFound = sampleFound + 1;
        }
      }
    });

    expect(sampleFound).toBe(1);
  }));

  it(`should not contain elements other than app-sample @does-not-contain-other-elements`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const childNodes = fixture.debugElement.childNodes;

    let otherElementsFound = 0;
    childNodes.forEach(element => {
      if (element.nativeNode.nodeType == 1) {
        if (element.nativeNode.localName == 'app-sample') {
          // do nothing
        } else {
          otherElementsFound = otherElementsFound + 1;
        }
      }
    });

    expect(otherElementsFound).toBe(0);
  }));

  it(`should not contain any text nodes @does-not-contain-text-nodes`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const childNodes = fixture.debugElement.childNodes;

    let otherElementsFound = 0;
    childNodes.forEach(element => {
      expect(element.nativeNode.nodeType).not.toBe(3);
    });

    expect(otherElementsFound).toBe(0);
  }));

});
