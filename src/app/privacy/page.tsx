// app/privacy/page.tsx

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
  });

  return (
    <main className="container mx-auto max-w-4xl p-8 pt-20 min-h-screen">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-white">
        Datenschutzerklärung (Privacy Policy)
      </h1>
      
      {/* Introductory Paragraph */}
      <p className="mb-6 text-gray-300">
        Wir legen Wert auf den Schutz Ihrer Daten. Da unsere Website keine Cookies verwendet, keine persönlichen Daten speichert oder verkauft, ist die Datenverarbeitung minimal.
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-white">
          1. Erfassung und Verarbeitung von Daten (Data Collection and Processing)
        </h2>
        
        {/* Sub-point 1 */}
        <h3 className="text-lg font-medium mb-1 text-gray-400">Server-Log-Dateien:</h3>
        <p className="text-gray-300 mb-2">
          Der Provider unserer Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
        </p>
        
        {/* Sub-point 2 */}
        <p className="text-gray-300">
          Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung der Website).
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-white">
          2. Cookies
        </h2>
        <p className="text-gray-300">
          Unsere Website verwendet <strong className="font-extrabold">keine Cookies</strong> oder andere Tracking-Technologien.
        </p>
      </section>
      
      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-white">
          3. Speicherung und Löschung von Daten
        </h2>
        <p className="text-gray-300">
          Wir speichern <strong className="font-extrabold">keine</strong> nutzerspezifischen oder personenbezogenen Daten über die Server-Log-Dateien hinaus. Die Server-Log-Dateien werden automatisch nach der gesetzlichen Frist gelöscht.
        </p>
      </section>

      {/* Footer Text */}
      <p className="text-sm italic text-gray-500 mt-10">
        **Letzte Aktualisierung:** {currentDate}
      </p>
    </main>
  );
}