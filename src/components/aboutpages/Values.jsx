import { values } from "../../data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGem,
    faHandshake
} from '@fortawesome/free-solid-svg-icons'

export default function Values() {
    return (
        <section className="section-padding bg-gradient-to-br from-[#121212] to-[#1A1A1A]" aria-labelledby="values-heading">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-gradient-to-r from-[#E4725A] to-[#D6A676] text-white rounded-lg px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 text-sm sm:text-base font-sans">
                        <FontAwesomeIcon icon={faGem} className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="font-semibold ml-2 md:ml-3">Nilai Inti Sonia Property</span>
                    </div>

                    <h2 id="values-heading" className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
                        Nilai-Nilai <span className="bg-gradient-to-r from-[#E4725A] to-[#D6A676] bg-clip-text text-transparent">Kami</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-[#CCCCCC] max-w-3xl mx-auto leading-relaxed md:leading-loose font-sans">
                        Fondasi yang menggerakkan setiap layanan kami dalam menghadirkan pengalaman properti terbaik untuk Anda di Cirebon dengan pendekatan profesional dan terpercaya.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {values.map((value, index) => {
                        const IconComponent = value.IconComponent;

                        return (
                            <article
                                key={index}
                                className="group relative"
                            >
                                {/* Main Card */}
                                <div className="bg-[#1E1E1E] rounded-xl p-6 md:p-8 text-center shadow-lg border border-[#FFFFFF15] hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 relative z-10 h-full flex flex-col backdrop-blur-sm">
                                    {/* Icon Container with Gradient */}
                                    <div className="relative mb-4 md:mb-6">

                                        {/* Main Icon Circle */}
                                        <div className="relative bg-gradient-to-br from-[#E4725A] to-[#D8896A] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                            {IconComponent ? (
                                                <IconComponent className="text-white w-6 h-6 md:w-8 md:h-8" />
                                            ) : (
                                                <div className="text-white text-lg md:text-2xl">⭐</div> // Fallback
                                            )}
                                        </div>

                                        {/* Number Badge */}
                                        <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-gradient-to-r from-[#D8896A] to-[#D6A676] text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#D6A676] transition-colors duration-300 leading-tight font-sans">
                                        {value.title}
                                    </h3>
                                    <p className="text-[#CCCCCC] leading-relaxed flex-grow text-sm sm:text-base md:text-lg font-sans">
                                        {value.description}
                                    </p>
                                </div>
                            </article>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 md:mt-16">
                    <div className="bg-gradient-to-r from-[#1E1E1E] to-[#2A2A2A] rounded-xl p-6 md:p-8 lg:p-12 text-white shadow-2xl max-w-4xl mx-auto relative overflow-hidden border border-[#E4725A30]">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 bg-[#E4725A] rounded-full"></div>
                            <div className="absolute top-8 right-6 w-4 h-4 md:w-6 md:h-6 bg-[#D8896A] rounded-full"></div>
                            <div className="absolute bottom-6 left-8 w-8 h-8 md:w-10 md:h-10 bg-[#D6A676] rounded-full"></div>
                            <div className="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-[#E4725A] rounded-full"></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 leading-tight font-serif">
                                Siap Bekerja Sama dengan Nilai Terbaik?
                            </h3>
                            <p className="text-[#CCCCCC] text-base sm:text-lg mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed font-sans">
                                Mari wujudkan impian properti Anda di Cirebon dengan tim profesional yang mengutamakan kualitas, kepercayaan, dan layanan terbaik.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                                <a
                                    href="https://wa.me/62817730219"
                                    target="_blank"
                                    className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#E4725A] to-[#D8896A] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#D8896A] hover:to-[#E4725A] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center group text-sm sm:text-base lg:text-sm xl:text-base font-sans"
                                >
                                    <FontAwesomeIcon icon={faHandshake} className="w-4 h-4 md:w-5 md:h-5" />
                                    <span className="ml-2 md:ml-3 group-hover:scale-110 transition-transform">Mulai Kerjasama</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}