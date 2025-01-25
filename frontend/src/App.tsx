import { TrpcProvider} from "./lib/trpc";
import "./App.css";
import List from "./List";

function App() {

  return (
    <TrpcProvider>
      <List />
    </TrpcProvider>
  );
}

export default App;
