import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponent } from './sample.component';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });
    
  it(`should contain an h1 tag @contains-h1`, async(() => {
    const fixture = TestBed.createComponent(SampleComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1')).not.toBe(null);
  }));

  it(`should render title in an h1 tag @h1-contains-title`, async(() => {
    const fixture = TestBed.createComponent(SampleComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Sample Component Loaded');
  }));
});
