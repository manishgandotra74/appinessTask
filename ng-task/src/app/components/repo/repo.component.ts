import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/service/serv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repolist=[];
  constructor(private service:ServService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    if (this.route && this.route.snapshot && this.route.snapshot.queryParams['id']){

      this.service.getRepos(this.route.snapshot.queryParams['id']).subscribe(repo=>{
        console.log(repo);
        this.repolist= repo
        
      })
    }
  }

}
