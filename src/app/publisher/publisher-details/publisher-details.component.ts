import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/shared/icon.service';


@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styleUrls: ['./publisher-details.component.scss'],
})
export class PublisherDetailsComponent implements OnInit {

  constructor(public icon : IconService){}

  ngOnInit(): void {}
}
