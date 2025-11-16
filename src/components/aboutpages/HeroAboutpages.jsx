import { features, stats } from "../../data"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRocket,
    faPlayCircle,
    faComments,
    faBolt,
    faChartLine,
    faHeadset,
    faMobile,
    faShieldHalved,
    faSearch,
    faHandshake
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

export default function HeroAboutpages() {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#800000] via-[#B22222] to-[#800000] relative overflow-hidden" aria-labelledby="about-hero-heading">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-2 mb-6 md:mb-8 border border-white/30">
                            <FontAwesomeIcon icon={faRocket} className="text-white w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-white font-medium text-sm sm:text-base font-sans ml-2">Agen Properti Profesional di Cirebon</span>
                        </div>

                        <h1 id="about-hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
                            Tentang <span className="text-[#D4AF37]">Sonia Property</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-[#F8F6F4] mb-6 md:mb-8 leading-relaxed md:leading-loose font-sans">
                            Agen properti profesional yang menghadirkan pengalaman terbaik dalam <strong className="text-white font-semibold">jual, beli, dan sewa properti di Cirebon</strong>.
                            Dengan layanan personal dan pendekatan profesional, kami memudahkan Anda menemukan rumah, ruko, tanah, atau apartemen impian dengan standar pelayanan terbaik.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                            {features.map((feature, index) => {
                                const iconName = iconMap[feature.icon];
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center bg-white/10 backdrop-blur-sm p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group rounded-lg"
                                    >
                                        <div className="bg-gradient-to-r from-[#800000] to-[#B22222] p-2 rounded-lg mr-3 group-hover:from-[#D4AF37] group-hover:to-[#D4AF37] transition-all duration-300">
                                            {iconName && (
                                                <FontAwesomeIcon
                                                    icon={iconName}
                                                    className="text-white w-3 h-3 md:w-4 md:h-4"
                                                />
                                            )}
                                        </div>
                                        <span className="text-white font-medium text-xs sm:text-sm leading-tight font-sans">{feature.title}</span>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                                >
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors duration-300 leading-none">
                                        {stat.number}
                                    </div>
                                    <div className="text-[#F8F6F4] text-xs sm:text-sm leading-tight font-sans">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Link
                                to="/layanan"
                                className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-white text-[#800000] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-sm sm:text-base lg:text-sm xl:text-base font-sans"
                            >
                                <FontAwesomeIcon icon={faPlayCircle} className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="ml-2 md:ml-3 group-hover:scale-110 transition-transform">Lihat Layanan Kami</span>
                            </Link>
                            <a
                                href="https://wa.me/62817730219"
                                target="_blank"
                                className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-sm sm:text-base lg:text-sm xl:text-base font-sans"
                            >
                                <FontAwesomeIcon icon={faComments} className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="ml-2 md:ml-3 group-hover:scale-110 transition-transform">Konsultasi Gratis</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-xl shadow-lg">
                                <img
                                    src="https://res.cloudinary.com/du4wegspv/image/upload/f_auto,q_auto/v1761172708/soniaproperti_w7hoyv.webp"
                                    alt="Sonia Property - Agen properti profesional di Cirebon"
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}