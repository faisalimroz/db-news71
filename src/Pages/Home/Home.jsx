import React from 'react';
import MainCover from '../../components/UI/MainCover/MainCover';
import LifeStyle from '../../components/UI/LifeStyle/LifeStyle';
import JobAds from '../../components/UI/Job Ads/JobAds';
import Entertement from '../../components/UI/Entertement/Entertement';

const Home = () => {
    return (
        <div>
            <MainCover></MainCover>
            <LifeStyle></LifeStyle>
            <JobAds></JobAds>
            <Entertement></Entertement>
        </div>
    );
};

export default Home;