import React, { Fragment } from 'react';

interface svgColor {
    color?: string;
}

const StatusSVG: React.FC<svgColor> = ({ color }) => {
    return (
        <Fragment>
            <svg style={{ color: color }} width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="3" r="3" fill={color ? color : '#117733'} />
            </svg>
        </Fragment>
    );
};

export default StatusSVG;
