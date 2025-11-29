import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { AuthContext } from "../context/AuthContext";

// Mock useNavigate
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));


test("renders HomePage heading", () => {
  // Provide fake user to AuthContext
  const mockAuth = { user: null };

  render(
    <AuthContext.Provider value={mockAuth}>
      <HomePage />
    </AuthContext.Provider>
  );

  const heading = screen.getByRole("heading", { name: /welcome to my portfolio/i });
  expect(heading).toBeInTheDocument();
});
