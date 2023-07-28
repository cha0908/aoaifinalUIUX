import React from "react";
import ReactDOMClient from "react-dom/client";
import { ElementChatgptOptionA } from "./screens/ElementChatgptOptionA";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ElementChatgptOptionA />);
