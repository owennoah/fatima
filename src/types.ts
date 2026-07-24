export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface HeroContent {
  discountTag: string;
  headlinePrefix: string;
  headlineMain: string;
  headlineSuffix: string;
  subtitle: string;
  ctaText: string;
  stats: StatItem[];
}

export interface SocialWidget {
  id: string;
  name: string;
  iconName: string;
  bgColor: string;
  textColor: string;
  gradient: string;
  followers: string;
  growth: string;
  active: boolean;
}

export type ThemeMode = 'light' | 'dark';

export type RightSideMode = 'design-graphic' | 'image-placeholder' | 'custom-image';


export interface PlaceholderConfig {
  mode: RightSideMode;
  customImageUrl: string | null;
  aspectRatio: '1:1' | '4:3' | '16:9' | 'custom';
  overlayWidgets: boolean;
  showDimensions: boolean;
  showGridLines: boolean;
}
