
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import Reportmodal from '../../Dasdbord/Reportmodal';
import CAtegoryCompo from '../CAtegoryCompo';

const Categoryunique = () => {
    const [modalProduct, modalsetProduct] = useState(null)
    const users = useLoaderData()


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    users?.map(product => <CAtegoryCompo
                        key={product._id}
                        Option={product}
                        modalsetProduct={modalsetProduct}
                    >
                    </CAtegoryCompo>)
                },
            </div>
            {
                modalProduct &&
                <BookingModal
                    modalProduct={modalProduct}
                    modalsetProduct={modalsetProduct}
                >

                </BookingModal>
            },
            {
                modalProduct &&
                <Reportmodal
                    modalProduct={modalProduct}
                    modalsetProduct={modalsetProduct}
                ></Reportmodal>
            }


        </div>
    );
};

export default Categoryunique;