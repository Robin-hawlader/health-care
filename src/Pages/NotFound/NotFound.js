import React from 'react';
import notFound from '../../images/notfound/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;