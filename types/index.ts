export interface ImageFile {
  id: string;
  name: string;
  type: string;
  size: number;
  base64?: string;
  preview?: string;
  file: File;
  dateAdded?: Date;
}

export interface TransformedImage {
  id: string;
  name: string;
  originalImageId: string;
  dataUrl: string;
  width: number;
  height: number;
  transformationType: string;
  dateCreated: Date;
}

export interface BackgroundStyle {
  id: string;
  name: string;
  colors: string[];
  gradientType?: 'linear' | 'radial';
  pattern?: string;
}
