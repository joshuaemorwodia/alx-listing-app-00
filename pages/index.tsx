// pages/index.tsx
import Hero from '@/components/Hero';
import FilterSection from '@/components/FilterSection';
import PropertyCard from '@/components/PropertyCard';
import { PROPERTY_LISTINGS } from '@/constants/propertyListings';

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <FilterSection />
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROPERTY_LISTINGS.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </div>
  );
}
