import { Component, OnInit } from '@angular/core';
import { File } from 'src/app/components/models/file';

@Component({
	selector: 'app-create-login',
	templateUrl: './create-login.component.html',
	styleUrls: ['./create-login.component.scss']
})
export class CreateLoginComponent implements OnInit {
	file!: File | Blob
	preview: string = "";
	enabled: boolean = false
	subtitle: string = "";

	constructor () { }

	ngOnInit(): void {
	}

	selectFile(event: any) {
		this.file = event.target.files[0];
		const file = this.file as File;
		this.subtitle = file.name;

		const reader = new FileReader();
		reader.readAsDataURL(this.file as Blob)
		reader.onload = (action: any) => {
			this.preview = action.target.result;
		}
	}

}
