import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { PackagesComponent } from './components/packages/packages';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ServiceAreaComponent } from './components/service-area/service-area';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PackagesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ServiceAreaComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-services></app-services>
      <app-packages></app-packages>
      <app-portfolio></app-portfolio>
      <app-testimonials></app-testimonials>
      <app-service-area></app-service-area>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>

    <!-- WhatsApp Floating Button -->
    <a
      href="https://wa.me/918460975675?text=Hello%20Golden%20Queen%20Shanvi!%20I%20would%20like%20to%20book%20an%20appointment."
      target="_blank"
      class="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  `,
  styles: [`
    .whatsapp-fab {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 58px;
      height: 58px;
      background: #25D366;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
      z-index: 9999;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-decoration: none;
    }
    .whatsapp-fab:hover {
      transform: scale(1.1) translateY(-3px);
      box-shadow: 0 8px 30px rgba(37, 211, 102, 0.7);
    }
    .whatsapp-fab svg {
      animation: pulse-fab 2.5s ease-in-out infinite;
    }
    @keyframes pulse-fab {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
  `]
})
export class App implements OnInit {
  ngOnInit() {
    this.initScrollReveal();
  }

  private initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
        observer.observe(el);
      });
    }, 100);
  }
}
