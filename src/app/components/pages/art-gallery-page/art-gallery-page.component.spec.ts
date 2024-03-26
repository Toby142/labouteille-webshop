import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtGalleryPageComponent } from './art-gallery-page.component';

describe('ArtGalleryPageComponent', () => {
  let component: ArtGalleryPageComponent;
  let fixture: ComponentFixture<ArtGalleryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtGalleryPageComponent]
    });
    fixture = TestBed.createComponent(ArtGalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
