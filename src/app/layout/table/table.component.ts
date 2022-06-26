import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/services/person.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  /* this table component performs add  remove sort function also toggle the list view  */
  persons: User[] | undefined;

  showContact: boolean = true;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.persons = this.userService.getUsers();
    console.log(this.persons + 'coming from table');
  }

  addNewUser() {
    this.router.navigate(['/new'], { relativeTo: this.route });
  }

  removePerson(item: any) {
    this.persons = this.persons?.filter(
      (userdata) => userdata.firstName !== item.firstName
    );
  }

  sortby(property: string) {
    if (property == 'asc') {
      this.persons?.sort(
        (a, b) =>
          a.firstName[0].localeCompare(b.firstName[0]) ||
          a.phoneNumber - b.phoneNumber
      );
    }
    if (property == 'dsc') {
      this.persons?.sort(
        (a, b) =>
          b.firstName[0].localeCompare(a.firstName[0]) ||
          b.phoneNumber - a.phoneNumber
      );
    }
  }

  listShow() {
    this.showContact = true;
  }

  smallListShow() {
    this.showContact = false;
  }
}
