import { render, screen, fireEvent } from "@testing-library/react";

import { AuthProvider } from "./AuthContext";
import { AuthCredentials } from "./AuthCredentials";

describe("AuthCredentials component", () => {
  it("should toggle values", () => {
    const { debug } = render(
      <AuthProvider>
        <AuthCredentials />
      </AuthProvider>
    );
    // debug();
    expect(screen.getByText(/Is logged in: No/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/Is logged in: Yes/i)).toBeInTheDocument();
  });
});
