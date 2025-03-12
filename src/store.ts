import {signal} from "@preact/signals-react";

export const count = signal(Number(localStorage.getItem("count") || 0));