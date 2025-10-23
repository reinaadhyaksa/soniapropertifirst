import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faQuestionCircle,
    faChevronDown,
    faCheckCircle,
    faLightbulb,
    faHeadset,
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "Bagaimana cara mendaftarkan properti saya di Sonia Property?",
            answer: "Anda dapat mendaftarkan properti melalui website kami dengan klik tombol 'Jual Properti' atau menghubungi agen kami langsung di 0811-2400-219. Tim Sonia Property akan membantu proses pendaftaran dan penilaian properti Anda di Cirebon."
        },
        {
            question: "Berapa lama proses verifikasi properti di Cirebon?",
            answer: "Proses verifikasi properti di Cirebon biasanya memakan waktu 1-3 hari kerja setelah semua dokumen lengkap diterima. Kami melakukan pengecekan kelengkapan dokumen dan survey lokasi untuk memastikan keakuratan informasi."
        },
        {
            question: "Apakah ada biaya untuk konsultasi properti di Sonia Property?",
            answer: "Konsultasi awal dengan agen Sonia Property tidak dikenakan biaya. Kami menyediakan konsultasi gratis untuk membantu Anda memahami pasar properti Cirebon dan opsi yang tersedia sesuai kebutuhan."
        },
        {
            question: "Bagaimana cara menjadi agen Sonia Property?",
            answer: "Untuk bergabung sebagai agen Sonia Property, Anda dapat menghubungi kami langsung melalui WhatsApp di 0811-2400-219 atau datang ke kantor kami di Cirebon. Kami mencari individu yang berdedikasi dan memiliki minat di bidang properti."
        },
        {
            question: "Apa saja area layanan Sonia Property?",
            answer: "Sonia Property melayani seluruh wilayah Cirebon dan sekitarnya, termasuk Kota Cirebon, Kabupaten Cirebon, dan wilayah-wilayah strategis di Jawa Barat. Kami memiliki jaringan properti yang luas di seluruh Cirebon."
        }
    ]

    return (
        <section className="section-padding bg-gradient-to-br from-white to-[#FAFAFA]" aria-labelledby="faq-heading">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-gradient-to-r from-[#800000] to-[#B22222] text-white rounded-full px-4 py-2 md:px-6 md:py-2 mb-4 md:mb-6 shadow-lg text-sm sm:text-base font-sans">
                        <FontAwesomeIcon icon={faQuestionCircle} className="mr-2 w-4 h-4" />
                        <span className="font-semibold">Bantuan & Dukungan</span>
                    </div>

                    <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight font-serif">
                        Pertanyaan Umum <span className="text-[#800000]">Sonia Property</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed md:leading-loose font-sans">
                        Beberapa pertanyaan yang sering diajukan oleh pelanggan <strong className="text-[#800000] font-semibold">Sonia Property</strong> tentang layanan properti di Cirebon.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-3 md:space-y-4">
                        {faqs.map((faq, index) => (
                            <article
                                key={index}
                                className="group bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden"
                                itemScope
                                itemType="https://schema.org/Question"
                            >
                                {/* FAQ Header */}
                                <button
                                    className="w-full px-4 py-4 md:px-8 md:py-6 text-left flex items-center justify-between group-hover:bg-[#FAFAFA] transition-all duration-300"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex items-start space-x-3 md:space-x-4">
                                        {/* Number Badge */}
                                        <div className="bg-gradient-to-r from-[#800000] to-[#B22222] text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-md flex-shrink-0 mt-0.5 md:mt-1">
                                            {index + 1}
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 group-hover:text-[#800000] transition-colors duration-300 mb-1 md:mb-2 leading-tight font-sans" itemProp="name">
                                                {faq.question}
                                            </h3>

                                            {/* Quick Tags */}
                                            <div className="flex flex-wrap gap-1 md:gap-2">
                                                {faq.tags && faq.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="bg-[#800000]/10 text-[#800000] px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-medium font-sans"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chevron Icon */}
                                    <div className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                                        <FontAwesomeIcon icon={faChevronDown} className="text-[#800000] text-base md:text-lg w-4 h-4 md:w-5 md:h-5" />
                                    </div>
                                </button>

                                {/* FAQ Content */}
                                <div
                                    className={`px-4 md:px-8 pb-4 md:pb-6 transition-all duration-300 overflow-hidden ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="border-t border-gray-200 pt-4 md:pt-6" itemScope itemType="https://schema.org/Answer">
                                        <div className="flex items-start space-x-3 md:space-x-4">
                                            {/* Answer Icon */}
                                            <div className="bg-green-100 p-2 md:p-3 rounded-lg flex-shrink-0 mt-0.5 md:mt-1">
                                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-sm md:text-lg w-4 h-4 md:w-5 md:h-5" />
                                            </div>

                                            <div className="flex-1">
                                                <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm sm:text-base font-sans" itemProp="text">
                                                    {faq.answer}
                                                </p>

                                                {/* Additional Info */}
                                                {faq.additionalInfo && (
                                                    <div className="bg-[#800000]/5 rounded-lg p-3 md:p-4 border border-[#800000]/20">
                                                        <div className="flex items-start space-x-2 md:space-x-3">
                                                            <FontAwesomeIcon icon={faLightbulb} className="text-[#D4AF37] mt-0.5 md:mt-1 text-sm md:text-lg w-4 h-4 md:w-5 md:h-5" />
                                                            <div>
                                                                <p className="text-[#800000] font-medium mb-1 md:mb-2 text-sm sm:text-base font-sans">Tips Sonia Property:</p>
                                                                <p className="text-[#800000]/80 text-xs sm:text-sm leading-relaxed font-sans">
                                                                    {faq.additionalInfo}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Action Buttons */}
                                                {faq.actions && (
                                                    <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
                                                        {faq.actions.map((action, actionIndex) => (
                                                            <a
                                                                key={actionIndex}
                                                                href={action.link}
                                                                className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#800000] to-[#B22222] text-white rounded-lg hover:from-[#A52A2A] hover:to-[#A52A2A] transition-all duration-300 text-xs sm:text-sm font-medium shadow-md hover:shadow-lg font-sans"
                                                            >
                                                                <FontAwesomeIcon icon={action.icon} className="mr-1 md:mr-2 text-xs" />
                                                                {action.text}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#B22222]/20 transition-all duration-300 pointer-events-none"></div>
                            </article>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-12 md:mt-16">
                        <div className="bg-gradient-to-r from-[#800000] to-[#B22222] rounded-xl p-6 md:p-8 text-white shadow-lg">
                            <div className="max-w-2xl mx-auto">
                                <FontAwesomeIcon icon={faHeadset} className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 text-[#D4AF37] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 leading-tight font-serif">
                                    Masih Punya Pertanyaan Lain?
                                </h3>
                                <p className="text-white/90 text-base sm:text-lg mb-4 md:mb-6 leading-relaxed font-sans">
                                    Tim dukungan <strong className="font-semibold">Sonia Property</strong> siap membantu menjawab semua pertanyaan Anda tentang properti di Cirebon.
                                </p>

                                <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                                    <a
                                        href="https://wa.me/628112400219" target="_blank"
                                        className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center group text-sm sm:text-base lg:text-sm xl:text-base font-sans"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faWhatsapp} className="mr-2 md:mr-3 text-sm md:text-base group-hover:scale-110 transition-transform" />
                                        Chat WhatsApp
                                    </a>
                                </div>

                                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/20">
                                    <p className="text-white/90 text-xs sm:text-sm font-sans">
                                        <FontAwesomeIcon icon={faPhone} className="mr-2 w-3 h-3" />
                                        <strong>Telepon Langsung:</strong> 0811-2400-219
                                    </p>
                                    <p className="text-white/80 text-xs sm:text-sm mt-1 font-sans">
                                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-3 h-3" />
                                        <strong>Email:</strong> soniaproperty.assetmanagement@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}