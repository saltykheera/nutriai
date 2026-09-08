import './globals.css';

export const metadata = {
  metadataBase: new URL('https://nutrilens.ai'),
  title: 'NutriLens AI — Turn Confusing Food Labels into Instant, Personalized Health Insights',
  description: 'AI-powered food label scanner that uses OCR to analyze ingredients, nutrition facts, additives, and allergens. Get instant health scores and personalized allergy alerts.',
  keywords: 'food label analyzer, nutrition scanner, allergy alerts, AI OCR food scanner, additive radar, ingredient health score',
  openGraph: {
    title: 'NutriLens AI — Instant Food Label & Allergen Intelligence',
    description: 'Never guess what you are eating again. Decode ingredients, flag allergens, and track nutrition with AI vision.',
    images: ['/assets/hero-food-scan.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
