import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should chcek developerName', () => {
    expect(component.developerName).toEqual('Robin Jain')
  });

  it('should check launchYearArray length', () => {
    expect(component.launchYearArray.length).toEqual(14);
  });

  it('should check ngOnInit have been called ', () => {
    expect(component.ngOnInit()).toHaveBeenCalled();
  });


  it('should chcek filterAsPerYear function working', () => {
    expect(component.filterAsPerYear('2016')).toBeDefined()
  });

 

});
