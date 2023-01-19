import { Header } from "./components/Header";
import "./scss/index.css";
import { StorageProperty } from "./property";
import { Container } from "./components/Container";

const App = () => {
  return (
    <StorageProperty>
      <Header />
      <Container />
    </StorageProperty>
  );
}

export default App;