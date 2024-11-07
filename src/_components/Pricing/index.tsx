import React from 'react';
import { pricingPlans } from '@/constant';
import PricingCard from './Card';



const PricingSection: React.FC= () => (
  <div className="font-[sans-serif] mb-10">
    <div className="max-w-5xl mx-auto">
      <div className="text-center">
      <h2 className="text-gray-800 text-4xl font-bold mb-4">خطط الأسعار</h2>
<p className="text-sm text-gray-500">قم بتغيير خطتك حسب احتياجاتك</p>

      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-12 max-sm:max-w-sm max-sm:mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  </div>
);

export default PricingSection;
