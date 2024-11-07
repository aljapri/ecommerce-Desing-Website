import React from 'react'
import Form from './Form'
import ContactDetails from '../ContactDetails'
import Map from './Map'
import ContuctUsButton from '../ContactUsButton'

function ContactUs() {
  return (
    <div className="m-20 grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-blue-400 before:h-full max-md:before:hidden">
      <div dir='rtl'>
        <h2 className="text-gray-800 text-3xl font-extrabold">تواصل معنا</h2>
        <p className="text-sm text-gray-500 mt-4 leading-relaxed">
          هل لديك استفسار محدد أو ترغب في استكشاف فرص جديدة في تصميم الأبواب والنوافذ؟ فريقنا ذو الخبرة مستعد للتفاعل معك.
        </p>

        <Form />
        <div>
          <ContuctUsButton classes='mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white' content='مراسلة فريق الدعم مباشرة
' />
        </div>

        <ContactDetails fatehr='mt-4 flex flex-wrap justify-center gap-6' sib='flex items-center text-blue-600' />
      </div>
      <Map />
    </div>
  )
}

export default ContactUs
