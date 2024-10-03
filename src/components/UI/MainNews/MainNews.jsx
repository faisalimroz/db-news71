import React from 'react';

const MainNews = () => {
    const cards = [
        {
            id: 1,
            title: 'ইবির জরুরি প্রশাসনিক ও আর্থিক দায়িত্বে ড. আশ্রাফী',
            image: 'https://i.ibb.co/hcHq9zs/news-image-Recovered.png',
            tag: 'জাতীয়',
        },
        {
            id: 2,
            title: 'ঠাকুরগাঁয়ে আন্ত:ধর্মীয় সম্প্রীতি সুরক্ষায় সক্ষমতা বিনির্মাণে বৃদ্ধিমূলক কর্মশালা অনুষ্ঠিত',
            image: 'https://i.ibb.co/fx0QqQf/news-image-Recovered.png',
            tag: 'ঠাকুরগাঁও',
        },
        {
            id: 3,
            title: 'শিক্ষা ও পরিকল্পনা উপদেষ্টা হলেন ওয়াহিদউদ্দিন মাহমুদ',
            image: 'https://i.ibb.co/br6gtHt/news-image.png',
            tag: 'জাতীয়',
        },
        {
            id: 4,
            title: 'সাখাওয়াতকে স্বরাষ্ট্র থেকে সরিয়ে বস্ত্র ও পাট মন্ত্রণালয়ে',
            image: 'https://i.ibb.co/MN13hnz/news-image.png',
            tag: 'জাতীয়',
        },
        {
            id: 5,
            title: 'নতুন কারিকুলাম নয়, কর্মশালা স্থগিত করেছি: এনসিটিবি চেয়ারম্যান',
            image: 'https://i.ibb.co/P5QV7hF/news-image-Recovered.png',
            tag: 'শিক্ষা',
        },
        {
            id: 6,
            title: 'বৈষম্য বিরোধী ডিপ্লোমা ইঞ্জিনিয়ার্স অব বাংলাদেশের আলোচনা সভা',
            image: 'https://i.ibb.co/B48J5bG/news-image-Recovered.png',
            tag: 'শিক্ষা',
        },
    ];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">সর্বশেষ সংবাদ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map(card => (
                    <div key={card.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                        <div className="card-body">
                            <h2 className="cursor-pointer">{card.title}</h2>
                            <p className='cursor-pointer my-3 text-blue-500 flex items-center gap-2'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                                </svg>
                                </span> {card.tag}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainNews;

