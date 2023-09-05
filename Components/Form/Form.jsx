import { useState } from 'react';

export default function Form({setUserName}) {
  const [inputText, setInputText] = useState('');
  return (
    <form>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setUserName(inputText)
        }}
        type='submit'
      >
        Submit
      </button>
    </form>
  );
}
