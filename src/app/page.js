'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LiveScannerDemo from '@/components/LiveScannerDemo';
import Workflow from '@/components/Workflow';
import AllergySpotlight from '@/components/AllergySpotlight';
import HistoryDashboard from '@/components/HistoryDashboard';
import FeaturesGrid from '@/components/FeaturesGrid';
import Testimonials from '@/components/Testimonials';
import FaqAccordion from '@/components/FaqAccordion';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import IngredientModal from '@/components/IngredientModal';
import QrModal from '@/components/QrModal';

export default function Home() {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <LiveScannerDemo onSelectIngredient={(id) => setSelectedIngredient(id)} />
        <Workflow />
        <AllergySpotlight />
        <HistoryDashboard />
        <FeaturesGrid />
        <Testimonials />
        <FaqAccordion />
        <FinalCta onOpenQr={() => setQrOpen(true)} />
      </main>

      <Footer />

      {/* Popups & Modals */}
      <IngredientModal
        ingredientId={selectedIngredient}
        onClose={() => setSelectedIngredient(null)}
      />

      <QrModal
        isOpen={qrOpen}
        onClose={() => setQrOpen(false)}
      />
    </>
  );
}
