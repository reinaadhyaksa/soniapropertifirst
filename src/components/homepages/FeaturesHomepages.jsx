import { Link } from "react-router-dom"
import { features } from "../../data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendar,
    faPhone,
    faShieldHalved,
    faHandshake,
    faBolt,
    faChartLine,
    faMobile,
    faSearch,
    faHeadset
} from '@fortawesome/free-solid-svg-icons'
import { SectionHeader } from "../Template"

const iconMap = {
    'bolt': faBolt,
    'shield': faShieldHalved,
    'search': faSearch,
    'chart': faChartLine,
    'headset': faHeadset,
    'mobile': faMobile,
    'handshake': faHandshake,
}

export default function FeaturesHomepage() {
    return (
        <section className="section-padding bg-gradient-to-br from-[#121212] via-[#181818] to-[#1F1F1F]" aria-labelledby="features-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={"Mengapa Memilih"}
                    subTitle={"Sonia Property?"}
                    desc={"Kami percaya, mencari properti ideal seharusnya mudah, aman, dan menyenangkan. Temukan pilihan terbaik dari agen properti terpercaya di Cirebon — semua dalam satu tempat."}
                />

                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    {features.map((feature, index) => {
                        const iconName = iconMap[feature.icon] || faShieldHalved;

                        return (
                            <article
                                key={index}
                                className="bg-[#1E1E1E] p-5 xs:p-6 sm:p-6 md:p-7 lg:p-8 rounded-xl text-center border border-[#FFFFFF15] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 property-card group"
                            >
                                <div className="bg-gradient-to-br from-[#E4725A] to-[#D8896A] w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 group-hover:from-[#D6A676] group-hover:to-[#D6A676] transition-all duration-300 shadow-lg group-hover:scale-110">
                                    <FontAwesomeIcon
                                        icon={iconName}
                                        className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white"
                                    />
                                </div>

                                <h3 className="text-base xs:text-lg sm:text-xl md:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#D6A676] transition-colors duration-300 leading-tight tracking-tight font-sans">
                                    {feature.title}
                                </h3>

                                <p className="text-[#CCCCCC] leading-relaxed sm:leading-loose text-sm xs:text-base sm:text-base md:text-lg tracking-normal font-sans">
                                    {feature.description}
                                </p>

                                <div className="mt-4 sm:mt-5 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-8 xs:w-10 sm:w-10 md:w-12 h-1 bg-gradient-to-r from-[#E4725A] to-[#D6A676] rounded-full mx-auto"></div>
                                </div>
                            </article>
                        )
                    })}
                </div>

                <div className="mt-10 sm:mt-12 md:mt-16 text-center">
                    <div className="bg-gradient-to-r from-[#1E1E1E] to-[#2A2A2A] rounded-xl p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-white shadow-2xl border border-[#E4725A30]">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight font-serif">
                            Siap Memulai Perjalanan Properti Anda?
                        </h3>
                        <p className="text-[#CCCCCC] text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto leading-relaxed md:leading-loose tracking-normal font-sans">
                            Bergabung dengan ratusan klien yang telah menemukan properti impian mereka melalui Sonia Property di Cirebon.
                        </p>
                        <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4">
                            <Link
                                to={"/kontak"}
                                className="px-5 py-2.5 xs:px-6 xs:py-3 sm:px-6 sm:py-3 md:px-8 md:py-3 bg-gradient-to-r from-[#E4725A] to-[#D8896A] text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 shadow-lg hover:transform hover:-translate-y-1 flex items-center justify-center text-sm xs:text-base sm:text-base md:text-lg tracking-wide font-sans hover:scale-105">
                                <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                                <span className="ml-2">Konsultasi Gratis</span>
                            </Link>
                            <a
                                href="https://wa.me/62817730219"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 xs:px-6 xs:py-3 sm:px-6 sm:py-3 md:px-8 md:py-3 bg-transparent border-2 border-[#D6A676] text-[#D6A676] font-semibold rounded-lg hover:bg-[#D6A676] hover:text-[#121212] transition-all duration-300 flex items-center justify-center text-sm xs:text-base sm:text-base md:text-lg tracking-wide font-sans hover:transform hover:-translate-y-1 hover:scale-105">
                                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                                <span className="ml-2">Hubungi Kami</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}