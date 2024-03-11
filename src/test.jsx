import { render, screen } from "@testing-library/react";
import App from "./pages/App";

test("Snap Button is properly named", () => {
    render(<App />);

    const element = screen.getByText(/snap/i);

    expect(element).toBeInTheDocument();
})