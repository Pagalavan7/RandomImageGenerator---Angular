import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-disimg',
  templateUrl: './disimg.component.html',
  styleUrl: './disimg.component.css',
})
export class DisimgComponent {
  @Input() result: any;
}
