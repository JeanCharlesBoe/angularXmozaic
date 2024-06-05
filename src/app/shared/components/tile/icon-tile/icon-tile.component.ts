import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'ccc-icon-tile',
  templateUrl: './icon-tile.component.html',
  styleUrls: ['./icon-tile.component.scss']
})
export class IconTileComponent implements OnInit {
  
  @Input() public outlined: boolean = true;
  @Input() public fluid: boolean = false;

  //public mouseOvered: boolean;

  //@ContentChild('ActionTemplate', { static: true }) public actionTemplate: TemplateRef<ElementRef>;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onRedirect(): void {
    this.router.navigateByUrl(`/identity`);
  }

}
