import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillerSectionComponent } from './filler-section.component';

describe('FillerSectionComponent', () => {
  let component: FillerSectionComponent;
  let fixture: ComponentFixture<FillerSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FillerSectionComponent]
    });
    fixture = TestBed.createComponent(FillerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
