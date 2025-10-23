import HeroContactpages from "../components/contactpages/HeroContactpages";
import Contact from "../components/contactpages/Contact";
import FAQ from "../components/contactpages/FAQ";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/contactpages/Form";

export default function Contactpages() {
    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Kontak Properti Riau",
                    "description": "Hubungi tim properti Riau untuk konsultasi jual, beli, sewa properti di Riau. Layanan profesional dengan respon cepat.",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Properti Riau",
                        "description": "Platform properti digital terdepan di Riau",
                        "url": "https://propertiriau.com",
                        "telephone": "+6281234567890",
                        "email": "info@propertiriau.com",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Jl. Sudirman No. 123",
                            "addressLocality": "Pekanbaru",
                            "addressRegion": "Riau",
                            "postalCode": "28131",
                            "addressCountry": "ID"
                        },
                        "openingHours": "Mo-Fr 08:00-17:00, Sa 09:00-15:00",
                        "areaServed": "Riau"
                    }
                })}
            </script>
            
            <Header />
            <HeroContactpages />
            <Contact />
            <Form />
            <FAQ />
            <Footer />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Beranda",
                            "item": "https://propertiriau.com"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Kontak",
                            "item": "https://propertiriau.com/kontak"
                        }
                    ]
                })}
            </script>
        </>
    )
}