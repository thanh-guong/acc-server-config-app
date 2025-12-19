import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LanguageService } from '../../services/language-service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-language-selector-component',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIcon
  ],
  templateUrl: './language-selector-component.html',
  styleUrl: './language-selector-component.css',
})
export class LanguageSelectorComponent implements OnInit {
  options: { value: string; label: string }[] = [];

  constructor(private languageService: LanguageService) {}
  
  ngOnInit(): void {
    this.options = this.languageService.languages.map(lang => ({ value: lang, label: lang.toUpperCase() }));
  }

  onLanguageChange(lang: string): void {
    this.languageService.setLanguage(lang);
  }

  get currentLanguage(): string {
    return this.languageService.currentLanguage;
  }
}
