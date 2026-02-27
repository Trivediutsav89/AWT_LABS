import React, { useState, useOptimistic } from "react";

function Q5_UseOptimistic() {
  const [comments, setComments] = useState([]);
  const [optimisticComments, addOptimistic] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment]
  );

  const handleAdd = async () => {
    const newComment = {
      id: Date.now(),
      text: "New Comment",
      pending: true
    };

    addOptimistic(newComment);

    await new Promise((res) => setTimeout(res, 1000));

    setComments((prev) => [...prev, { ...newComment, pending: false }]);
  };

  return (
    <div style={{ border: "2px solid orange", padding: "10px" }}>
      <h2>Q5 - useOptimistic</h2>
      <button onClick={handleAdd}>Add Comment</button>

      <ul>
        {optimisticComments.map((c) => (
          <li key={c.id}>
            {c.text} {c.pending && "(Sending...)"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Q5_UseOptimistic;