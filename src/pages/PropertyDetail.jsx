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
    faPhone // ← Tambahkan icon phone
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
        const phoneNumber = "+6281235272436";
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
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <FontAwesomeIcon icon={faBed} className="mx-auto mb-2 text-[#800000] text-xl" />
                        <div className="text-sm text-gray-600">Kamar Tidur</div>
                        <div className="font-bold text-lg sm:text-xl">{details.beds}</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <FontAwesomeIcon icon={faBath} className="mx-auto mb-2 text-[#800000] text-xl" />
                        <div className="text-sm text-gray-600">Kamar Mandi</div>
                        <div className="font-bold text-lg sm:text-xl">{details.baths}</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <FontAwesomeIcon icon={faRulerCombined} className="mx-auto mb-2 text-[#800000] text-xl" />
                        <div className="text-sm text-gray-600">Luas</div>
                        <div className="font-bold text-lg sm:text-xl">{details.area}</div>
                    </div>
                </div>
            );
        } else if (details.floors) {
            return (
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <FontAwesomeIcon icon={faDoorOpen} className="mx-auto mb-2 text-[#800000] text-xl" />
                        <div className="text-sm text-gray-600">Lantai</div>
                        <div className="font-bold text-lg sm:text-xl">{details.floors}</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <FontAwesomeIcon icon={faRulerCombined} className="mx-auto mb-2 text-[#800000] text-xl" />
                        <div className="text-sm text-gray-600">Luas</div>
                        <div className="font-bold text-lg sm:text-xl">{details.area}</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="grid grid-cols-1 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <FontAwesomeIcon icon={faRulerCombined} className="mx-auto mb-2 text-[#800000] text-xl" />
                        <div className="text-sm text-gray-600">Luas Tanah</div>
                        <div className="font-bold text-lg sm:text-xl">{details.area}</div>
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
                return 'bg-blue-600';
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#800000]"></div>
            </div>
        );
    }

    if (!property) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Properti Tidak Ditemukan</h1>
                    <Link to="/" className="text-[#800000] hover:underline">
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        );
    }

    const allImages = property.images ? [property.image, ...property.images.slice(1)] : [property.image];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <Link
                        to="/layanan"
                        className="inline-flex items-center text-[#800000] hover:text-[#B22222] transition-colors duration-300 text-sm sm:text-base"
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
                            <div key={index} className="rounded-xl overflow-hidden shadow-lg">
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
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    {/* Status Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`${property.badgeColor} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
                            {property.type}
                        </span>
                        <span className={`${getStatusColor(property.status)} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
                            {property.status}
                        </span>
                    </div>

                    {/* Title and Location */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        {property.title}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-4 text-sm sm:text-base">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 mr-2" />
                        <span>{property.location}</span>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <div className="text-2xl sm:text-3xl font-bold text-[#800000]">
                            {property.price}
                        </div>
                        {property.priceNote && (
                            <div className="text-gray-600 text-xs sm:text-sm mt-1">
                                {property.priceNote}
                            </div>
                        )}
                    </div>

                    {/* Property Details */}
                    {renderPropertyDetails(property.details)}

                    {/* Description */}
                    <div className="mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Deskripsi Properti</h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            {property.description}
                        </p>
                    </div>

                    {/* Features */}
                    {property.features && property.features.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Fasilitas</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {property.features.map((feature, index) => (
                                    <div key={index} className="flex items-center text-sm sm:text-base">
                                        <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-[#800000] mr-3" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Contact Buttons */}
                    <div className="space-y-3 mb-6">
                        <button
                            onClick={() => handleContact('whatsapp')}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 mr-2" />
                            Hubungi via WhatsApp
                        </button>
                        <button
                            onClick={() => handleContact('phone')}
                            className="w-full bg-[#800000] hover:bg-[#B22222] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                        >
                            <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-2" />
                            Telepon Sekarang
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Informasi Penting</h4>
                        <ul className="text-xs sm:text-sm text-blue-800 space-y-1">
                            <li>• Harga sudah termasuk PPN</li>
                            <li>• Proses legalitas dijamin aman</li>
                            <li>• Bantuan KPR available</li>
                            <li>• Free survey lokasi</li>
                        </ul>
                    </div>
                </div>

                {/* Property Specification */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Spesifikasi Detail</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Informasi Umum</h3>
                            <div className="space-y-2 text-xs sm:text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tipe Properti</span>
                                    <span className="font-medium">{property.type}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Status</span>
                                    <span className="font-medium">{property.status}</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Spesifikasi Bangunan</h3>
                            <div className="space-y-2 text-xs sm:text-sm">
                                {property.details.beds && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Kamar Tidur</span>
                                        <span className="font-medium">{property.details.beds}</span>
                                    </div>
                                )}
                                {property.details.baths && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Kamar Mandi</span>
                                        <span className="font-medium">{property.details.baths}</span>
                                    </div>
                                )}
                                {property.details.floors && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Jumlah Lantai</span>
                                        <span className="font-medium">{property.details.floors}</span>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Luas</span>
                                    <span className="font-medium">{property.details.area}</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Informasi Harga</h3>
                            <div className="space-y-2 text-xs sm:text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Harga</span>
                                    <span className="font-medium text-[#800000]">{property.price}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Sistem Pembayaran</span>
                                    <span className="font-medium">Cash/Kredit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}