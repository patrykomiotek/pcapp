"use client";

import { Button } from "@/ui/Button";
import { useAuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const { isLogged, toggle } = useAuthContext();

  return (
    <div>
      <h3>Auth credentials</h3>
      <p>Is logged in: {isLogged ? "Yes" : "No"} lorem</p>
      <Button label="Toggle" onClick={toggle} />
    </div>
  );
};
