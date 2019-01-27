import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainQuestionComponent } from './maintain-question.component';

describe('MaintainQuestionComponent', () => {
  let component: MaintainQuestionComponent;
  let fixture: ComponentFixture<MaintainQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
