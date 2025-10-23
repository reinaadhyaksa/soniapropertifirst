import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowRight,
    faCalendar,
    faCheck,
    faClock,
    faEye,
    faFileContract,
    faKey,
    faPlayCircle,
    faSearch
} from '@fortawesome/free-solid-svg-icons';
import { steps } from "../../data";
import { SectionHeader } from "../Template";

export default function StepServicepages() {
    const stepIcons = [faSearch, faEye, faFileContract, faKey]

    return (
        <section className="section-padding bg-gradient-to-b from-white to-[#FAFAFA]" aria-labelledby="how-it-works-heading">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title={"Cara Kerja Layanan"}
                    subTitle={"Sonia Property"}
                    desc={'Proses transaksi properti yang mudah dan transparan di Cirebon dengan bantuan tim profesional kami. Mulai dari pencarian hingga serah terima kunci.'}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
                    <div className="hidden lg:block absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-[#800000]/10 via-[#B22222]/10 to-[#800000]/10 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#800000] to-[#B22222] w-0 group-hover:w-full transition-all duration-1000"></div>
                    </div>

                    <div className="hidden lg:flex absolute top-20 left-0 w-full justify-between -z-10">
                        {steps.map((_, index) => (
                            <div
                                key={index}
                                className="w-3 h-3 bg-gradient-to-r from-[#800000] to-[#B22222] rounded-full shadow-md"
                                style={{
                                    transform: `translateX(${index * 100}%)`
                                }}
                            ></div>
                        ))}
                    </div>

                    {steps.map((step, index) => {
                        const iconName = stepIcons[index]

                        return (
                            <article
                                key={index}
                                className="text-center group cursor-pointer relative"
                            >
                                <div className="relative mb-6 md:mb-8">
                                    <div className="relative bg-white border border-gray-100 rounded-xl p-6 md:p-8 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                                        <div className="relative mb-4 md:mb-6">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-[#B22222] rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
                                            <div className="relative bg-gradient-to-br from-[#800000] to-[#B22222] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:shadow-lg transition-all duration-300">
                                                <span className="text-white text-base sm:text-xl font-bold font-sans">{step.number}</span>
                                            </div>
                                        </div>

                                        <div className="mb-3 md:mb-4">
                                            <div className="bg-gradient-to-br from-[#FAFAFA] to-[#F5F5F5] w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                                {iconName && (
                                                    <FontAwesomeIcon
                                                        icon={iconName}
                                                        className="w-5 h-5 md:w-6 md:h-6 text-[#800000]"
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="text-base sm:text-lg font-bold text-[#2B2B2B] mb-3 md:mb-4 group-hover:text-[#800000] transition-colors duration-300 leading-tight font-sans">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#6B7280] leading-relaxed text-sm sm:text-base mb-3 md:mb-4 font-sans">
                                            {step.description}
                                        </p>

                                        {step.features && (
                                            <ul className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                                                {step.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="text-xs sm:text-sm text-[#6B7280] flex items-center justify-center font-sans">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-green-600" />
                                                        <span className="ml-1 md:ml-2">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {step.duration && (
                                            <div className="inline-flex items-center bg-gradient-to-r from-[#FAFAFA] to-[#F5F5F5] px-2 py-1 md:px-3 md:py-1 rounded-lg border border-gray-200">
                                                <FontAwesomeIcon icon={faClock} className="w-3 h-3 text-[#6B7280]" />
                                                <span className="text-xs sm:text-sm text-[#6B7280] font-medium font-sans ml-1">{step.duration}</span>
                                            </div>
                                        )}
                                    </div>

                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                                            <div className="bg-gradient-to-r from-[#800000] to-[#B22222] text-white p-1 md:p-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 md:w-5 md:h-5" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </article>
                        )
                    })}
                </div>

                <div className="text-center mt-12 md:mt-16">
                    <div className="bg-gradient-to-r from-[#800000] to-[#B22222] rounded-xl p-6 md:p-8 lg:p-12 text-white max-w-4xl mx-auto shadow-lg">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 leading-tight font-serif">
                            Siap Memulai Perjalanan Properti Anda?
                        </h3>
                        <p className="text-[#F8F6F4] text-base sm:text-lg mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed font-sans">
                            Bergabung dengan ratusan klien yang telah sukses menemukan properti impian melalui proses yang mudah dan terpercaya.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                            <a
                                href="https://wa.me/628112400219"
                                target="_blank"
                                className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center text-sm sm:text-base lg:text-sm xl:text-base font-sans hover:transform hover:-translate-y-0.5">
                                <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="ml-2">Jadwalkan Konsultasi</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}