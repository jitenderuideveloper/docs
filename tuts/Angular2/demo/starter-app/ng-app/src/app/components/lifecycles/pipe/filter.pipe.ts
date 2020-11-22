import { Pipe, PipeTransform } from '@angular/core';
import { User } from './../User';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  constructor() {
    console.log(`Child Pipe constructor`);
  }

  // transform(value: unknown, ...args: unknown[]): unknown {
    // return null;
  // }

  transform(users: User[], searchTerm: string): User[] {
    console.log('Pipe-filter:: ', 'users: ', users, 'pipeParam: ', searchTerm );
    if (!users || !searchTerm) {
      return users;
    }
    return users.filter(user => user.name.toLowerCase()
      .indexOf(searchTerm.toLowerCase()) !== -1);
  }

}