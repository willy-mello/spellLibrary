import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSpellComponent } from './one-spell.component';

describe('OneSpellComponent', () => {
  let component: OneSpellComponent;
  let fixture: ComponentFixture<OneSpellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSpellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
