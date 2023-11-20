import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOHsReqComponent } from './mo-hs-req.component';

describe('MOHsReqComponent', () => {
  let component: MOHsReqComponent;
  let fixture: ComponentFixture<MOHsReqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MOHsReqComponent]
    });
    fixture = TestBed.createComponent(MOHsReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
