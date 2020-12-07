import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images } = useFetchGifs(category);

    // //Para que renderice unicamente si la categoría cambia
    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs));
    // }, [category])

    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {/* {loading && <p className="animate__animated animate__flash">Loading...</p>} */}

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </Fragment>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
