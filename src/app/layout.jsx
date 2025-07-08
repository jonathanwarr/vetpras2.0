// src/app/layout.jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Vetpras | Find Affordable Vet Care</title>
        <meta
          name="description"
          content="Canada's transparent search platform for affordable veterinary clinics and pet care services."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-neutral-900 min-h-screen">{children}</body>
    </html>
  );
}
