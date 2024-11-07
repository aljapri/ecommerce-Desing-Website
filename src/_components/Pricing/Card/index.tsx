import ContuctUsButton from '@/_components/ContactUsButton';
import React from 'react';
type PricingCardProps = {
    title: string;
    subtitle: string;
    price: string;
    frequency: string;
    features: string[];
    highlight?: boolean;
  };
  
  const PricingCard: React.FC<PricingCardProps> = ({
    title,
    subtitle,
    price,
    frequency,
    features,
    highlight = false,
  }) => (
    <div className="border rounded-md p-6" dir='rtl'>
      <h3 className={`text-gray-800 text-xl font-semibold mb-2 ${highlight ? 'flex items-center' : ''}`}>
        {title} 
      </h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
  
      <div className="mt-6">
        <h3 className="text-gray-800 text-2xl font-semibold">ر.س{price} <sub className="text-gray-500 text-sm font-medium">{frequency}</sub></h3>
      </div>
  
      <div className="mt-6">
      <h4 className="text-gray-800 text-xl font-semibold mb-2">يشمل</h4>
<p className="text-sm text-gray-500">كل شيء ستحصل عليه في هذه الخطة</p>

  
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-3 fill-green-500" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
  
        <ContuctUsButton/>

      </div>
    </div>
  );

export default PricingCard;