import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenURLComponent } from './shorten-url.component';

describe('ShortenURLComponent', () => {
  let component: ShortenURLComponent;
  let fixture: ComponentFixture<ShortenURLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenURLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
