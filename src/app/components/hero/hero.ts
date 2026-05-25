import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit() {
    setTimeout(() => {
      const el = document.querySelector('.hero-content');
      if (el) el.classList.add('visible');
    }, 300);
  }

  scrollToPortfolio() {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
