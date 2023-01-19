import { Component, createEffect, createSignal } from "solid-js";

const [override, setOverride] = createSignal(false);

const Multiplier: Component<{ by?: number }> = (props) => {
  const [count, setCount] = createSignal(2);

  const multiplier = props.by ?? 1;

  createEffect(() => {
    override(); //Read value so that the createEffect will trigger
    setCount(1);
  });

  return (
    <div class="m-2">
      <h1>
        {count()} * {multiplier} = {count() * multiplier}
      </h1>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 border border-blue-700 rounded"
        onClick={() => setCount(count() + 1)}
      >
        Counter
      </button>
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
      <button
        class="m-2 hover:bg-gray-200 text-sm py-1 px-2 border rounded"
        onClick={() => {
          setOverride(!override());
        }}
      >
        {" "}
        Reset{" "}
      </button>
    </div>
  );
};

export default App;
