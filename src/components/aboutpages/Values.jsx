import { values } from "../../data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGem,
    faHandshake
} from '@fortawesome/free-solid-svg-icons'

export default function Values() {
    return (
        <section className="section-padding bg-gradient-to-br from-white to-[#FAFAFA]" aria-labelledby="values-heading">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-gradient-to-r from-[#800000] to-[#B22222] text-white rounded-lg px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base font-sans">
                        <FontAwesomeIcon icon={faGem} className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="font-semibold ml-2 md:ml-3">Nilai Inti Sonia Property</span>
                    </div>

                    <h2 id="values-heading" className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#2B2B2B] mb-4 md:mb-6 leading-tight font-serif">
                        Nilai-Nilai <span className="bg-gradient-to-r from-[#800000] to-[#B22222] bg-clip-text text-transparent">Kami</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed md:leading-loose font-sans">
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
                                <div className="bg-white rounded-xl p-6 md:p-8 text-center shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 relative z-10 h-full flex flex-col backdrop-blur-sm">
                                    {/* Icon Container with Gradient */}
                                    <div className="relative mb-4 md:mb-6">

                                        {/* Main Icon Circle */}
                                        <div className="relative bg-gradient-to-br from-[#800000] to-[#B22222] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:shadow-lg transition-all duration-300">
                                            {IconComponent ? (
                                                <IconComponent className="text-white w-6 h-6 md:w-8 md:h-8" />
                                            ) : (
                                                <div className="text-white text-lg md:text-2xl">⭐</div> // Fallback
                                            )}
                                        </div>

                                        {/* Number Badge */}
                                        <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-gradient-to-r from-[#B22222] to-[#D4AF37] text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-sm group-hover:scale-105 transition-transform duration-300">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg sm:text-xl font-bold text-[#2B2B2B] mb-3 md:mb-4 group-hover:text-[#800000] transition-colors duration-300 leading-tight font-sans">
                                        {value.title}
                                    </h3>
                                    <p className="text-[#6B7280] leading-relaxed flex-grow text-sm sm:text-base md:text-lg font-sans">
                                        {value.description}
                                    </p>
                                </div>
                            </article>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 md:mt-16">
                    <div className="bg-gradient-to-r from-[#800000] to-[#B22222] rounded-xl p-6 md:p-8 lg:p-12 text-white shadow-lg max-w-4xl mx-auto relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full"></div>
                            <div className="absolute top-8 right-6 w-4 h-4 md:w-6 md:h-6 bg-white rounded-full"></div>
                            <div className="absolute bottom-6 left-8 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full"></div>
                            <div className="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full"></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 leading-tight font-serif">
                                Siap Bekerja Sama dengan Nilai Terbaik?
                            </h3>
                            <p className="text-[#F8F6F4] text-base sm:text-lg mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed font-sans">
                                Mari wujudkan impian properti Anda di Cirebon dengan tim profesional yang mengutamakan kualitas, kepercayaan, dan layanan terbaik.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                                <a
                                    href="https://wa.me/62817730219"
                                    target="_blank"
                                    className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-white text-[#800000] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-sm sm:text-base lg:text-sm xl:text-base font-sans"
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