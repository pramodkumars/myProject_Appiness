import { Component, OnInit } from '@angular/core';
import { HTTPProviderService } from '../core/http-provider/http-provider.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-repository',
  templateUrl: './user-repository.component.html',
  styleUrls: ['./user-repository.component.scss']
})
export class UserRepositoryComponent implements OnInit {


  public myId: string;


  public repositoryname= [
  {name:'Dr Nice' , repository: 'Repo_Nice' },
  { name: 'Bombasto', repository: 'Repo_Bombasto' },
  {name: 'Celeritas', repository: ' Repo_Celeritas' },
  {name: 'Narco', repository: ' Repo_Narco25' },
  {name: 'RubberMan', repository: ' Repo_RubberMan78' },
  { name: 'Celeritas', repository: ' Repo_Celeritas' },
    { name: 'Tornado', repository: ' Repo_Tornado48' },
    { name: 'Magneta', repository: ' Repo_Magneta455' },
    { name: 'Magma', repository: ' Repo_userma7844' },
       { name: 'Dr IQ', repository: ' Repo_uyguyga455' },
    { name: 'Dynama', repository: ' Repoorange7844' }

];
  public repoName: string;
   constructor(private http: HTTPProviderService,private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
 this.myId = this.route.snapshot.paramMap.get('id');
   this.repoName= this.filterbyid(this.myId);

  }


  public filterbyid(myId)
  {
     let name = myId;
    let list = this.repositoryname.filter(x => x.name === name)[0];
    this.repositoryname["repository"] = list.repository;
    console.log("id", list.repository);
    return list.repository;
  }
}
