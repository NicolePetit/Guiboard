import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherManagerComponent } from './publisher-manager.component';

describe('PublisherManagerComponent', () => {
  let component: PublisherManagerComponent;
  let fixture: ComponentFixture<PublisherManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
