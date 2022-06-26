import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'
import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {


  addUserForm: FormGroup | any;
  constructor(private userservice: UsersService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initform();

  }

  private initform(){

    let firstName = '';
    let lastName ='';
    let phoneNumber = '';


    this.addUserForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'phoneNumber': new FormControl(phoneNumber),
    });

  }


  onSubmit(){
    console.log(this.addUserForm.value);
    this.userservice.addUser(this.addUserForm.value);

    this.addUserForm.reset();
    this.router.navigate(['/dashboard'] ,{relativeTo: this.route});
  }

  gotoContact(){
    this.router.navigate(['/contacts'] ,{relativeTo: this.route})
  }

}









