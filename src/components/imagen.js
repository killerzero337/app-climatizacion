'use client'
import {
    changeHandler,
    dblclickHandler,
    dragOverHandler,
    dropHandler,

} from '@/lib/events'

function Imagen({ img }) {
    return (
        <>
            <img
                id='imgPreview'
                className='w-120 h-72 rounded object-cover'
                src={img}
                onDrop={dropHandler}
                onDragOver={dragOverHandler}
                onDoubleClick={dblclickHandler}
                
            />
            <input type='file'
                name='file'
                accept='image/*'
                onChange={changeHandler}
                style={{ display: 'none' }}
            />
        </>
    )
}

export default Imagen