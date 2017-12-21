import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactsubmenu',
  templateUrl: './contactsubmenu.component.html',
  styleUrls: ['./contactsubmenu.component.css']
})
export class ContactsubmenuComponent implements OnInit {

contactType:string;
private susbscribe: any;

  constructor(private route: ActivatedRoute) { 
console.log(route);
this.contactType = route.snapshot.params["type"];
        console.log(" contact type is = "+ this.contactType);
const url: string = route.snapshot.url.join('');
        console.log(" url is = "+ url);

}

  ngOnInit() {
this.subscribe = this.route.params.subscribe(params => {
        this.contactType = params.type;
    });
  }
ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
