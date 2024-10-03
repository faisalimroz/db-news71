import React from 'react';

const JobAds = () => {
    return (
        <div>
            <div className="p-6">
  <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">চাকরি বিজ্ঞাপন</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Job Ad Card 1 */}
    <div className="bg-white shadow-md rounded-lg p-4 relative">
      <h3 className="text-xl font-semibold text-blue-700">১০ জন ম্যানেজার নিয়োগ দেবে রূপায়ণ সিটি উত্তরা</h3>
      <p className="text-gray-600 mt-2">চাকরির সুযোগের বিবরণ...</p>
      <a href="#" className="text-blue-500 font-semibold mt-4 inline-block">Apply Now</a>
      <span className="absolute w-[3px] h-[20px] bg-red-500 top-5 left-2"></span>
    </div>

    {/* Job Ad Card 2 */}
    <div className="bg-white shadow-md rounded-lg p-4 relative">
      <h3 className="text-xl font-semibold text-blue-700">ডিবি নিউজ ৭১ এ ইন্টার্নশিপ শেষে চাকরির সুযোগ</h3>
      <p className="text-gray-600 mt-2">চাকরির সুযোগের বিবরণ...</p>
      <a href="#" className="text-blue-500 font-semibold mt-4 inline-block">Apply Now</a>
      <span className="absolute w-[3px] h-[20px] bg-red-500 top-5 left-2"></span>
    </div>

    {/* Job Ad Card 3 */}
    <div className="bg-white shadow-md rounded-lg p-4 relative">
      <h3 className="text-xl font-semibold text-blue-700">১০ জন এক্সিকিউটিভ নেবে ইউএস-বাংলা এয়ারলাইন্স</h3>
      <p className="text-gray-600 mt-2">চাকরির সুযোগের বিবরণ...</p>
      <a href="#" className="text-blue-500 font-semibold mt-4 inline-block">Apply Now</a>
      <span className="absolute w-[3px] h-[20px] bg-red-500 top-5 left-2"></span>
    </div>

    {/* Repeat additional Job Ad Cards as needed */}
  </div>
</div>

        </div>
    );
};

export default JobAds;