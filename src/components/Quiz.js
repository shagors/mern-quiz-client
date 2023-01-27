import React from 'react';

const Quiz = () => {

  const onNext = () => {
    console.log('You clicked Next Button');
  }

  const onPrev = () => {
    console.log('You clicked Prev Button');
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Your Quiz</h1>

      {/* Display questions */}
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Previous</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

    </div>
  )
}

export default Quiz;