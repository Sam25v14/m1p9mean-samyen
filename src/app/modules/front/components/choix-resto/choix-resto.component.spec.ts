import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixRestoComponent } from './choix-resto.component';

describe('ChoixRestoComponent', () => {
  let component: ChoixRestoComponent;
  let fixture: ComponentFixture<ChoixRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
