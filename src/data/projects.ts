export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  screenshots: string[];
  demoVideo: string;
  techStack: string[];
  features: string[];
  playStoreUrl: string;
  appStoreUrl: string;
  category: string;
  stats: {
    downloads: string;
    rating: string;
    reviews: string;
  };
}

export const projects: Project[] = [
  {
    id: 'scan2pdf',
    name: 'Scan2PDF',
    shortDescription: 'Advanced document scanning with OCR and e-signature capabilities.',
    fullDescription: 'A comprehensive document scanning application featuring OCR text extraction in 5 languages, e-signature functionality, watermarking, and multi-format PDF export. Built for professionals who need reliable document digitization on the go.',
    icon: '/assets/scan2pdf.png',
    screenshots: ['/assets/scan2pdf.png'],
    demoVideo: '/videos/scan2pdf-demo.mp4',
    techStack: ['React Native', 'Expo', 'JavaScript', 'OCR API', 'PDF Generation'],
    features: [
      'Document scanning to PDF',
      'OCR text extraction in 5 languages',
      'E-signature functionality',
      'Watermark and branding',
      'Multi-language support',
      'Document Manager'
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.lettech.scanner',
    appStoreUrl: 'https://apps.apple.com/app/scan2pdf/id1234567890',
    category: 'Productivity',
    stats: {
      downloads: '100+',
      rating: '4.9',
      reviews: '30+'
    }
  },
  {
    id: 'wallnex',
    name: 'Wallnex',
    shortDescription: 'Beautiful wallpaper app with high-quality images and daily updates.',
    fullDescription: 'A stunning wallpaper application featuring curated high-quality images with daily updates. Enjoy smooth animations, categorized browsing, and easy download management. Transform your device with beautiful backgrounds.',
    icon: '/assets/wallpaper.png',
    screenshots: ['/assets/wallpaper.png'],
    demoVideo: '/videos/wallpaper-demo.mp4',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Image Processing', 'Animations'],
    features: [
      'High-quality wallpapers',
      'Daily new wallpapers',
      'Beautiful animations',
      'Categories and search',
      'Download management',
      'Favorites collection'
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.lettech.wallnex',
    appStoreUrl: 'https://apps.apple.com/app/wallpaper-downloader/id1234567891',
    category: 'Personalisation',
    stats: {
      downloads: '100+',
      rating: '5.0',
      reviews: '05+'
    }
  },
  {
    id: 'stacktower-app',
    name: 'Happy Stack Tower',
    shortDescription: 'Arcade Game with multiple challenges, modes and premium themes.',
    fullDescription: 'An addictive arcade-style stacking game offering classic, time-based, and challenge modes, a rewarding coin system, and premium themes, demonstrating strong gameplay logic and UI craftsmanship.',
    icon: '/assets/happytower.png',
    screenshots: ['/assets/happytower.png'],
    demoVideo: '/videos/game-demo.mp4',
    techStack: ['React Native', 'Expo', 'TypeScript', 'AdMob', 'Game State Management'],
    features: [
      "Three distinct game modes",
      "Skill-based combo rewards",
      "Twenty challenge levels with stars",
      "Premium visual themes shop",
      "Adjustable difficulty settings",
      "Rewarded ads for bonus coins"
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.lettech.happystacktower',
    appStoreUrl: 'https://apps.apple.com/app/quran-reader/id1234567892',
    category: 'Entertainment',
    stats: {
      downloads: '10+',
      rating: '5.0',
      reviews: '01+'
    }
  }
];
