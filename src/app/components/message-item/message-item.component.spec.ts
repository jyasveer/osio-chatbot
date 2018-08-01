import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageItemComponent } from './message-item.component';
import { Message } from '../../models';

describe('MessageItemComponent', () => {
  let component: MessageItemComponent;
  let fixture: ComponentFixture<MessageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageItemComponent);
    component = fixture.componentInstance;
    component.message = <Message>{
      content: 'hello',
      avatar: 'avatar'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
