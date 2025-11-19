import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhoneAlt,
    faEnvelope,
    faMapMarkerAlt,
    faPhone,
    faComments
} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    const contactMethods = [
        {
            icon: faPhoneAlt,
            title: "Telepon Sonia Property",
            description: "Hubungi kami untuk konsultasi cepat dan informasi properti di Cirebon",
            contacts: [
                { type: "phone", value: "0817-730-219" },
            ],
            note: "Senin - Jumat: 09.00 – 16.00 WIB"
        },
        {
            icon: faEnvelope,
            title: "Email Sonia Property",
            description: "Kirim pertanyaan detail melalui email dan dapatkan balasan dalam waktu 24 jam",
            contacts: [
                { type: "email", value: "soniaproperty.assetmanagement@gmail.com" },
            ],
            note: "Balasan maksimal dalam 24 jam"
        },
        {
            icon: faMapMarkerAlt,
            title: "Kantor Sonia Property",
            description: "Kunjungi kantor kami di Cirebon untuk konsultasi langsung dengan tim profesional",
            address: {
                street: "Jl. Kavling Raya No.83",
                city: "Adidharma, Gunungjati, Cirebon 45151",
                country: "Jawa Barat, Indonesia"
            },
            mapUrl: "https://www.google.com/maps?q=Sonia+Property,+Jl.+Kavling+Raya+No.83,+Adidharma,+Gunungjati,+Cirebon,+West+Java+45151",
            note: "Senin - Jumat: 09.00 – 16.00 WIB"
        }
    ]

    const renderContactItem = (contact) => {
        if (contact.type === 'phone') {
            return (
                <a
                    href={`tel:${contact.value}`}
                    className="block text-[#D6A676] font-semibold hover:text-[#E4725A] transition-colors duration-300 text-sm sm:text-base"
                    aria-label={`Hubungi Sonia Property di ${contact.value}`}
                >
                    <FontAwesomeIcon icon={faPhone} className="mr-2 w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                    {contact.value}
                </a>
            )
        } else if (contact.type === 'email') {
            return (
                <a
                    href={`mailto:${contact.value}`}
                    className="block text-[#D6A676] font-semibold hover:text-[#E4725A] transition-colors duration-300 text-sm sm:text-base"
                    aria-label={`Kirim email ke Sonia Property di ${contact.value}`}
                >
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                    {contact.value}
                </a>
            )
        }
    }

    return (
        <section className="section-padding bg-gradient-to-br from-[#121212] to-[#1A1A1A]" aria-labelledby="contact-methods-heading">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center bg-gradient-to-r from-[#E4725A] to-[#D6A676] text-white rounded-full px-4 py-2 md:px-6 md:py-2 mb-4 md:mb-6 shadow-lg text-sm sm:text-base font-sans">
                        <FontAwesomeIcon icon={faComments} className="mr-2 w-4 h-4" />
                        <span className="font-semibold">Terhubung Dengan Kami</span>
                    </div>

                    <h2 id="contact-methods-heading" className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
                        Informasi Kontak <span className="bg-gradient-to-r from-[#E4725A] to-[#D6A676] bg-clip-text text-transparent">Sonia Property</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-[#CCCCCC] max-w-3xl mx-auto leading-relaxed md:leading-loose font-sans">
                        Beberapa cara untuk terhubung dengan tim <strong className="text-[#D6A676] font-semibold">Sonia Property</strong>. Kami senang mendengar dari Anda dan siap membantu kebutuhan properti Anda di Cirebon.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {contactMethods.map((method, index) => (
                        <article
                            key={index}
                            className="bg-[#1E1E1E] p-6 md:p-8 rounded-xl text-center shadow-lg border border-[#FFFFFF15] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                            itemScope
                            itemType="https://schema.org/ContactPoint"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#E4725A]/10 to-[#D6A676]/10 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="relative z-10">
                                <div className="bg-gradient-to-r from-[#E4725A] to-[#D8896A] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <FontAwesomeIcon
                                        icon={method.icon}
                                        className="text-white text-lg md:text-2xl w-6 h-6 md:w-8 md:h-8"
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#D6A676] transition-colors duration-300 leading-tight font-sans" itemProp="name">
                                    {method.title}
                                </h3>

                                <p className="text-[#CCCCCC] mb-4 md:mb-6 leading-relaxed text-sm sm:text-base font-sans" itemProp="description">
                                    {method.description}
                                </p>

                                {method.contacts ? (
                                    <div className="space-y-2 md:space-y-3">
                                        {method.contacts.map((contact, contactIndex) => (
                                            <div key={contactIndex} itemProp={contact.type === 'phone' ? 'telephone' : 'email'}>
                                                {renderContactItem(contact)}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <a
                                        href={method.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-[#D6A676] font-semibold hover:text-[#E4725A] transition-colors duration-300 text-sm sm:text-base font-sans space-y-1 md:space-y-2"
                                        aria-label="Buka lokasi Sonia Property di Google Maps"
                                        itemProp="address"
                                        itemScope
                                        itemType="https://schema.org/PostalAddress"
                                    >
                                        <p className="font-medium" itemProp="streetAddress">{method.address.street}</p>
                                        <p itemProp="addressLocality">{method.address.city}</p>
                                        <p itemProp="addressCountry">{method.address.country}</p>
                                    </a>
                                )}

                                <p className="text-[#A7A7A7] text-xs sm:text-sm mt-4 md:mt-6 pt-3 md:pt-4 border-t border-[#FFFFFF15] group-hover:border-[#D6A676]/30 transition-colors duration-300 font-sans" itemProp="hoursAvailable">
                                    {method.note}
                                </p>
                            </div>

                            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#D6A676]/20 transition-all duration-300 pointer-events-none"></div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}