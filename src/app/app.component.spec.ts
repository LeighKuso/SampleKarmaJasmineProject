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

  it(`should contain the app-sample element @does-contain-app-sample`, async(() => {
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

});
