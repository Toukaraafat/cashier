import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTableDetailsComponent } from './side-table-details.component';

describe('SideTableDetailsComponent', () => {
  let component: SideTableDetailsComponent;
  let fixture: ComponentFixture<SideTableDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideTableDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideTableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
