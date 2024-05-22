'use client'
import { useFormStatus } from 'react-dom'

function boton({title}) {
    const { pending } = useFormStatus()
    return (
        <button type='submit' disabled={pending} className='bg-sky-600 transition duration-500 hover:bg-sky-600/50 bg-center text-[1.5vh] text-white bg-no-repeat h-10 rounded-xl w-56  cursor-pointer'>
            {pending ? 'Realizando operación...' : title}
        </button>
    )
}

export default boton