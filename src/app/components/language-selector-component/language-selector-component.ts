import { Component, OnInit } from '@angular/core';
import { MatOption, MatSelect } from '@angular/material/select';
import { LanguageService } from '../../services/language-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-selector-component',
  imports: [MatSelect, MatOption, CommonModule],
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
