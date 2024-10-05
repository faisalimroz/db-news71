import React from 'react';

const Portal = ({ cards, tag }) => {
    // Filter cards based on the tag
    const filteredCards = cards?.filter(card => card.tag === tag);

    return (
        <div>
            {filteredCards.length > 0 ? (
                filteredCards?.slice(0,1).map(card => (
                    <div key={card.id} className="hero min-h-screen bg-gray-100">
                        <div className="hero-content flex-col lg:flex-row p-8">
                            <img
                                src={card.image}
                                className="w-full lg:w-1/2 rounded-lg mb-6 lg:mb-0"
                                alt="News"
                            />
                            <div className="lg:ml-6">
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                                    {card.title}
                                </h1>
                                <p className="py-6 text-gray-700 leading-relaxed">
                                    {card.description}
                                </p>
                                <button className="btn btn-primary">Continue</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center py-6 text-gray-700">
                    <p>No news available for this tag.</p>
                </div>
            )}
        </div>
    );
};

export default Portal;
