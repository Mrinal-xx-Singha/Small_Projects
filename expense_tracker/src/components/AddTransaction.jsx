
const AddTransaction = () => {
  return (
    <>
    <h3>Add new transaction</h3>
    <form id="form">
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" id="text" placeholder="Enter text..."/>
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount<br/>
            (negative - expense, positive -income)
            
            </label>
            <input type="text" id="amount" placeholder="Enter amount..."/>
        </div>
        <button className="btn">Add Transaction</button>
    </form>

    </>
  )
}

export default AddTransaction