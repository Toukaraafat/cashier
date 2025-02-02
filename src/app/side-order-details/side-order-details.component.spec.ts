import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideOrderDetailsComponent } from './side-order-details.component';

describe('SideOrderDetailsComponent', () => {
  let component: SideOrderDetailsComponent;
  let fixture: ComponentFixture<SideOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideOrderDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
