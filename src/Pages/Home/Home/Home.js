import React from 'react';
import Advertize from '../../../Advertize';
import Category from '../../../Category/Category';
import Unique from '../../../Dasdbord/DashLayout/Unique';
import useTitle from '../../../useTitle/Usetitle';
import Banner from '../../Banner/Banner';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertize></Advertize>
            <Unique></Unique>
        </div>
    );
};

export default Home;