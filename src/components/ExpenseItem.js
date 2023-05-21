import './ExpenseItem.css'
function ExpenseItem(){
    return (
        <div className="expense-item">
            <div>march 28th 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div clasName="expense-item__price"></div>
                <div>$234.6</div>
            </div>
        </div>
    )
}
export default ExpenseItem