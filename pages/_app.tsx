// app/page.tsx
'use client';

import { PROPERTY_LISTINGS } from '@/constants/propertyListings';
import PropertyCard from '@/components/PropertyCard';

export default function Home() {
  return (
    <main className="px-4 py-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Find Your Next Stay</h1>
        <p className="text-lg text-gray-600">Explore top-rated properties across Nigeria</p>
      </section>

      {/* Filter Section (Just UI for now) */}
      <section className="mb-6">
        <input
          type="text"
          placeholder="Search by location..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
        />
      </section>

      {/* Property Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PROPERTY_LISTINGS.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </main>
  );
}


