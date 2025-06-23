import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navigation-header.component.html',
  styleUrl: './navigation-header.component.scss'
})
export class NavigationHeaderComponent implements OnInit {
  allianceTag = signal<string>('');
  currentRoute = signal<string>('');

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.allianceTag.set(params['allianceTag'] || '');
    });

    // Récupérer l'URL actuelle
    this.currentRoute.set(this.router.url);
  }

  getTitle() {
    if (this.currentRoute().includes('/defense-dashboard')) {
      return 'Defense Dashboard';
    } else if (this.currentRoute().includes('/store-reports')) {
      return 'Store Reports';
    }
    return '';
  }
}
