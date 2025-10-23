import HeroHomepages from "../components/homepages/HeroHomepages";
import FeaturesHomepage from "../components/homepages/FeaturesHomepages";
import PropertyHomepages from "../components/homepages/PropertyHomepages";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Homepage() {
    return (
        <>
            <Header />
            <HeroHomepages />
            <FeaturesHomepage />
            <PropertyHomepages />
            <Footer />
        </>
    )
}