import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appdd';
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _httpService:HttpService
  ){}
  ngOnInit(){
    this._route.params.subscribe((params: Params) => console.log(params['id']));
  }
  goHome() {
    this._router.navigate(['/home']);
  }
}
