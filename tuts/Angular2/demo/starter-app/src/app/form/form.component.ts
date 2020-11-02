import { Component } from '@angular/core';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  editor: EditorType = 'name';

  get showNameEditor(): boolean {
    return this.editor === 'name';
  }

  get showProfileEditor(): boolean {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType): void {
    this.editor = type;
  }
}
