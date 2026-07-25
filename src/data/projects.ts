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
  playStoreUrl?: string;
  appStoreUrl?: string;
  category: string;
  projectType: 'personal' | 'freelance' | 'company';
  role: string;
  company?: string;
  isPublished: boolean;
  stats?: {
    downloads?: string;
    rating?: string;
    reviews?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'ajr-islamic-app',
    name: 'AJR Deen Accountability',
    shortDescription: 'Comprehensive Islamic accountability and spiritual habit tracker app for daily prayers, Quran, and sunnah habits.',
    fullDescription: 'Lead developer of a feature-rich Islamic accountability application built from scratch to publishing. Designed to help users track daily prayers, set Quran reading goals, monitor spiritual habits, and receive timely notifications. Implemented Firebase (Firestore & Cloud Functions) for real-time database sync, backend triggers, and automated notification delivery. Successfully led a team of developers to build and launch the app live on both the Apple App Store and Google Play Store.',
    icon: '/assets/ajr-icon.png',
    screenshots: ['/assets/ajr-icon.png'],
    demoVideo: '/videos/ajr-demo.mp4',
    techStack: ['React Native CLI', 'Firebase', 'TypeScript', 'Cloud Functions', 'Context API', 'Push Notifications'],
    features: [
      'Daily Prayer & Sunnah Accountability Tracker',
      'Quran Reading Progress & Habit Goals',
      'Firebase Firestore Real-Time Database Sync',
      'Firebase Cloud Functions & Push Notifications',
      'Complex UI Animations & Smooth Interactions',
      'Deployed to Apple App Store & Google Play Store'
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.my.AJR.android&pcampaignid=web_share',
    appStoreUrl: 'https://apps.apple.com/app/ajr-deen-accountability/id6758246710',
    category: 'Lifestyle',
    projectType: 'freelance',
    role: 'Lead Mobile Developer',
    company: 'Freelance Client Project',
    isPublished: true,
    stats: {
      downloads: '1,000+',
      rating: '5.0',
      reviews: '50+'
    }
  },
  {
    id: 'fuel-stop',
    name: 'Fuel Stop',
    shortDescription: 'Logistics and fueling station discovery mobile app built with React Native CLI.',
    fullDescription: 'Frontend mobile application developed under Webwrite Pvt Limited using React Native CLI. Enables drivers and fleet operators to discover nearby fuel stations, check real-time fuel availability & pricing, manage orders, and navigate efficiently with custom interactive maps.',
    icon: '/assets/fuelstop-icon.png',
    screenshots: ['/assets/fuelstop-icon.png'],
    demoVideo: '/videos/fuelstop-demo.mp4',
    techStack: ['React Native CLI', 'TypeScript', 'Redux Toolkit', 'Google Maps API', 'Geolocation Services'],
    features: [
      'Interactive fuel station locator with custom map markers',
      'Real-time fuel availability & price tracking',
      'Location-based search & nearby station filtering',
      'Seamless turn-by-turn route navigation',
      'Driver profile & fuel purchase logs',
      'Dark-mode optimized UI tailored for on-the-go drivers'
    ],
    category: 'Logistics',
    projectType: 'company',
    role: 'React Native Developer (Frontend)',
    company: 'Webwrite Pvt Limited',
    isPublished: false,
    stats: {
      downloads: 'Pre-Launch',
      rating: 'N/A',
      reviews: 'Active Dev'
    }
  },
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
    category: 'Productivity',
    projectType: 'personal',
    role: 'Sole Developer & Copyright Owner',
    company: 'LetTech Collaboration',
    isPublished: true,
    stats: {
      downloads: '100+',
      rating: '4.9',
      reviews: '30+'
    }
  },
  {
    id: 'ubamm-wellness',
    name: 'Ubamm Wellness',
    shortDescription: 'Full-stack health & wellness platform featuring React Native CLI frontend and NestJS backend API.',
    fullDescription: 'A modern, full-stack wellness platform developed under Webwrite Pvt Limited. Contributed as a full-stack engineer developing both the React Native CLI mobile client and NestJS backend architecture. Engineered scalable backend API design, contributed to Chewwise module development, implemented offline data sync & persistence, and achieved significant mobile app performance optimization.',
    icon: '/assets/ubamm-icon.png',
    screenshots: ['/assets/ubamm-icon.png'],
    demoVideo: '/videos/ubamm-demo.mp4',
    techStack: ['React Native CLI', 'NestJS', 'TypeScript', 'Redux Toolkit', 'Push Notifications', 'REST APIs'],
    features: [
      'Cross-platform mobile client with React Native CLI',
      'Scalable backend API design with NestJS',
      'Contribution to Chewwise module development',
      'Offline data sync & background persistence',
      'Significant app performance optimization',
      'Push notifications & REST API integration'
    ],
    category: 'Health & Wellness',
    projectType: 'company',
    role: 'Full-Stack Developer (RN CLI + NestJS)',
    company: 'Webwrite Pvt Limited',
    isPublished: false,
    stats: {
      downloads: 'Pre-Launch',
      rating: 'N/A',
      reviews: 'Active Dev'
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
    category: 'Personalisation',
    projectType: 'personal',
    role: 'Sole Developer & Copyright Owner',
    company: 'LetTech Collaboration',
    isPublished: true,
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
    category: 'Entertainment',
    projectType: 'personal',
    role: 'Sole Developer & Copyright Owner',
    company: 'LetTech Collaboration',
    isPublished: true,
    stats: {
      downloads: '10+',
      rating: '5.0',
      reviews: '01+'
    }
  }
];
