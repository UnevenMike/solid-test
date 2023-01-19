import { Component, createSignal } from "solid-js";

const Multiplier: Component<{ by?: number }> = (props) => {
  const [count, setCount] = createSignal(1);

  const multiplier = props.by ?? 1;

  return (
    <div>
      <h1>
        {count()} * {multiplier} = {count() * multiplier}
      </h1>
      <button onClick={() => setCount(count() + 1)}>Counter</button>
    </div>
  );
};

const App: Component = () => {
  return (
    <div>
      <Multiplier />
      <Multiplier by={2} />
      <Multiplier by={3} />
      <Multiplier by={5} />
    </div>
  );
};

export default App;
