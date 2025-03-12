import { createRoot } from "react-dom/client";
import {count} from "./store";
function App() {
	return (
		<article className="p-1.5">
			<h1 className="text-3xl">Hello, World</h1>
			<p className="text-lg">Count: {count}</p>
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => {
					localStorage.setItem("count", `${count.value + 1}`);
					count.value = Number(localStorage.getItem("count") || 0);
				}}
			>
				Increment
			</button>
		</article>
	);
}

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);
root.render(<App />);
