import { Component, OnInit } from '@angular/core';
import { HTTPProviderService } from '../core/http-provider/http-provider.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.scss']
})
export class GithubUserComponent implements OnInit {


  public githubUsers= [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

  constructor(private http: HTTPProviderService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }


 public  Filter(event)
  {
   console.log(event.target.value);
   let currentuser = event.target.value;
   this.router.navigate(['/gituser/',currentuser]);
  }
}
