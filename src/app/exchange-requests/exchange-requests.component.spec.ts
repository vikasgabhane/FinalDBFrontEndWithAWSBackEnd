import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRequestsComponent } from './exchange-requests.component';

describe('ExchangeRequestsComponent', () => {
  let component: ExchangeRequestsComponent;
  let fixture: ComponentFixture<ExchangeRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
