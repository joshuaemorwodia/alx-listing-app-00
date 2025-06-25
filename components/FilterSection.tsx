// components/FilterSection.tsx
export default function FilterSection() {
  return (
    <section className="my-6 p-4 bg-white rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Filter Listings</h3>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Location"
          className="border rounded px-4 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Min Price"
          className="border rounded px-4 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Max Price"
          className="border rounded px-4 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded md:col-span-3 hover:bg-blue-700"
        >
          Apply Filters
        </button>
      </form>
    </section>
  );
}
