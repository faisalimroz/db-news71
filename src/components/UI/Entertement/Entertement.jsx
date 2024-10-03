import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Entertement = () => {
    const cards = [
        {
            id: 1,
            title: '‘পুষ্পা-২’ সিনেমা মুক্তির তারিখ ঘোষণা',
            image: 'https://i.ibb.co/MVvYLgV/Artboard-1.png',
            tag: 'বিনোদন',
        },
        {
            id: 2,
            title: 'এবার ব্যবসায় নাম লেখালেন পরীমনি!',
            image: 'https://i.ibb.co/cJy6xMh/Artboard-1.png',
            tag: 'বিনোদন',
        },
        {
            id: 3,
            title: 'গ্রেফতার’ হওয়া প্রসঙ্গে যা বললেন অমিতাভ',
            image: 'https://i.ibb.co/qy2SYRx/dbnews71.png',
            tag: 'বিনোদন',
        },
        {
            id: 4,
            title: 'মুক্তি পাচ্ছে সালমান খানের নতুন সিনেমার গান',
            image: 'https://i.ibb.co/yyFBxnY/dbnews71.png',
            tag: 'বিনোদন',
        },
        {
            id: 5,
            title: 'সোনার বাটি-চামচে রাজ্যের মুখেভাত',
            image: 'https://i.ibb.co/jMDTYB2/dbnews71.png',
            tag: 'বিনোদন',
        },
        {
            id: 6,
            title: '‘পরীমনির মন যা চায় করুক',
            image: 'https://i.ibb.co/cbWnPLK/dbnews71.png',
            tag: 'বিনোদন',
        },
    ];
   useEffect(()=>{
    AOS.init();
   },[])
    return (
        <div className="p-6" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">বিনোদন</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map(card => (
                <div key={card.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-[180px] object-cover" />
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

export default Entertement;