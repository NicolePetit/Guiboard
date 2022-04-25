import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherItemComponent } from './publisher-item.component';

describe('PublisherItemComponent', () => {
  let component: PublisherItemComponent;
  let fixture: ComponentFixture<PublisherItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
