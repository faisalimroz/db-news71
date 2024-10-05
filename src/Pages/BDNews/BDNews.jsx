import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Portal from '../../components/UI/Portal/Portal';

const BDNews = () => {



    const cards = [
        // National Articles
        {
            id: 1,
            title: 'আবরার হত্যা মামলার রায় ঘোষণা',
            image: 'https://d2u0ktu8omkpf6.cloudfront.net/2c1e3253f365c4b33b766912079413cf9ccb500e1912d0af.png',
            tag: 'জাতীয়',
            date: '2024-10-02',
            description: "আবরার হত্যাকাণ্ডের রায়ের মাধ্যমে দীর্ঘ প্রতীক্ষার অবসান ঘটল। এই ঘটনায় দোষীদের সাজা প্রদান করা হয়েছে।"
        },
        {
            id: 2,
            title: 'বাংলাদেশের জিডিপি প্রবৃদ্ধির নতুন লক্ষ্যমাত্রা',
            image: 'https://d2u0ktu8omkpf6.cloudfront.net/meta-top/meta_9cf4739ffd8934907f929e784155641fabd8ff212fe6b5ad.jpg',
            tag: 'জাতীয়',
            date: '2024-09-30',
            description: "বাংলাদেশের অর্থনীতির জিডিপি প্রবৃদ্ধির জন্য নতুন লক্ষ্য নির্ধারণ করা হয়েছে যা দেশের উন্নয়নে সহায়ক হবে।"
        },
        {
            id: 3,
            title: 'ইবির জরুরি প্রশাসনিক ও আর্থিক দায়িত্বে ড. আশ্রাফী',
            image: 'https://i.ibb.co/hcHq9zs/news-image-Recovered.png',
            tag: 'জাতীয়',
            date: '2024-09-29',
            description: "ইসলামী বিশ্ববিদ্যালয়ের প্রশাসনিক দায়িত্বে ড. আশ্রাফীকে নিয়োগ করা হয়েছে।"
        },
        {
            id: 4,
            title: 'ঢাকায় আন্তর্জাতিক বাণিজ্য মেলা শুরু',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbigIVtu5WNEsnuiRBnT692LC4QVSDkauCQhonySgJnUdkG-nXHvVdMYIAzSyLdb3vF0k&usqp=CAU',
            tag: 'জাতীয়',
            date: '2024-09-28',
            description: "ঢাকায় আন্তর্জাতিক বাণিজ্য মেলার উদ্বোধন হয়েছে, যেখানে স্থানীয় ও আন্তর্জাতিক উদ্যোক্তারা অংশ নিচ্ছেন।"
        },
        {
            id: 5,
            title: 'নতুন শিক্ষা নীতিমালা বাস্তবায়ন',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD1YzIgxiPSTD-f32wcVMm9kq7Gs7QK4E7BGpbg8s6SmEVEhrlRWdYNMiwORQ11NdVrfg&usqp=CAU',
            tag: 'জাতীয়',
            date: '2024-09-27',

        },
        {
            id: 6,
            title: 'ঢাকার বাতাসের মান নিয়ে উদ্বেগ',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9WJhoz1QaHBrlghiNCQ8KvRqcctcdOOUZXDtOnoLUfQqEoq0gsigPpdI-A88Xb5N0iI&usqp=CAU',
            tag: 'জাতীয়',
            date: '2024-09-26',
            description: "শিক্ষা ব্যবস্থায় নতুন নীতিমালা বাস্তবায়ন শুরু হয়েছে যা শিক্ষার মান উন্নত করতে সহায়ক হবে।"
        },
        {
            id: 7,
            title: 'কক্সবাজারে পর্যটন মৌসুম শুরু',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0198kCTs9nRWo_EcYxJNpbORtiMjetZacF8XvT8J8oZTy421rtLXt1L2LI2Lr6PzUWE&usqp=CAU',
            tag: 'জাতীয়',
            date: '2024-09-25',
            description: "ঢাকার বায়ু দূষণের মাত্রা বেড়ে চলেছে, যা জনস্বাস্থ্যের জন্য বড় উদ্বেগের কারণ।"
        },
        {
            id: 8,
            title: 'বন্যা পরিস্থিতি মোকাবিলায় সরকারের উদ্যোগ',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TfnBG7wJE4GhX8H0r1NYUTTNpWA7Ncx4KiI0C30be_3vyA8e1iK18YjdRg2lKSijabc&usqp=CAU',
            tag: 'জাতীয়',
            date: '2024-09-24',
            description: "সরকার বন্যা মোকাবিলায় বিভিন্ন পদক্ষেপ গ্রহণ করেছে যা ক্ষতিগ্রস্থদের সহায়তা করবে।"
        },

        // Politics Articles
        {
            id: 9,
            title: 'স্বাস্থ্য পরীক্ষার জন্য সিঙ্গাপুর গেছেন বিএনপি মহাসচিব',
            image: 'https://i.ibb.co/WKXLPCv/Artboard-1.png',
            tag: 'রাজনীতি',
            date: '2024-10-01',
            description: "বিএনপি মহাসচিব স্বাস্থ্য পরীক্ষার জন্য সিঙ্গাপুরে গেছেন।"
        },
        {
            id: 10,
            title: 'যুবলীগ নেতার মামলায় যুব মহিলা লীগ নেত্রী মিম গ্রেফতার',
            image: 'https://i.ibb.co/GkRckHK/Artboar-d-1.png',
            tag: 'রাজনীতি',
            date: '2024-09-29',
            description: "ভারতের প্রধানমন্ত্রী নরেন্দ্র মোদি বাংলাদেশ সফরে আসছেন, যা দুই দেশের সম্পর্ক উন্নয়নে সহায়ক হবে।"
        },
        {
            id: 11,
            title: 'দীর্ঘদিন পর এক টেবিলে বিএনপি-জামায়াত',
            image: 'https://i.ibb.co/TKqGH1x/Artboard-1.png',
            tag: 'রাজনীতি',
            date: '2024-09-28',
            description: "বন্যপ্রাণী সংরক্ষণে নতুন আইন প্রণয়ন করা হয়েছে যা দেশের পরিবেশ রক্ষা করবে।"
        },
        {
            id: 12,
            title: 'কারামুক্ত হলেন মির্জা আব্বাস',
            image: 'https://i.ibb.co/9s6SKsh/Artboard-1.png',
            tag: 'রাজনীতি',
            date: '2024-09-26',
            description: "রাজধানীতে ১০০ বছরের পুরনো একটি মন্দির সংস্কার করা হয়েছে, যা ঐতিহ্যের রক্ষায় গুরুত্বপূর্ণ।"
        },
        {
            id: 13,
            title: 'সরকারের পদত্যাগ ও সংসদ বিলুপ্তির ১ দফা ঘোষণা ফখরুলের',
            image: 'https://i.ibb.co/9thsnBy/dbnews71.png',
            tag: 'রাজনীতি',
            date: '2024-09-25',
            description: "অর্থনৈতিক পরিস্থিতি উন্নয়নে নতুন পরিকল্পনা গ্রহণ করা হয়েছে যা দেশের উন্নয়নে সহায়ক হবে।"
        },
        // Economy Articles
        {
            id: 14,
            title: 'বাংলাদেশ ব্যাংকের নতুন মুদ্রানীতি ঘোষণা',
            image: 'https://www.ntvbd.com/sites/default/files/styles/big_3/public/images/2024/08/20/ettiem-buth.jpg',
            tag: 'অর্থনীতি',
            date: '2024-10-02',
            description: "মাদকদ্রব্য নিয়ন্ত্রণে নতুন আইন প্রণয়ন করা হয়েছে, যা দেশের যুব সমাজকে রক্ষা করবে।"
        },
        {
            id: 15,
            title: 'রপ্তানি আয় বেড়েছে, বাণিজ্য ঘাটতি কমেছে',
            image: 'https://shampratikdeshkal.com/uploads/2024/07/online/photos/13-66a5dccf01107.jpg',
            tag: 'অর্থনীতি',
            date: '2024-09-30',
            description: "গ্রীষ্মকালীন অ্যাথলেটিক্স প্রতিযোগিতা শুরু হয়েছে, যেখানে দেশের বিভিন্ন প্রান্তের অ্যাথলেটরা অংশ নিচ্ছেন।"
        },
        {
            id: 16,
            title: 'বাজেটে কৃষিখাতে বরাদ্দ বৃদ্ধি',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs4wNlTg2lRgVI3RK49F3sXPZQMcYf3oi3OSFJD814A1Og393srydjtduGKKlkD2Dbb78&usqp=CAU',
            tag: 'অর্থনীতি',
            date: '2024-09-29',
            description: "ডেঙ্গু মোকাবিলায় সরকার বিভিন্ন উদ্যোগ গ্রহণ করেছে যাতে জনগণের স্বাস্থ্য সুরক্ষিত থাকে।"
        },
        {
            id: 17,
            title: 'চাল আমদানিতে শুল্ক কমানোর প্রস্তাব',
            image: 'https://backoffice.channel24bd.tv/media/imgAll/2022August/38-2-1649084311-1661187058-1661697918.jpg',
            tag: 'অর্থনীতি',
            date: '2024-09-28',
            description: "বিশ্ববিদ্যালয়ে নতুন ভর্তি বিজ্ঞপ্তি প্রকাশ করা হয়েছে, যা শিক্ষার্থীদের জন্য গুরুত্বপূর্ণ।"
        },
        {
            id: 18,
            title: 'গ্যাস ও বিদ্যুতের দাম বাড়ছে',
            image: 'https://imaginary.barta24.com/resize?width=1280&quality=75&type=webp&path=uploads/news/2024/Feb/20/1708439910374.jpg',
            tag: 'অর্থনীতি',
            date: '2024-09-27',
            description: "গ্যাস ও বিদ্যুতের দাম বৃদ্ধির কারণে দেশের সাধারণ জনগণের জীবনযাত্রায় বড় প্রভাব পড়বে, যা আর্থিক চাপের সৃষ্টি করবে।"
        },
        {
            id: 19,
            title: 'পুঁজিবাজারে নতুন বিনিয়োগের আহ্বান',
            image: 'https://d2u0ktu8omkpf6.cloudfront.net/5a18fd9cee706b02abedf01b8f7a1009950c84c3a93f1e7d.jpg',
            tag: 'অর্থনীতি',
            date: '2024-09-26',
            description: "সরকার পুঁজিবাজারে নতুন বিনিয়োগের আহ্বান জানিয়ে দেশের অর্থনৈতিক উন্নয়ন ও স্থিতিশীলতা নিশ্চিত করার লক্ষ্য ঘোষণা করেছে।"
        },
        {
            id: 20,
            title: 'রেমিট্যান্স প্রবাহ বৃদ্ধি পেয়েছে',
            image: 'https://www.dhakatimes24.com/assets/news_photos/2024/08/19/image-363088.jpg',
            tag: 'অর্থনীতি',
            date: '2024-09-25',
            description: "বাংলাদেশে রেমিট্যান্স প্রবাহ উল্লেখযোগ্যভাবে বৃদ্ধি পেয়েছে, যা দেশের অর্থনীতিতে ইতিবাচক প্রভাব ফেলছে এবং বিদেশে কর্মরত বাংলাদেশিদের পাঠানো অর্থের মাধ্যমে স্থানীয় বাজারে বিনিয়োগের সুযোগ সৃষ্টি করছে।"
        },
        {
            id: 21,
            title: 'অর্থনৈতিক পুনরুদ্ধারে সরকারের নতুন পদক্ষেপ',
            image: 'https://cdn.jugantor.com/assets/news_photos/2024/06/06/image-813376-1717638373.jpg',
            tag: 'অর্থনীতি',
            date: '2024-09-24',
            description: "সরকার দেশের অর্থনৈতিক পুনরুদ্ধারের জন্য নতুন পদক্ষেপ গ্রহণ করেছে, যা উদ্যোক্তাদের জন্য সহজ শর্তে ঋণ প্রদান এবং শিল্পের উন্নয়নে সহায়তা প্রদানসহ বিভিন্ন উদ্যোগ অন্তর্ভুক্ত করে।"
        },
    ];
    const { tag } = useParams()
    const filteredCards = cards?.filter(card => card.tag === tag);
    return (
        <div>
            <div className="p-6">
                <h2 className="text-xl  mb-4 flex items-center"><Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>  / {tag}</h2>
                <div>

                    <Portal cards={cards} tag={tag}></Portal>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCards?.slice(1).map(card => (
                        <div key={card.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                            <div className="card-body">
                                <h2 className="cursor-pointer ">{card.title}</h2>
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
        </div>
    );
};

export default BDNews;