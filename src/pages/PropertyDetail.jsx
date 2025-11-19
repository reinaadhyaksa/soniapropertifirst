import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { propertiesForSale, propertiesForRent } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBed,
    faBath,
    faRulerCombined,
    faDoorOpen,
    faMapMarkerAlt,
    faArrowLeft,
    faCheck,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function PropertyDetail() {
    const { propertySlug } = useParams();
    const location = useLocation();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if property data is passed via state
        if (location.state && location.state.property) {
            setProperty(location.state.property);
            setLoading(false);
        } else {
            // Fallback to original logic if no state is passed
            setTimeout(() => {
                const allProperties = [...propertiesForSale, ...propertiesForRent];
                // Try to find property by slug in title
                const foundProperty = allProperties.find(prop => {
                    const slug = prop.title
                        .toLowerCase()
                        .replace(/[^\w ]+/g, '')
                        .replace(/ +/g, '-');
                    return slug === propertySlug;
                });

                if (foundProperty) {
                    setProperty(foundProperty);
                }
                setLoading(false);
            }, 500);
        }
    }, [propertySlug, location.state]);

    const handleContact = (contactType) => {
        const phoneNumber = "+62817730219";
        const message = `Halo, saya tertarik dengan properti berikut:\n\n*${property.title}*\nLokasi: ${property.location}\nHarga: ${property.price}\nTipe: ${property.type}\nStatus: ${property.status}\n\nBisa saya mendapatkan informasi lebih lanjut?`;

        if (contactType === 'whatsapp') {
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
        } else {
            // For phone call
            window.open(`tel:${phoneNumber}`, '_self');
        }
    };

    const renderPropertyDetails = (details) => {
        if (details.beds) {
            return (
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-[#1E1E1E] rounded-lg border border-[#FFFFFF15]">
                        <FontAwesomeIcon icon={faBed} className="mx-auto mb-2 text-[#D6A676] text-xl" />
                        <div className="text-sm text-[#CCCCCC]">Kamar Tidur</div>
                        <div className="font-bold text-lg sm:text-xl text-white">{details.beds}</div>
                    </div>
                    <div className="text-center p-4 bg-[#1E1E1E] rounded-lg border border-[#FFFFFF15]">
                        <FontAwesomeIcon icon={faBath} className="mx-auto mb-2 text-[#D6A676] text-xl" />
                        <div className="text-sm text-[#CCCCCC]">Kamar Mandi</div>
                        <div className="font-bold text-lg sm:text-xl text-white">{details.baths}</div>
                    </div>
                    <div className="text-center p-4 bg-[#1E1E1E] rounded-lg border border-[#FFFFFF15]">
                        <FontAwesomeIcon icon={faRulerCombined} className="mx-auto mb-2 text-[#D6A676] text-xl" />
                        <div className="text-sm text-[#CCCCCC]">Luas</div>
                        <div className="font-bold text-lg sm:text-xl text-white">{details.area}</div>
                    </div>
                </div>
            );
        } else if (details.floors) {
            return (
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-[#1E1E1E] rounded-lg border border-[#FFFFFF15]">
                        <FontAwesomeIcon icon={faDoorOpen} className="mx-auto mb-2 text-[#D6A676] text-xl" />
                        <div className="text-sm text-[#CCCCCC]">Lantai</div>
                        <div className="font-bold text-lg sm:text-xl text-white">{details.floors}</div>
                    </div>
                    <div className="text-center p-4 bg-[#1E1E1E] rounded-lg border border-[#FFFFFF15]">
                        <FontAwesomeIcon icon={faRulerCombined} className="mx-auto mb-2 text-[#D6A676] text-xl" />
                        <div className="text-sm text-[#CCCCCC]">Luas</div>
                        <div className="font-bold text-lg sm:text-xl text-white">{details.area}</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="grid grid-cols-1 gap-4 mb-6">
                    <div className="text-center p-4 bg-[#1E1E1E] rounded-lg border border-[#FFFFFF15]">
                        <FontAwesomeIcon icon={faRulerCombined} className="mx-auto mb-2 text-[#D6A676] text-xl" />
                        <div className="text-sm text-[#CCCCCC]">Luas Tanah</div>
                        <div className="font-bold text-lg sm:text-xl text-white">{details.area}</div>
                    </div>
                </div>
            );
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Tersedia':
                return 'bg-green-600';
            case 'Terjual':
            case 'Tersewa':
                return 'bg-gray-600';
            default:
                return 'bg-[#E4725A]';
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#121212] flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#D6A676]"></div>
            </div>
        );
    }

    if (!property) {
        return (
            <div className="min-h-screen bg-[#121212] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Properti Tidak Ditemukan</h1>
                    <Link to="/" className="text-[#D6A676] hover:underline">
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        );
    }

    const allImages = property.images ? [property.image, ...property.images.slice(1)] : [property.image];

    return (
        <div className="min-h-screen bg-[#121212]">
            {/* Header */}
            <div className="bg-[#1A1A1A] shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <Link
                        to="/layanan"
                        className="inline-flex items-center text-[#D6A676] hover:text-[#E4725A] transition-colors duration-300 text-sm sm:text-base"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5 mr-2" />
                        Kembali ke Daftar Properti
                    </Link>
                </div>
            </div>

            {/* Main Content - Stack Layout (Atas-Bawah) */}
            <div className="container mx-auto px-4 py-8">
                {/* Image Gallery Section - Menampilkan semua gambar sekaligus */}
                <div className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allImages.map((img, index) => (
                            <div key={index} className="rounded-xl overflow-hidden shadow-2xl border border-[#FFFFFF15]">
                                <img
                                    src={img}
                                    alt={`${property.title} view ${index + 1}`}
                                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Property Info Section */}
                <div className="bg-[#1E1E1E] rounded-xl shadow-2xl p-6 mb-8 border border-[#FFFFFF15]">
                    {/* Status Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gradient-to-r from-[#E4725A] to-[#D8896A] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                            {property.type}
                        </span>
                        <span className={`${getStatusColor(property.status)} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg`}>
                            {property.status}
                        </span>
                    </div>

                    {/* Title and Location */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {property.title}
                    </h1>
                    <div className="flex items-center text-[#CCCCCC] mb-4 text-sm sm:text-base">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 mr-2 text-[#D6A676]" />
                        <span>{property.location}</span>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <div className="text-2xl sm:text-3xl font-bold text-[#D6A676]">
                            {property.price}
                        </div>
                        {property.priceNote && (
                            <div className="text-[#A7A7A7] text-xs sm:text-sm mt-1">
                                {property.priceNote}
                            </div>
                        )}
                    </div>

                    {/* Property Details */}
                    {renderPropertyDetails(property.details)}

                    {/* Description */}
                    <div className="mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Deskripsi Properti</h3>
                        <p className="text-[#CCCCCC] leading-relaxed text-sm sm:text-base">
                            {property.description}
                        </p>
                    </div>

                    {/* Features */}
                    {property.features && property.features.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Fasilitas</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {property.features.map((feature, index) => (
                                    <div key={index} className="flex items-center text-sm sm:text-base">
                                        <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-[#D6A676] mr-3" />
                                        <span className="text-[#CCCCCC]">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Contact Buttons */}
                    <div className="space-y-3 mb-6">
                        <button
                            onClick={() => handleContact('whatsapp')}
                            className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:shadow-xl text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center text-sm sm:text-base shadow-lg"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 mr-2" />
                            Hubungi via WhatsApp
                        </button>
                        <button
                            onClick={() => handleContact('phone')}
                            className="w-full bg-gradient-to-r from-[#E4725A] to-[#D8896A] hover:from-[#D8896A] hover:to-[#E4725A] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center text-sm sm:text-base shadow-lg"
                        >
                            <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-2" />
                            Telepon Sekarang
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="p-4 bg-[#2A2A2A] rounded-lg border border-[#E4725A30]">
                        <h4 className="font-semibold text-[#D6A676] mb-2 text-sm sm:text-base">Informasi Penting</h4>
                        <ul className="text-xs sm:text-sm text-[#CCCCCC] space-y-1">
                            <li>• Harga sudah termasuk PPN</li>
                            <li>• Proses legalitas dijamin aman</li>
                            <li>• Bantuan KPR available</li>
                            <li>• Free survey lokasi</li>
                        </ul>
                    </div>
                </div>

                {/* Property Specification */}
                <div className="bg-[#1E1E1E] rounded-xl shadow-2xl p-6 mb-8 border border-[#FFFFFF15]">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Spesifikasi Detail</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="border border-[#FFFFFF15] rounded-lg p-4 bg-[#2A2A2A]">
                            <h3 className="font-semibold text-white mb-3 text-sm sm:text-base">Informasi Umum</h3>
                            <div className="space-y-2 text-xs sm:text-sm">
                                <div className="flex justify-between">
                                    <span className="text-[#CCCCCC]">Tipe Properti</span>
                                    <span className="font-medium text-white">{property.type}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[#CCCCCC]">Status</span>
                                    <span className="font-medium text-white">{property.status}</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-[#FFFFFF15] rounded-lg p-4 bg-[#2A2A2A]">
                            <h3 className="font-semibold text-white mb-3 text-sm sm:text-base">Spesifikasi Bangunan</h3>
                            <div className="space-y-2 text-xs sm:text-sm">
                                {property.details.beds && (
                                    <div className="flex justify-between">
                                        <span className="text-[#CCCCCC]">Kamar Tidur</span>
                                        <span className="font-medium text-white">{property.details.beds}</span>
                                    </div>
                                )}
                                {property.details.baths && (
                                    <div className="flex justify-between">
                                        <span className="text-[#CCCCCC]">Kamar Mandi</span>
                                        <span className="font-medium text-white">{property.details.baths}</span>
                                    </div>
                                )}
                                {property.details.floors && (
                                    <div className="flex justify-between">
                                        <span className="text-[#CCCCCC]">Jumlah Lantai</span>
                                        <span className="font-medium text-white">{property.details.floors}</span>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <span className="text-[#CCCCCC]">Luas</span>
                                    <span className="font-medium text-white">{property.details.area}</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-[#FFFFFF15] rounded-lg p-4 bg-[#2A2A2A]">
                            <h3 className="font-semibold text-white mb-3 text-sm sm:text-base">Informasi Harga</h3>
                            <div className="space-y-2 text-xs sm:text-sm">
                                <div className="flex justify-between">
                                    <span className="text-[#CCCCCC]">Harga</span>
                                    <span className="font-medium text-[#D6A676]">{property.price}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[#CCCCCC]">Sistem Pembayaran</span>
                                    <span className="font-medium text-white">Cash/Kredit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}