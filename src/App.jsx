import "./App.css";
import NavBar from "./components/NavBar";
import InputNotesForm from "./components/InputNotesForm";
import DisplayNotes from "./components/DisplayNotes";
import { useReducer } from "react";
import { convertToNotes } from "./converter";
import { sanitizeInput } from "../sanitizeInput";

const ACTIONS = {
  ADD_NOTES: "add-notes",
  CHOOSE_KEY: "choose-key",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NOTES: {
      if (!state.targetKey) return { notes: "You need to select a key" };
      const tokens = sanitizeInput(action.payload);
      const mappedArray = tokens.map(
        (solfa) => convertToNotes(solfa, state.targetKey) || solfa
      );
      return { ...state, notes: mappedArray.join(" ") };
    }

    case ACTIONS.CHOOSE_KEY: {
      return { ...state, targetKey: action.payload };
    }

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { notes: "", targetKey: "C" });

  function addNotes(string) {
    dispatch({ type: ACTIONS.ADD_NOTES, payload: string });
  }

  function chooseKey(targetKey) {
    dispatch({ type: ACTIONS.CHOOSE_KEY, payload: targetKey });
  }

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-cyan-100 via-sky-50 to-blue-100">
      <NavBar />

      <main className="flex-1 px-5 md:px-15 ">
        <div className="flex max-md:flex-col max-md:items-center gap-10 mb-8">
          <InputNotesForm
            addNotes={addNotes}
            chooseKey={chooseKey}
            currentKey={state.targetKey}
          />
          <DisplayNotes notes={state.notes} />
        </div>
      </main>
    </div>
  );
}

export default App;
