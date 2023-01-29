import React, { useEffect, useState } from 'react';
import data from '../database/data';
import { useFetchQestion } from '../hooks/FetchQuestion';

const Questions = () => {

    const [checked, setChecked] = useState(undefined);
    const [{ isLoading, apiData, serverError }] = useFetchQestion();
    const question = data[0];

    useEffect( () => {
        console.log(isLoading);
        // console.log(apiData);
        // console.log(serverError);
    } , []);

    const onSelect = () => {
        setChecked(true);
        console.log('radio button change');
    }

  return (
    <div className='questions'>
        <h2 className='text-light'>{question.question}</h2>

        <ul key={question.id}>
            {
                question.options.map((q, i) => (
                    <li key={i}>
                        <input 
                            type="radio" 
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={onSelect}
                        />
                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className='check'></div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Questions;