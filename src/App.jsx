import "./App.css";
import NavBar from "./components/NavBar";
import InputNotesForm from "./components/InputNotesForm";
import DisplayNotes from "./components/DisplayNotes";
import { useReducer } from "react";
import Footer from "./components/Footer";
import { convertToNotes } from "./converter";

const ACTIONS = {
  ADD_NOTES: "add-notes",
  CHOOSE_KEY: "choose-key",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NOTES: {
      if (!state.targetKey) return state;
      const splitString = action.payload.trim().split(" ");
      const mappedArray = splitString.map(
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
  const [state, dispatch] = useReducer(reducer, { notes: "", targetKey: "" });

  function addNotes(string) {
    dispatch({ type: ACTIONS.ADD_NOTES, payload: string });
  }

  function chooseKey(targetKey) {
    dispatch({ type: ACTIONS.CHOOSE_KEY, payload: targetKey });
  }

  return (
    <div className="min-h-screen flex flex-col bg-sky-50">
      <NavBar />

      <main className="flex-1 px-5 md:px-20 py-10">
        <div className="flex max-md:flex-col gap-10">
          <InputNotesForm
            addNotes={addNotes}
            chooseKey={chooseKey}
            currentKey={state.targetKey}
          />
          <DisplayNotes notes={state.notes} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
