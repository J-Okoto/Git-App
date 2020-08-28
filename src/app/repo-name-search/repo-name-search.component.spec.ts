import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoNameSearchComponent } from './repo-name-search.component';

describe('RepoNameSearchComponent', () => {
  let component: RepoNameSearchComponent;
  let fixture: ComponentFixture<RepoNameSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoNameSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoNameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
