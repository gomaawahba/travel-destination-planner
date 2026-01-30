import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkDestinationsComponent } from './bulk-destinations.component';

describe('BulkDestinationsComponent', () => {
  let component: BulkDestinationsComponent;
  let fixture: ComponentFixture<BulkDestinationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulkDestinationsComponent]
    });
    fixture = TestBed.createComponent(BulkDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
