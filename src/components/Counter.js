import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../features/slices/counterSlice';

export default function Counter() {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section className='w-auto x-auto mt-40 flex flex-col justify-center items-center space-y-8'>
            <p className='text-6xl font-semibold'>{count}</p>
            <div className='flex space-x-4'>
                <button className='w-20 bg-red-500 rounded-xl pb-2 active:shadow-xl' onClick={() => dispatch(decrement())}><p className='text-white text-2xl'>-</p></button>
                <button className='w-20 bg-green-500 rounded-xl pb-2 active:shadow-xl' onClick={() => dispatch(increment())}><p className='text-white text-2xl'>+</p></button>
            </div>
            <button onClick={resetAll} className='font-semibold text-lg border border-gray-800 rounded-xl py-1 px-4 active:shadow-xl'>Reset</button>
            <div className='flex space-x-5'>
                <input className='border border-gray-800 rounded-md p-1' type='text' value={incrementAmount === 0 ? '' : incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
                <button className='text-white text-sm p-1 w-24 bg-blue-500 rounded-xl pb-2 active:shadow-xl' onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
            </div>
          
        </section>
    )
}