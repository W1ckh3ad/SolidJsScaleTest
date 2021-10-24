import { render } from "solid-js/web";
import { createSignal } from "solid-js";
import { defineCustomElements } from "@telekom/scale-components/loader";
import "@telekom/scale-components/dist/scale-components/scale-components.css";

defineCustomElements();

function Counter() {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);

  return (
    <>
      <scale-button>Button</scale-button>
      <button type="button" onClick={increment}>
        {count()}
      </button>
    </>
  );
}

render(() => <Counter />, document.getElementById("app"));
