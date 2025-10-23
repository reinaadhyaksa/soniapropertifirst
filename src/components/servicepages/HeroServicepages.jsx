import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendar,
    faChevronDown,
    faSearch,
    faStar
} from '@fortawesome/free-solid-svg-icons'

export default function HeroServicepages() {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#800000] via-[#B22222] to-[#800000] relative overflow-hidden" aria-labelledby="services-hero-heading">
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-2 mb-6 md:mb-8 border border-white/30">
                        <FontAwesomeIcon icon={faStar} className="text-white w-4 h-4 md:w-5 md:h-5" />
                        <span className="text-white font-medium text-sm md:text-base font-sans ml-2">Platform Properti Terpercaya di Cirebon</span>
                    </div>

                    <h1 id="services-hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
                        Layanan <span className="text-[#D4AF37]">Sonia Property</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F8F6F4] max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed md:leading-loose font-sans">
                        Temukan solusi properti terbaik untuk kebutuhan Anda di Cirebon. <strong className="font-semibold">Jual, beli, atau sewa properti</strong> dengan mudah, aman, dan terpercaya melalui platform digital modern kami.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 max-w-2xl mx-auto">
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 leading-none">10+</div>
                            <div className="text-[#F8F6F4] text-xs sm:text-sm leading-tight font-sans">Properti Aktif</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 leading-none">1.2K+</div>
                            <div className="text-[#F8F6F4] text-xs sm:text-sm leading-tight font-sans">Klien Puas</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 leading-none">98%</div>
                            <div className="text-[#F8F6F4] text-xs sm:text-sm leading-tight font-sans">Success Rate</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 leading-none">Profesional</div>
                            <div className="text-[#F8F6F4] text-xs sm:text-sm leading-tight font-sans">Layanan Unggulan</div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                        <a
                            href="#properti"
                            className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-white text-[#800000] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-sm sm:text-base lg:text-sm xl:text-base font-sans"
                        >
                            <FontAwesomeIcon icon={faSearch} className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="ml-2 md:ml-3">Jelajahi Properti Cirebon</span>
                        </a>
                        <a
                            href="https://wa.me/628112400219"
                            target="_blank"
                            className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-sm sm:text-base lg:text-sm xl:text-base font-sans">
                            <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="ml-2 md:ml-3">Konsultasi Gratis</span>
                        </a>
                    </div>

                    <div className="flex justify-center">
                        <div className="animate-bounce">
                            <FontAwesomeIcon icon={faChevronDown} className="text-white w-6 h-6 md:w-8 md:h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}