import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaShieldAlt, FaBolt, FaCog } from 'react-icons/fa';
const links = [
    { href: '/', name: 'الصفحة الرئيسية' },
    { href: '/about', name: 'حولنا' },
    // { href: '/products', name: 'المنتجات' },
    // { href: '/services', name: 'الخدمات' },
    { href: '/projects', name: 'المشاريع' },
    { href: '/contact', name: 'تواصل معنا' },
    { href: '/certificates', name: ' شهاداتنا' }
  ];
  
  const socialLinks = [
    { platform: 'Facebook', url: 'https://www.instagram.com/alrowaily_factory/', icon: FaFacebookF },
    { platform: 'LinkedIn', url: 'https://www.instagram.com/alrowaily_factory/', icon: FaLinkedinIn },
    { platform: 'Instagram', url: 'https://www.instagram.com/alrowaily_factory/', icon: FaInstagram },
    { platform: 'Twitter', url: 'https://www.instagram.com/alrowaily_factory/', icon: FaTwitter },
  ];

  const contactDetails = [
    { text: '123 Street, City Name' },
    { text: 'm.w.b.92@hotmail.com' },
    { text: '+966 0505870237' },
    { text: '+966 0505820333' },

  ];
  const features = [
    {
      icon: FaCog,
      title: 'التخصيص',
      description: 'قم بتخصيص تصميم الأبواب والنوافذ والديكور ليتناسب مع احتياجات منزلك بشكل مثالي.',
    },
    {
      icon: FaShieldAlt,
      title: 'الأمان',
      description: 'نحن نقدم لك أفضل وأعلى خيارات الأمان لمنتجات الأبواب والنوافذ لضمان حماية منزلك بالكامل.',
    },
    {
      icon: FaBolt,
      title: 'الأداء',
      description: 'استمتع بالأداء المثالي والتصميمات الفعّالة التي تعزز من جودة منزلك وجماله وتوفر لك الراحة والتميز',
    },
  ];
  

  const products = [
    {
      id: 1,
      title: 'Espresso Elegante',
      imageUrl: '/download.jpeg',
      price: 10,
      originalPrice: 15,
    },
    {
      id: 2,
      title: 'Mocha Madness',
      imageUrl: '/download.jpeg',
      price: 12,
      originalPrice: 17,
    },
    {
      id: 3,
      title: 'Caramel Cream Delight',
      imageUrl: '/download.jpeg',
      price: 14,
      originalPrice: 19,
    },
    {
      id: 4,
      title: 'Espresso Elegante',
      imageUrl: '/download.jpeg',
      price: 10,
      originalPrice: 15,
    },
    {
      id: 5,
      title: 'Mocha Madness',
      imageUrl: '/download.jpeg',
      price: 12,
      originalPrice: 17,
    },
    {
      id: 6,
      title: 'Caramel Cream Delight',
      imageUrl: '/download.jpeg',
      price: 14,
      originalPrice: 19,
    },
    {
      id: 7,
      title: 'Espresso Elegante',
      imageUrl: '/download.jpeg',
      price: 10,
      originalPrice: 15,
    },
    {
      id: 8,
      title: 'Mocha Madness',
      imageUrl: '/download.jpeg',
      price: 12,
      originalPrice: 17,
    },
    {
      id: 9,
      title: 'Caramel Cream Delight',
      imageUrl: '/download.jpeg',
      price: 14,
      originalPrice: 19,
    },
  ];
  const pricingPlans = [
    {
      title: 'تصميم باب أو نافذة',
      subtitle: 'لأصحاب المشاريع الفردية والفرق الصغيرة',
      price: '100',
      frequency: 'لكل تصميم',
      features: [
        'استشارة تصميم شخصية',
        'رسومات وأبعاد دقيقة',
        'تحديد المواد المناسبة',
        'خيارات تخصيص متاحة',
        'دعم مستمر خلال التنفيذ',
      ],
    },
    {
      title: 'تصميم غرفة',
      subtitle: 'للمشاريع المتوسطة والفرق المتنوعة',
      price: '500',
      frequency: 'لكل تصميم',
      features: [
        'استشارة تصميم شاملة',
        'تصميم تخطيط متكامل',
        'توصيات بمواد التشطيب',
        'خيارات تخصيص فريدة',
        'دعم خلال مراحل التنفيذ',
      ],
      highlight: true,
    },
    {
      title: 'تصميم منزل كامل',
      subtitle: 'للمشاريع الكبيرة والفِرق المتعددة',
      price: '1000',
      frequency: 'لكل تصميم',
      features: [
        'استشارات تصميم متقدمة',
        'تصميم شامل لكل غرف المنزل',
        'توصيات دقيقة بمواد البناء والتشطيب',
        'خيارات تخصيص متعددة',
        'دعم كامل خلال المشروع',
      ],
    },
  ];
  
export {links,socialLinks,contactDetails,features,products,pricingPlans };