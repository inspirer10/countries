import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= (totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul>
                {pageNumbers.map((number,index) => (
                    <li key={index}>
                        <a href="!#" onClick={()=> paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination