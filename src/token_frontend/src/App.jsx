import Balance from "./components/Balance";
import Faucet from "./components/Faucet";
import Header from "./components/Header";
import Transfer from "./components/Transfer";

function App() {
  return (
    <div id="screen">
      <Header />
      <Faucet />
      <Balance />
      <Transfer />
    </div>
  );
}

export default App;
