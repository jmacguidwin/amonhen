import { render, screen } from "@testing-library/react";
import App from "./App";

test("Snap Button is properly named", () => {
    render(<App />);

    const element = screen.getByText(/snap/i);

    expect(element).toBeInTheDocument();
})