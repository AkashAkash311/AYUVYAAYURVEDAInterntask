
import '../src/app/globals.css';
import { useState } from 'react';
import {FaStar} from 'react-icons/fa';

const Star = () => {
    const [rating, setRating] = useState(null);
    const [hover, Sethover] = useState(null)
  return (
    <div className='flex'>
        {[...Array(5)].map((star, index) =>{
            const currentRating = index+1;
            return(
                <label>
                    <input className=' hidden'
                        type='radio'
                        name='rating'
                        value={currentRating}
                        onClick={() =>setRating(currentRating)}
                    />
                    <FaStar 
                        className=' cursor-pointer star' size={40}
                        color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}    
                        onMouseEnter={() => Sethover(currentRating)}
                        onMouseLeave={()=>Sethover(null)}
                    />
                </label>
            )
        })}
    </div>
  )
}

export default Star
