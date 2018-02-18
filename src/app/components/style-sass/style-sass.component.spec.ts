import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSassComponent } from './style-sass.component';

describe('StyleSassComponent', () => {
  let component: StyleSassComponent;
  let fixture: ComponentFixture<StyleSassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleSassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleSassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
