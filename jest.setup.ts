// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
// import { server } from "./mocks/server";

import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
