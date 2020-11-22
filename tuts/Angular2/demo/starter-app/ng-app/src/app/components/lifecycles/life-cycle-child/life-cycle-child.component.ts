import {
  Component, Input, Output, EventEmitter,
  // Output, EventEmitter, ViewEncapsulation,
  SimpleChanges,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';
import { User } from './../../lifecycles/User';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html'
})

export class LifeCycleChildComponent implements
  OnChanges, OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

    users: User[] = [
      { name: 'ahmed', age: 20 },
      { name: 'hamza', age: 20 },
      { name: 'manel', age: 20 },
      { name: 'yosra', age: 20 },
      { name: 'jihed', age: 20 },
      { name: 'raja', age: 20 }
    ];

    searchTerm = '';

  @Input() name: string;
  @Output() newNumEvent = new EventEmitter<number>();

  constructor() {
    console.log(`Child constructor`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Child ngOnChanges`);

    for (const propName in changes) {
      if (propName) {
        const prop = changes[propName];
        console.log('Property: ' + propName + ':-');
        console.log('Previous Value: ' + prop.previousValue + ' | ' + 'Current Value: ' + prop.currentValue);
      }
    }
  }

  ngOnInit(): void {
    console.log(`Child ngOnInit`);
  }

  // ngDoCheck(): void {
    // console.log('Child ngDoCheck');
  // }

  ngAfterContentInit(): void {
    console.log('Child ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Child ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Child ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Child ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Child ngOnDestroy');
  }

  decreaseNumber(value: number): void {
    console.log('Child decreaseNumber: ', value);
    this.newNumEvent.emit(value);
  }

  changeByProperty(): void {
    this.users[0].name = 'ghoul';
  }

  changeByReference(): void {
    // const refUsers= Object.assign([], this.users);
    // const refUsers= [...this.users];
    const refUsers = this.users.slice();
    refUsers[0].name = 'ghoul';
    this.users = refUsers;
    console.log( 'function changeByReference:' );
  }

}


