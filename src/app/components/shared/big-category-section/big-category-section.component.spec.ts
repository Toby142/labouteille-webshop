import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCategorySectionComponent } from './big-category-section.component';

describe('BigCategorySectionComponent', () => {
  let component: BigCategorySectionComponent;
  let fixture: ComponentFixture<BigCategorySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigCategorySectionComponent]
    });
    fixture = TestBed.createComponent(BigCategorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
