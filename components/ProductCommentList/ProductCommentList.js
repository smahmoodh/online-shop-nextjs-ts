import React from 'react'
import ProductCommentListItem from './ProductCommentListItem/ProductCommentListItem'

const ProductCommentList = ({ comments }) => {
    return (
        <div className="comments-box">
            <ul className="comments text-sm mt-6">
                {comments.length > 0 && comments.map((comment) => (
                    <ProductCommentListItem name={comment.name} date={comment.date} message={comment.message} key={comment.id}>
                        {comment.hasReply && (
                            <ul className='m-0 mt-6 pl-[10px] pr-7 rounded bg-gray-100 '>
                                {comment.reply.map(reply => (
                                    <ProductCommentListItem name={reply.name} date={reply.date} message={reply.message} key={reply.id} />
                                ))}
                            </ul>
                        )}
                    </ProductCommentListItem>
                ))}
            </ul>
        </div>
    )
}

export default ProductCommentList