import { ArtworksGallerySection } from "./sections/ArtworksGallerySection";
import { BeautyRenaissanceSection } from "./sections/BeautyRenaissanceSection/BeautyRenaissanceSection";
import { EternalBeautySection } from "./sections/EternalBeautySection/EternalBeautySection";
import { ExhibitionListingsSection } from "./sections/ExhibitionListingsSection/ExhibitionListingsSection";
import { ExhibitionUpdatesSection } from "./sections/ExhibitionUpdatesSection/ExhibitionUpdatesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ReligiousMotifsSection } from "./sections/ReligiousMotifsSection";
import { RenaissanceExplorationSection } from "./sections/RenaissanceExplorationSection/RenaissanceExplorationSection";
import { RenaissanceIntroductionSection } from "./sections/RenaissanceIntroductionSection/RenaissanceIntroductionSection";
import { RenaissanceMiracleSection } from "./sections/RenaissanceMiracleSection/RenaissanceMiracleSection";
import { VirtualTourSection } from "./sections/VirtualTourSection/VirtualTourSection";

const pageSections = [
  HeroSection,
  RenaissanceIntroductionSection,
  BeautyRenaissanceSection,
  VirtualTourSection,
  RenaissanceMiracleSection,
  EternalBeautySection,
  ReligiousMotifsSection,
  RenaissanceExplorationSection,
  ArtworksGallerySection,
  ExhibitionUpdatesSection,
  ExhibitionListingsSection,
  FooterSection,
];

export const Exporttofigma = (): JSX.Element => {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      {pageSections.map((Section, index) => (
        <Section key={`${Section.name}-${index}`} />
      ))}
    </main>
  );
};
