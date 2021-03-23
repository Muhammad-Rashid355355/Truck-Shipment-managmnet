import React, { Fragment } from 'react';
import Spinner from './tenor.gif';
import './Loading.scss';


const LoadingComponent: React.FC = () => {
    return (
        <Fragment>
            <div className='animated_gif' >
                <img
                    width='100px'
                    height='100px'
                    src={Spinner}
                    alt="Loading..."
                />

            </div>
        </Fragment>
    );
};

export default LoadingComponent;
