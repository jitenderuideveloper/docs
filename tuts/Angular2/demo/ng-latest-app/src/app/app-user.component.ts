import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './app-user.component.html'
})
export class AppUserComponent implements OnChanges, OnInit  {
  @Input() userId: string | undefined;


  constructor() {
    console.log(`Child constructor`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Child ngOnChanges`);

    for (const propName in changes) {
      const prop = changes[propName];
      console.log('Property: ' + propName + ':-');
      console.log('Previous Value: ' + prop.previousValue + ' | ' + 'Current Value: ' + prop.currentValue + ' | ' + 'First Change: ' + prop.firstChange);
    }
  }

  ngOnInit(): void {
    console.log(`Child ngOnInit`);
  }

  
}
