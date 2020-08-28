import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitNameSearchComponent } from './git-name-search.component';

describe('GitNameSearchComponent', () => {
  let component: GitNameSearchComponent;
  let fixture: ComponentFixture<GitNameSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitNameSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitNameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
