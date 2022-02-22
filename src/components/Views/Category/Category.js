import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../../ItemListContainer/ItemListContainer';

const Category = () => {
    const params = useParams();
    return (
        <div>
            <ItemListContainer categoryId={params.categoryId} />
        </div>
    )
}

export default Category
