import { Provider } from "react-redux";
import { Note } from "./components/note";
import mockServer from "./mockServer";
import { store } from "./store";

mockServer();

function App() {
  return (
    <Provider store={store}>
      <Note />
    </Provider>
  );
}

export default App;
