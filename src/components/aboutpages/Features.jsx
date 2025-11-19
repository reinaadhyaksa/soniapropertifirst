import { features } from "../../data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShieldHalved,
    faHandshake,
    faBolt,
    faChartLine,
    faMobile,
    faStar,
    faAward,
    faSearch,
    faHeadset
} from '@fortawesome/free-solid-svg-icons'

const iconMap = {
    'bolt': faBolt,
    'shield': faShieldHalved,
    'search': faSearch,
    'chart': faChartLine,
    'headset': faHeadset,
    'mobile': faMobile,
    'handshake': faHandshake,
}

export default function Features() {
    return (
        <section className="section-padding bg-gradient-to-br from-[#121212] to-[#1A1A1A]" aria-labelledby="features-heading">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 md:mb-12">
                        <div className="inline-flex items-center bg-gradient-to-r from-[#E4725A] to-[#D6A676] text-white rounded-lg px-4 py-2 md:px-6 md:py-3 mb-3 md:mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 text-sm sm:text-base font-sans">
                            <FontAwesomeIcon icon={faStar} className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="font-semibold ml-2 md:ml-3">Keunggulan Layanan Kami</span>
                        </div>
                        <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight font-serif">
                            Mengapa <span className="bg-gradient-to-r from-[#E4725A] to-[#D6A676] bg-clip-text text-transparent">Memilih Sonia Property?</span>
                        </h2>
                        <p className="text-base sm:text-lg text-[#CCCCCC] max-w-2xl mx-auto leading-relaxed font-sans">
                            Agen properti profesional dengan layanan terpercaya untuk pengalaman transaksi properti Cirebon yang terbaik.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {features.map((feature, index) => {
                            const iconName = iconMap[feature.icon];

                            return (
                                <article
                                    key={index}
                                    className="bg-[#1E1E1E] rounded-xl p-5 md:p-6 shadow-lg border border-[#FFFFFF15] hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#E4725A]/10 to-[#D6A676]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                                    <div className="flex items-start relative z-10">
                                        <div className="bg-gradient-to-br from-[#E4725A] to-[#D8896A] p-3 md:p-4 rounded-xl mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:from-[#D6A676] group-hover:to-[#D6A676] transition-all duration-300">
                                            {iconName ? (
                                                <FontAwesomeIcon
                                                    icon={iconName}
                                                    className="text-white w-5 h-5 md:w-6 md:h-6"
                                                />
                                            ) : (
                                                <div className="text-white text-lg md:text-xl">⚡</div> // Fallback
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#D6A676] transition-colors duration-300 leading-tight line-clamp-2 font-sans">
                                                {feature.title}
                                            </h3>
                                            <p className="text-[#CCCCCC] leading-relaxed text-sm sm:text-base mb-3 line-clamp-3 font-sans">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}