import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"; // optional

import App from "./App";
import Meme from "./components/Meme.js";
import Nav from "./components/Nav";

describe("main functionalities", () => {
  it("adds an item to the cart", () => {
    render(<App />);

    const navcounter = screen.getByTestId("navCounter");
    expect(navcounter).toBeInTheDocument;
  });
});
