import { Component } from '@angular/core';
import {
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';


// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-life-cycle-parent',
  templateUrl: './life-cycle-parent.component.html'
})
export class LifeCycleParentComponent implements
OnChanges, OnInit,
DoCheck,
AfterContentChecked,
AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  name = 'Angular';
  data = 100;

  constructor() {
    console.log(`Parent constructor: new - data is ${this.data}`);
  }

  ngOnChanges(): void {
    console.log(`Parent ngOnChanges: data is ${this.data}`);
  }

  ngOnInit(): void {
    console.log(`Parent ngOnInit: data is ${this.data}`);
  }

  ngDoCheck(): void {
    console.log('Parent ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Parent ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Parent ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Parent ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Parent ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Parent ngOnDestroy');
  }

  fnAddNumber(): void {
    console.log('Parent change @input val');
    this.data += 100;
  }

  deleteNumber(newNum: number): void {
    console.log('Parent decreaseNumber: ', newNum);
    this.data -= newNum;
  }

}
