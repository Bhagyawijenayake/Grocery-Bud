import React, { useState } from "react";

const Form = () => {
    const [newItemName, setNewItemName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newItemName);
        setNewItemName("")

    }
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          name=""
          id=""
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
              />
              <button type="submit"className="btn">add item</button>
      </div>
    </form>
  );
};

export default Form;
