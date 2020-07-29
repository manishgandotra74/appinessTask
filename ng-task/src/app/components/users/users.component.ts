import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/service/serv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userlist = [];
  values = ''
  constructor(private service: ServService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.searchrepo('a')

  }
  searchrepo(e) {
    if (e && e.target) {
      this.values = e.target.value;
    } else {
      this.values = e
    }
    this.service.getUsers(this.values).subscribe(user => {
      console.log(user);
      this.userlist = user.items;

    })
  }

}
