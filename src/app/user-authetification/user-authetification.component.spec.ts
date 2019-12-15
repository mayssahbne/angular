import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthetificationComponent } from './user-authetification.component';

describe('UserAuthetificationComponent', () => {
  let component: UserAuthetificationComponent;
  let fixture: ComponentFixture<UserAuthetificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAuthetificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthetificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
