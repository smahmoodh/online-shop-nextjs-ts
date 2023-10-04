import Link from 'next/link'
import React from 'react'

import './BoxTitleBar.css'

const BoxTitleBar = ({ title, showMoreLink = false, url = '#', type, icon }) => {
    const typeConfig = {
        page: {
            className: "w-auto text-xl leading-8 float-right",
        },
        box: {
            className: "h1 w-auto text-sm leading-6 float-right md:text-lg md:leading-7 font-semibold",
        },
        default: {
            className: "w-auto text-sm font-semibold leading-7",
        },
    };
    function renderContent() {
        const typeStyle = typeConfig[type] || typeConfig.default;
        if (type === 'page') {
            return (
                <h1 className={typeStyle.className}>
                    {title}
                </h1>
            );
        } else if ( type === 'box') {
            return (
                <span className={typeStyle.className}>
                    {title}
                </span>
            );
        } else {
            return (
                <span className={typeStyle.className}>
                    {title}
                </span>
            );
        }
    }
    return (
        <div className={`widget__header ${icon ? 'has-icon' : ''} ${type +'-'}header`}>
            {renderContent()}
            {showMoreLink ?
                <span className="w-auto m-0 float-left leading-6 text-xs text-primary text-left md:text-base md:leading-[26px]">
                    <Link className="text-primary" href={url}>
                        مشاهده همه
                    </Link>
                </span>
                :
                ''}
        </div>
    )
}

export default BoxTitleBar