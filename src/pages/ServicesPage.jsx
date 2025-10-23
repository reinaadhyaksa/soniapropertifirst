import HeroServicepages from '../components/servicepages/HeroServicepages'
import FeaturesServicepages from '../components/servicepages/FeaturesServicepages';
import StepServicepages from '../components/servicepages/StepServicepages';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ServicesPages() {
    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Layanan Properti Riau - Jual Beli Sewa Properti",
                    "description": "Layanan jual, beli, dan sewa properti terpercaya di Riau. Temukan rumah, ruko, tanah, dan apartemen dengan harga terbaik.",
                    "provider": {
                        "@type": "RealEstateAgent",
                        "name": "Properti Riau",
                        "areaServed": "Riau"
                    },
                    "areaServed": {
                        "@type": "State",
                        "name": "Riau"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Layanan Properti",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Jual Properti Riau"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Beli Properti Riau"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Sewa Properti Riau"
                                }
                            }
                        ]
                    }
                })}
            </script>
            
            <Header />
            <HeroServicepages />
            <FeaturesServicepages />
            <StepServicepages />
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
                            "name": "Layanan",
                            "item": "https://propertiriau.com/layanan"
                        }
                    ]
                })}
            </script>
        </>
    )
}