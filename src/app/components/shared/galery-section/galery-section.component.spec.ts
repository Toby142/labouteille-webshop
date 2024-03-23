import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerySectionComponent } from './galery-section.component';

describe('GalerySectionComponent', () => {
  let component: GalerySectionComponent;
  let fixture: ComponentFixture<GalerySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalerySectionComponent]
    });
    fixture = TestBed.createComponent(GalerySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
