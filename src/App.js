import { useSelector, useDispatch } from "react-redux";
import {
  setTitle,
  setDescription,
  addBug,
  deleteBug,
  editBug
} from "./Redux/sliceOrReducer";

function App() {
  const dispatch = useDispatch();
  const { title, description, bugs } = useSelector(
    (state) => state.bugTracker
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Bug Tracker</h2>

      {/* Input fields controlled by Redux */}
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => dispatch(setTitle(e.target.value))}
        style={{ padding: "8px", margin: "5px", width: "90%" }}
      />
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => dispatch(setDescription(e.target.value))}
        style={{ padding: "8px", margin: "5px", width: "90%", height: "80px" }}
      />

      <button
        onClick={() => dispatch(addBug())}
        style={{ padding: "8px 15px", margin: "10px auto", display:'block' }}
      >
        Add
      </button>

      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            <b>{bug.title}</b> - {bug.description}
            <button
              onClick={() =>
                dispatch(
                  editBug({
                    id: bug.id,
                    title: prompt("New title:", bug.title),
                    description: prompt("New description:", bug.description)
                  })
                )
              }
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteBug(bug.id))}
              style={{ marginLeft: "5px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
