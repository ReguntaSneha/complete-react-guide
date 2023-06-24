

import ExpenseDetails from '../ExpenseDetails';

import ExpenseDate from '../ExpenseDate';
import './Expenses.css';

const ExpenseItem=(props)=> {
  const clickHandler = ()=>{
    console.log('clicked!!!');
  };
  return (
    <div className='expense-item'>
      <ExpenseDate date ={props.date} />
      <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
      <button onClick={clickHandler}>Delete Expense</button>
    </div>
             

  
  
 );
}

export default ExpenseItem;