import { StarknetConfig, InjectedConnector, useAccount, useConnectors } from '@starknet-react/core';
import './App.css';

function ConnectWallet() {
  const { address } = useAccount();
  const { connectors, connect } = useConnectors();

  return (
    <div>
      <div>{address ? `Connected as ${address}` : 'Not connected'}</div>
      <ul>
        {connectors.map((connector) => (
          <li key={connector.id()}>
            <button onClick={() => connect(connector)}>
              Connect {connector.id()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  const connectors = [new InjectedConnector({ options: { id: 'braavos' }})];
  return (
    <StarknetConfig connectors={connectors}>
      <div className="App">
	<ConnectWallet />
      </div>
    </StarknetConfig>
  );
}

export default App;
