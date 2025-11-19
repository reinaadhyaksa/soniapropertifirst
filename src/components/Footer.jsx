import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLink,
    faHeadset,
    faChevronRight,
    faMapMarkerAlt,
    faPhone,
    faClock,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const location = useLocation()

    const isActiveLink = (path) => {
        return location.pathname === path
    }

    return (
        <footer className="bg-gradient-to-b from-[#121212] to-[#0A0A0A] text-white py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 relative overflow-hidden" role="contentinfo">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 bg-[#E4725A] rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 bg-[#D6A676] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 xs:gap-6 sm:gap-6 md:gap-7 lg:gap-8 mb-6 sm:mb-8">
                    <div className="xs:col-span-2 md:col-span-1 lg:col-span-1">
                        <div className="flex items-center mb-3 xs:mb-4 sm:mb-4">
                            <h3 className="text-lg xs:text-xl sm:text-xl md:text-2xl font-bold font-serif leading-tight tracking-tight">
                                <span className="bg-gradient-to-r from-[#C2185B] to-[#E91E63] bg-clip-text text-transparent">
                                    Sonia
                                </span>{" "}
                                <span className="text-[#D4AF37]">Property</span>
                            </h3>
                        </div>
                        <p className="text-[#A7A7A7] mb-4 xs:mb-5 sm:mb-6 leading-relaxed text-xs xs:text-sm sm:text-base font-sans">
                            Platform properti premium yang menghadirkan pengalaman eksklusif dalam jual, beli, dan sewa properti di Cirebon dengan layanan terdepan.
                        </p>
                    </div>

                    <div className="mt-4 xs:mt-0">
                        <h4 className="text-sm xs:text-base sm:text-base md:text-lg font-semibold mb-3 xs:mb-4 sm:mb-4 md:mb-6 text-white flex items-center font-sans">
                            <FontAwesomeIcon icon={faLink} className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                            <span className="ml-1.5 xs:ml-2">Tautan Cepat</span>
                        </h4>
                        <ul className="space-y-1.5 xs:space-y-2 sm:space-y-2 md:space-y-3">
                            {[
                                { name: "Beranda", path: "/" },
                                { name: "Tentang Kami", path: "/tentang-kami" },
                                { name: "Layanan Properti", path: "/layanan" }
                            ].map((item, index) => {
                                const isActive = isActiveLink(item.path)
                                return (
                                    <li key={index}>
                                        {isActive ? (
                                            <span className="text-[#D6A676] flex items-center cursor-default text-xs xs:text-sm sm:text-sm md:text-base font-sans">
                                                <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                                                <span className="ml-1.5 xs:ml-2">{item.name}</span>
                                            </span>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className="text-[#A7A7A7] hover:text-[#D6A676] transition-all duration-300 flex items-center group text-xs xs:text-sm sm:text-sm md:text-base font-sans"
                                            >
                                                <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                                                <span className="ml-1.5 xs:ml-2 group-hover:translate-x-1 transition-transform">{item.name}</span>
                                            </Link>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="mt-4 xs:mt-0">
                        <h4 className="text-sm xs:text-base sm:text-base md:text-lg font-semibold mb-3 xs:mb-4 sm:mb-4 md:mb-6 text-white flex items-center font-sans">
                            <FontAwesomeIcon icon={faHeadset} className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                            <span className="ml-1.5 xs:ml-2">Hubungi Kami</span>
                        </h4>
                        <address className="not-italic">
                            <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-gradient-to-r from-[#E4725A] to-[#D8896A] p-1 xs:p-1.5 sm:p-1.5 md:p-2 rounded-lg mr-2 xs:mr-2.5 sm:mr-3 mt-0.5 flex-shrink-0">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[#A7A7A7] block text-xs xs:text-sm sm:text-sm md:text-base font-sans">Jl. Kavling Raya No.83</span>
                                        <span className="text-[#A7A7A7] text-xs xs:text-sm sm:text-sm md:text-base font-sans">Adidharma, Gunungjati, Cirebon 45151</span>
                                    </div>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-gradient-to-r from-[#E4725A] to-[#D8896A] p-1 xs:p-1.5 sm:p-1.5 md:p-2 rounded-lg mr-2 xs:mr-2.5 sm:mr-3 flex-shrink-0">
                                        <FontAwesomeIcon icon={faPhone} className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                                    </div>
                                    <div>
                                        <a href="tel:0817730219" className="text-[#A7A7A7] hover:text-[#D6A676] transition-colors text-xs xs:text-sm sm:text-sm md:text-base font-sans">
                                            0817-730-219
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-gradient-to-r from-[#E4725A] to-[#D8896A] p-1 xs:p-1.5 sm:p-1.5 md:p-2 rounded-lg mr-2 xs:mr-2.5 sm:mr-3 flex-shrink-0">
                                        <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                                    </div>
                                    <div>
                                        <a href="mailto:soniaproperty.assetmanagement@gmail.com" className="text-[#A7A7A7] hover:text-[#D6A676] transition-colors text-xs xs:text-sm sm:text-sm md:text-base font-sans break-all">
                                            soniaproperty.assetmanagement@gmail.com
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </address>
                    </div>

                    <div className="mt-4 xs:mt-0 xs:col-span-2 md:col-span-1">
                        <h4 className="text-sm xs:text-base sm:text-base md:text-lg font-semibold mb-3 xs:mb-4 sm:mb-4 md:mb-6 text-white flex items-center font-sans">
                            <FontAwesomeIcon icon={faClock} className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                            <span className="ml-1.5 xs:ml-2">Jam Operasional</span>
                        </h4>
                        <ul className="space-y-1.5 xs:space-y-2 sm:space-y-2 md:space-y-3 text-xs xs:text-sm sm:text-sm md:text-base font-sans">
                            <li className="flex justify-between text-[#A7A7A7]">
                                <span>Senin - Jumat</span>
                                <span className="text-[#D6A676]">09.00 – 16.00</span>
                            </li>
                            <li className="flex justify-between text-[#A7A7A7]">
                                <span>Sabtu</span>
                                <span className="text-[#D6A676]">Tutup</span>
                            </li>
                            <li className="flex justify-between text-[#A7A7A7]">
                                <span>Minggu</span>
                                <span className="text-[#D6A676]">Tutup</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#FFFFFF15] pt-4 xs:pt-5 sm:pt-6 md:pt-8 flex flex-col xs:flex-row justify-between items-center">
                    <div className="text-[#A7A7A7] text-xs mb-2 xs:mb-0 font-sans text-center xs:text-left">
                        <p>&copy; 2024 Sonia Property. Semua hak dilindungi.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer