import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styleUrls: ['./publisher-details.component.scss']
})
export class PublisherDetailsComponent implements OnInit {



  constructor() { }

  onClick(){console.log('clicked');
  }

  ngOnInit(): void {
  }

}
