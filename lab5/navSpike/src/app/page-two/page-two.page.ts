import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.page.html',
  styleUrls: ['./page-two.page.scss'],
})
export class PageTwoPage implements OnInit {

  private displayName: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(data=>{
      this.displayName =data["name"];
    })
  }
  ngOnInit() {
  }

}
