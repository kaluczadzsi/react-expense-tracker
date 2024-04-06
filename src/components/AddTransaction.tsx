import { useState } from 'react';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h3>Add new transaction</h3>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Enter text..."
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="number"
          onChange={(e) => setAmount(parseInt(e.target.value))}
          value={amount}
          placeholder="Enter amount..."
        />
      </div>
      <button className="btn">Add transaction</button>
    </>
  );
};

export default AddTransaction;
