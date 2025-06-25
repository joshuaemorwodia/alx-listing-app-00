// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10 text-center">
      <p>&copy; {new Date().getFullYear()} ALX Listing App</p>
    </footer>
  );
}
