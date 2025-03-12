import {createRoot} from 'react-dom/client';
import {count} from "./store";

function Another() {
    return (
					<>
						<h1>Another Page</h1>
                        <p>Count: {count}</p>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            localStorage.setItem("count", `${count.value + 1}`);
                            count.value = Number(localStorage.getItem("count") || 0);
                        }}>Increment</button>
					</>
				);
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Another />);