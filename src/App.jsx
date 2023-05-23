import Main from "./layout/Main";
import ItemContextProvider from "./store/itemContext";

function App() {
  return (
    <ItemContextProvider>
      <Main />
    </ItemContextProvider>
  );
}

export default App;
