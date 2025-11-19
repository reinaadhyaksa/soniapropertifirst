import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBed,
    faDoorOpen,
    faKey,
    faMapMarkerAlt,
    faRulerCombined,
    faTag
} from '@fortawesome/free-solid-svg-icons'
import { propertiesForSale, propertiesForRent } from "../../data"
import { SectionHeader } from "../Template"
import { Link } from "react-router-dom"

export default function FeaturesServicepages() {
    const [activeTab, setActiveTab] = useState('jual')

    // Fungsi untuk membuat slug dari title
    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-')
    }

    // Fungsi untuk handle klik tombol Detail
    const handleDetailClick = (property) => {
        const phoneNumber = "62817730219";
        const message = `Halo, saya tertarik dengan properti berikut:\n\n*${property.title}*\nLokasi: ${property.location}\nHarga: ${property.price}\nTipe: ${property.type}\nStatus: ${property.status}\n\nBisa saya mendapatkan informasi lebih lanjut?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    }

    const renderPropertyDetails = (details) => {
        if (details.beds) {
            return (
                <>
                    <span className="flex items-center text-xs sm:text-sm text-[#A7A7A7]">
                        <FontAwesomeIcon icon={faBed} className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="ml-1">{details.beds} Kamar</span>
                    </span>
                    <span className="flex items-center text-xs sm:text-sm text-[#A7A7A7]">
                        <FontAwesomeIcon icon={faBed} className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="ml-1">{details.baths} Kamar Mandi</span>
                    </span>
                    <span className="flex items-center text-xs sm:text-sm text-[#A7A7A7]">
                        <FontAwesomeIcon icon={faRulerCombined} className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="ml-1">{details.area}</span>
                    </span>
                </>
            )
        } else if (details.floors) {
            return (
                <>
                    <span className="flex items-center text-xs sm:text-sm text-[#A7A7A7]">
                        <FontAwesomeIcon icon={faDoorOpen} className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="ml-1">{details.floors}</span>
                    </span>
                    <span className="flex items-center text-xs sm:text-sm text-[#A7A7A7]">
                        <FontAwesomeIcon icon={faRulerCombined} className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="ml-1">{details.area}</span>
                    </span>
                </>
            )
        } else {
            return (
                <span className="flex items-center text-xs sm:text-sm text-[#A7A7A7]">
                    <FontAwesomeIcon icon={faRulerCombined} className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="ml-1">{details.area}</span>
                </span>
            )
        }
    }

    const getStatusBadge = (status, type) => {
        const isSold = (type === 'Dijual' && status === 'Terjual') || (type === 'Disewa' && status === 'Tersewa');
        const isAvailable = (type === 'Dijual' && status === 'Tersedia') || (type === 'Disewa' && status === 'Tersedia');

        if (isSold) {
            return (
                <span className="absolute top-3 right-3 bg-gray-600 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-lg">
                    {status}
                </span>
            );
        }

        if (isAvailable) {
            return (
                <span className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-lg">
                    {status}
                </span>
            );
        }

        return null;
    }

    const currentProperties = activeTab === 'jual' ? propertiesForSale : propertiesForRent

    return (
        <section className="section-padding bg-gradient-to-b from-[#121212] to-[#1A1A1A]" aria-labelledby="featured-properties-heading" id="properti">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title={"Properti"}
                    subTitle={"Unggulan Cirebon"}
                    desc={'Jelajahi pilihan properti terbaik kami yang tersedia untuk <strong class="font-semibold">dijual dan disewa di Cirebon</strong> dengan harga kompetitif dan lokasi strategis'}
                />

                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="inline-flex rounded-xl border border-[#FFFFFF15] p-1 bg-[#1E1E1E] shadow-lg" role="tablist" aria-label="Jenis layanan properti">
                        <button
                            onClick={() => setActiveTab('jual')}
                            className={`px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all duration-300 flex items-center text-sm sm:text-base font-sans ${activeTab === 'jual'
                                ? 'bg-gradient-to-r from-[#E4725A] to-[#D8896A] text-white shadow-lg'
                                : 'text-[#CCCCCC] hover:bg-[#2A2A2A]'
                                }`}
                            role="tab"
                            aria-selected={activeTab === 'jual'}
                            aria-controls="jual-panel"
                            id="jual-tab"
                        >
                            <FontAwesomeIcon icon={faTag} className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="ml-2">Properti Dijual</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('sewa')}
                            className={`px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all duration-300 flex items-center text-sm sm:text-base font-sans ${activeTab === 'sewa'
                                ? 'bg-gradient-to-r from-[#E4725A] to-[#D8896A] text-white shadow-lg'
                                : 'text-[#CCCCCC] hover:bg-[#2A2A2A]'
                                }`}
                            role="tab"
                            aria-selected={activeTab === 'sewa'}
                            aria-controls="sewa-panel"
                            id="sewa-tab"
                        >
                            <FontAwesomeIcon icon={faKey} className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="ml-2">Properti Disewa</span>
                        </button>
                    </div>
                </div>

                <div
                    id="jual-panel"
                    role="tabpanel"
                    aria-labelledby="jual-tab"
                    className={activeTab === 'jual' ? 'block' : 'hidden'}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {propertiesForSale.map((property, index) => (
                            <article
                                key={index}
                                className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 property-card group hover:-translate-y-2 border border-[#FFFFFF15]"
                                itemScope
                                itemType="https://schema.org/Product"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={property.image}
                                        alt={`${property.title} - Properti dijual di ${property.location}`}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                        itemProp="image"
                                    />

                                    <span className={`absolute top-3 left-3 md:top-4 md:left-4 bg-gradient-to-r from-[#E4725A] to-[#D8896A] text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-lg`}>
                                        {property.type}
                                    </span>

                                    {getStatusBadge(property.status, property.type)}
                                </div>

                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#D6A676] transition-colors duration-300 line-clamp-2 leading-tight font-sans" itemProp="name">
                                        {property.title}
                                    </h3>

                                    <p className="text-[#A7A7A7] mb-3 md:mb-4 flex items-center text-sm sm:text-base font-sans" itemProp="location" itemScope itemType="https://schema.org/Place">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span className="ml-1 md:ml-2" itemProp="address">{property.location}</span>
                                    </p>

                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex space-x-3 md:space-x-4" itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
                                            {renderPropertyDetails(property.details)}
                                        </div>
                                    </div>

                                    {/* Deskripsi Properti */}
                                    <div className="mb-4">
                                        <p className="text-[#CCCCCC] text-sm line-clamp-3 leading-relaxed">
                                            {property.description}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center mb-4">
                                        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                                            <span className="text-xl sm:text-2xl font-bold text-[#D6A676]" itemProp="price">{property.price}</span>
                                            <meta itemProp="priceCurrency" content="IDR" />
                                            {property.priceNote && (
                                                <span className="text-[#A7A7A7] text-xs sm:text-sm block mt-1 font-sans">{property.priceNote}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex space-x-2 md:space-x-3">
                                        <Link
                                            to={`/layanan/${createSlug(property.title)}`}
                                            state={{ property, propertyType: 'sale', propertyIndex: index }}
                                            className={`flex-1 py-2 md:py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group/btn text-xs sm:text-sm font-sans cursor-pointer ${property.status === 'Terjual' || property.status === 'Tersewa'
                                                ? 'bg-gray-600 hover:bg-gray-700 cursor-not-allowed'
                                                : 'bg-gradient-to-r from-[#E4725A] to-[#D8896A] hover:from-[#D6A676] hover:to-[#D6A676] hover:scale-105'
                                                }`}
                                        >
                                            <span>
                                                {property.status === 'Terjual' || property.status === 'Tersewa'
                                                    ? 'Tidak Tersedia'
                                                    : 'Detail'
                                                }
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div
                    id="sewa-panel"
                    role="tabpanel"
                    aria-labelledby="sewa-tab"
                    className={activeTab === 'sewa' ? 'block' : 'hidden'}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {propertiesForRent.map((property, index) => (
                            <article
                                key={index}
                                className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 property-card group hover:-translate-y-2 border border-[#FFFFFF15]"
                                itemScope
                                itemType="https://schema.org/Product"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={property.image}
                                        alt={`${property.title} - Properti disewa di ${property.location}`}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                        itemProp="image"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <span className={`absolute top-3 left-3 md:top-4 md:left-4 bg-gradient-to-r from-[#E4725A] to-[#D8896A] text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-lg`}>
                                        {property.type}
                                    </span>

                                    {getStatusBadge(property.status, property.type)}
                                </div>

                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#D6A676] transition-colors duration-300 line-clamp-2 leading-tight font-sans" itemProp="name">
                                        {property.title}
                                    </h3>

                                    <p className="text-[#A7A7A7] mb-3 md:mb-4 flex items-center text-sm sm:text-base font-sans" itemProp="location" itemScope itemType="https://schema.org/Place">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span className="ml-1 md:ml-2" itemProp="address">{property.location}</span>
                                    </p>

                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex space-x-3 md:space-x-4" itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
                                            {renderPropertyDetails(property.details)}
                                        </div>
                                    </div>

                                    {/* Deskripsi Properti */}
                                    <div className="mb-4">
                                        <p className="text-[#CCCCCC] text-sm line-clamp-3 leading-relaxed">
                                            {property.description}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center mb-4">
                                        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                                            <span className="text-xl sm:text-2xl font-bold text-[#D6A676]" itemProp="price">{property.price}</span>
                                            <meta itemProp="priceCurrency" content="IDR" />
                                            {property.priceNote && (
                                                <span className="text-[#A7A7A7] text-xs sm:text-sm block mt-1 font-sans">{property.priceNote}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex space-x-2 md:space-x-3">
                                        <Link
                                            to={`/layanan/${createSlug(property.title)}`}
                                            state={{ property, propertyType: 'rent', propertyIndex: index }}
                                            className={`flex-1 py-2 md:py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group/btn text-xs sm:text-sm font-sans cursor-pointer ${property.status === 'Terjual' || property.status === 'Tersewa'
                                                ? 'bg-gray-600 hover:bg-gray-700 cursor-not-allowed'
                                                : 'bg-gradient-to-r from-[#E4725A] to-[#D8896A] hover:from-[#D6A676] hover:to-[#D6A676] hover:scale-105'
                                                }`}
                                        >
                                            <span>
                                                {property.status === 'Terjual' || property.status === 'Tersewa'
                                                    ? 'Tidak Tersedia'
                                                    : 'Detail'
                                                }
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}