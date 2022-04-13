import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierFixeComponent } from './panier-fixe.component';

describe('PanierFixeComponent', () => {
  let component: PanierFixeComponent;
  let fixture: ComponentFixture<PanierFixeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierFixeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierFixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
