import React from 'react'

const ProductCommentListItem = ({ name, date, message, children }) => {
    return (
        <li className="comment py-4 mb-8 clear-both border-t relative first:border-t-0">
            <div className="comment-title flex justify-between items-center mb-4">
                <span className="name block font-semibold text-sm leading-6">{name}</span>
                <span className="date block font-light text-xs font-dana-fanum">{date}</span>
            </div>
            <div className="comment-message clear-both py-1.5 text-justify">
                {message}
            </div>
            {children}
        </li>
    )
}

export default ProductCommentListItem