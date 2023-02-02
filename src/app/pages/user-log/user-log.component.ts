import { Component, OnInit } from '@angular/core';
import { UserRequestService } from 'src/app/components/services/user-request.service';

@Component({
	selector: 'app-user-log',
	templateUrl: './user-log.component.html',
	styleUrls: ['./user-log.component.scss']
})
export class UserLogComponent implements OnInit {

	constructor (private requests:UserRequestService) { }

	ngOnInit(): void {
		this.getUserNow()
	}


	getUserNow(){
		const user = encodeURIComponent("felipeb2silva@gmail.com");

		this.requests.getUser(user).subscribe((data:any) =>{
			console.log(data)
		})
	}

}
