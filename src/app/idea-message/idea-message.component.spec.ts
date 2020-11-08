import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaMessageComponent } from './idea-message.component';

describe('IdeaMessageComponent', () => {
  let component: IdeaMessageComponent;
  let fixture: ComponentFixture<IdeaMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
