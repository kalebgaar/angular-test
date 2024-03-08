import { Component, Input } from '@angular/core';

@Component({
	selector: 'test-box',
	templateUrl: './test-box.component.html'
})
export class TestBoxComponent {
	@Input() projectName: string ;
}