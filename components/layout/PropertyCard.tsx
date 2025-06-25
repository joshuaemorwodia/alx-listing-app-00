// components/PropertyCard.tsx
import { Property } from '@/interfaces/property';
import Image from 'next/image';

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <Image
        src={property.image}
        alt={property.title}
        width={500}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600">{property.description}</p>
        <p className="mt-2 font-bold text-blue-600">₦{property.price.toLocaleString()}</p>
      </div>
    </div>
  );
}
