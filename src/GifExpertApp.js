import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    return (
        <Fragment>
            <h2>My Giphy App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <div>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </div>
        </Fragment>
    )
}
