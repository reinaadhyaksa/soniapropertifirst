import HeroAboutpages from '../components/aboutpages/HeroAboutpages';
import Vision from '../components/aboutpages/Vision';
import Features from '../components/aboutpages/Features';
import Values from '../components/aboutpages/Values';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Aboutpages() {
    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "Tentang Kami - Properti Riau",
                    "description": "Platform properti modern yang menghadirkan pengalaman baru dalam jual, beli, dan sewa properti di Riau.",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Properti Riau",
                        "description": "Platform properti digital terdepan di Riau untuk jual, beli, dan sewa properti.",
                        "foundingDate": "2018",
                        "numberOfEmployees": "50+",
                        "areaServed": "Riau",
                        "knowsAbout": ["Properti Riau", "Jual Beli Rumah Riau", "Sewa Properti Riau", "Agen Properti Pekanbaru"],
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Jl. Sudirman No. 123",
                            "addressLocality": "Pekanbaru",
                            "addressRegion": "Riau",
                            "postalCode": "28125",
                            "addressCountry": "ID"
                        }
                    }
                })}
            </script>

            <Header />
            <HeroAboutpages />
            <Vision />
            <Features />         
            <Values />
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
                            "name": "Tentang Kami",
                            "item": "https://propertiriau.com/tentang-kami"
                        }
                    ]
                })}
            </script>
        </>
    )
}