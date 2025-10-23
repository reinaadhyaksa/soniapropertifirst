import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeadset,
    faClock,
    faShieldAlt,
    faUsers,
    faTag,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function HeroContactpages() {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#800000] via-[#B22222] to-[#800000] relative overflow-hidden" aria-labelledby="contact-hero-heading">
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 md:px-6 md:py-2 mb-6 md:mb-8 border border-white/30">
                        <FontAwesomeIcon icon={faHeadset} className="text-[#D4AF37] mr-2 text-sm w-4 h-4" />
                        <span className="text-white font-medium text-sm sm:text-base font-sans">Layanan Pelanggan Profesional</span>
                    </div>

                    {/* Main Heading */}
                    <h1 id="contact-hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
                        Hubungi <span className="text-[#D4AF37]">Sonia Property</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F8F6F4] max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed md:leading-loose font-sans">
                        Kami siap membantu Anda dalam setiap langkah perjalanan properti di Cirebon. Jangan ragu untuk menghubungi tim Sonia Property yang ramah dan profesional.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 max-w-2xl mx-auto">
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                                <FontAwesomeIcon icon={faClock} className="text-[#D4AF37] text-lg md:text-xl" />
                            </div>
                            <div className="text-[#F8F6F4] text-xs sm:text-sm leading-tight font-sans">Respons Cepat</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                                <FontAwesomeIcon icon={faShieldAlt} className="text-[#D4AF37] text-lg md:text-xl" />
                            </div>
                            <div className="text-[#F8F6F4] text-xs sm:text-sm leading-tight font-sans">Aman & Terpercaya</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                                <FontAwesomeIcon icon={faUsers} className="text-[#D4AF37] text-lg md:text-xl" />
                            </div>
                            <div className="text-[#F8F6F4] text-xs sm:text-sm leading-tight font-sans">Tim Profesional</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                                <FontAwesomeIcon icon={faTag} className="text-[#D4AF37] text-lg md:text-xl" />
                            </div>
                            <div className="text-[#F8F6F4] text-xs sm:text-sm leading-tight font-sans">Gratis Konsultasi</div>
                        </div>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                        <a
                            href="https://wa.me/628112400219" target="_blank"
                            className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-sm sm:text-base lg:text-sm xl:text-base font-sans">
                            <FontAwesomeIcon icon={faWhatsapp} className="mr-2 md:mr-3 text-base md:text-lg group-hover:scale-110 transition-transform" />
                            Chat WhatsApp
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center">
                        <div className="animate-bounce">
                            <FontAwesomeIcon icon={faChevronDown} className="text-white text-xl md:text-2xl opacity-70" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}