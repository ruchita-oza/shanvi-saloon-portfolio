import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class PortfolioComponent {
  categories = ['All', 'Bridal Looks', 'Mehendi Designs', 'Engagement', 'Salon Work', 'Makeup Transformations'];
  activeCategory = 'All';

  portfolioItems = [
    { id: 1, img: 'bridal_look1.jpg', title: 'Bridal Glam', category: 'Bridal Looks', tall: true },
    { id: 2, img: 'mehendi_design1.jpg', title: 'Bridal Mehendi', category: 'Mehendi Designs', tall: false },
    { id: 3, img: 'engagement_look.jpg', title: 'Engagement Look', category: 'Engagement', tall: false },
    { id: 3, img: 'engagement_look2.jpg', title: 'Engagement Look', category: 'Engagement', tall: false },
    { id: 4, img: 'salon_work.jpg', title: 'Hair Styling', category: 'Salon Work', tall: true },
    { id: 4, img: 'salon_work2.jpg', title: 'Hair Styling', category: 'Salon Work', tall: true },
    { id: 5, img: 'bridal_look2.jpg', title: 'Wedding Bridal', category: 'Bridal Looks', tall: false },
    // { id: 7, img: 'makeup_transformation.png', title: 'Glam Transformation', category: 'Makeup Transformations', tall: true },
    { id: 9, img: 'artist_jahnvi.png', title: 'Bridal Makeup and Mehendi artist', category: 'Mehendi Designs', tall: false },
    { id: 8, img: 'artist_yashvi.png', title: 'Bridal Makeup', category: 'Salon Work', tall: false },
  ];

  lightboxOpen = false;
  lightboxImg = '';
  lightboxTitle = '';

  get filteredItems() {
    if (this.activeCategory === 'All') return this.portfolioItems;
    return this.portfolioItems.filter(i => i.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  openLightbox(item: any) {
    this.lightboxImg = item.img;
    this.lightboxTitle = item.title;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }
}
