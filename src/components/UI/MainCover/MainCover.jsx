import React from 'react';
import MainNews from '../MainNews/MainNews';

const MainCover = () => {
    return (
     <div>
           <div className="hero min-h-screen bg-gray-100">
            <div className="hero-content flex-col lg:flex-row p-8">
                <img
                    src="https://i.ibb.co/GTtZ39X/news-image.png"
                    className="w-full lg:w-1/2 rounded-lg mb-6 lg:mb-0" 
                    alt="News"
                />
                <div className="lg:ml-6">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                        দায়িত্ব পুনর্বণ্টন, ৭ উপদেষ্টাকে সামলাতে হবে আরও নতুন যেসব মন্ত্রণালয়
                    </h1>
                    <p className="py-6 text-gray-700 leading-relaxed">
                        নতুন মন্ত্রণালয়ের জন্য দায়িত্ব পুনর্বণ্টনের একটি পরিপ্রেক্ষিত প্রদান করা হয়েছে। অন্তর্বর্তী সরকারের নতুন চার উপদেষ্টাকে একাধিক মন্ত্রণালয়ের দায়িত্ব প্রদান করা হয়েছে। এর মধ্যে:
                        <ul className="list-disc list-inside mt-2 mb-4">
                            <li>ওয়াহিদ উদ্দিন মাহমুদ: পরিকল্পনা ও শিক্ষা মন্ত্রণালয়</li>
                            <li>মুহাম্মদ ফাওজুল কবির খান: বিদ্যুৎ, জ্বালানী ও খনিজ সম্পদ মন্ত্রণালয়</li>
                            <li>লে. জেনারেল জাহাংগীর আলম চৌধুরী: স্বরাষ্ট্র ও কৃষি মন্ত্রণালয়</li>
                            <li>আলী ইমাম মজুমদার: প্রধান উপদেষ্টার কার্যালয়ে সংযুক্ত</li>
                        </ul>
                        এছাড়া, ড. সালেহ উদ্দিন আহমেদকে অর্থ ও বাণিজ্য মন্ত্রণালয়ের দায়িত্ব দেওয়া হয়েছে এবং ড. আসিফ নজরুলকে আইন, বিচার, সংসদ বিষয়ক ও সংস্কৃতি মন্ত্রণালয়ের দায়িত্ব দেওয়া হয়েছে​( kalerkantho.com )​( দৈনিক জনকণ্ঠ || Daily Janakantha )​( News Bangla 24 )।
                        <br />
                        এই ধরনের পরিবর্তনগুলো সরকারী কার্যক্রমকে আরও সুসংগঠিত করার চেষ্টা হিসেবে দেখা হচ্ছে।
                    </p>
                    <button className="btn btn-primary">Continue</button>
                </div>
            </div>
        </div>
        <MainNews></MainNews>
     </div>
    );
};

export default MainCover;
