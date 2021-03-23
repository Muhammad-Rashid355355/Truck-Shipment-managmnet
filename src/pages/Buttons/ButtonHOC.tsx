/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { Fragment, useState } from 'react';
import { Props } from './ButtonInterface';
import './Button.scss';


export type ButtonProps = {
    function?: () => void;
};

const ButtonHOC: React.FC<Props> = ({
    border,
    color,
    children,
    className,
    height,
    // buttonname,
    // onClick,
    radius,
    width,
    // right,
    icon,
    ClickHandler,
    background
    // testValue
}) => {
    const [totalCounts, settotalCounts] = useState(0);
    const [buttonName, setbuttonName] = useState('');
    const [allButtons, setAllButtons] = useState({
    });
    const [buttonList, setButtonList] = useState<any>([]);

    const arr: any = [];
    const ClickCount = (e: any) => {
        settotalCounts(totalCounts + 1);
        setbuttonName(e.currentTarget.className);
        setAllButtons({
            [e.currentTarget.className]: totalCounts + 1,
        });


        // arr.push(allButtons);

        // function userExists(buttonName: any) {
        //     return arr.some(function (el: any) {
        //         return el.buttonName === buttonName;
        //     });
        // }
        // userExists(buttonName);

        // buttonList?.filter((itm: any) => {
        //     if (itm.key) {
        //         itm + 1;
        //     } else {
        //         buttonList.push(allButtons);
        //     }
        //     console.log(itm);
        // });

    };
    console.log(buttonList);

    return (
        <Fragment>
            <span className='button_parent'>
                <button
                    onMouseUp={ClickCount}
                    onClick={ClickHandler}
                    style={{
                        borderRadius: radius,
                        width: width,
                        border: border,
                        color: color,
                        height: height,
                        background: background
                    }}
                    className={className}
                >
                    {icon}
                    {children}
                </button>
            </span>

        </Fragment >
    );
};

export default ButtonHOC;
