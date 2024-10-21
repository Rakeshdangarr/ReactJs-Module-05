import React from 'react';
   import { connect } from 'react-redux';

   const Counter = ({ count, increment, decrement }) => {
     return (
       <div className='container'>
         <h1>Heloo redux</h1>
         <p>Count: {count}</p>
         <div className='btn'>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
         </div>
       </div>
     );
   };

   const mapStateToProps = (state) => ({
     count: state.count
   });

   const mapDispatchToProps = (dispatch) => ({
     increment: () => dispatch({ type: 'INCREMENT' }),
     decrement: () => dispatch({ type: 'DECREMENT' })
   });

   export default connect(mapStateToProps, mapDispatchToProps)(Counter);