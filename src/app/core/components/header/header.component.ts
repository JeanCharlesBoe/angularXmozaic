import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'ccc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    
  public logoUrl!: string;
  public productName: string;
  private readonly subscriptions: Subscription[] = [];

  constructor(private readonly router: Router) {
    this.logoUrl = "../../../shared/img/logo.png";
    this.productName = "Gestion des identités et des accès";
   }

  ngOnInit(): void {
  }

  goHome(): void {
    this.router.navigateByUrl('');
  }

  logout(): void {
    
  }

}
