import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {

  downloadFile(filename: string, fileExtension: string, blob: Blob): void {
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.${fileExtension}`;
    a.click();

    window.URL.revokeObjectURL(url);
  }

  dataToJsonBlob(data: unknown): Blob {
    return new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  }

  downloadJson(filename: string, data: unknown): void {
    this.downloadFile(filename, 'json', this.dataToJsonBlob(data));
  }
}
