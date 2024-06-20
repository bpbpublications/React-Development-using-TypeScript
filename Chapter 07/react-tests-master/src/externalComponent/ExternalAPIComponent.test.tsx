/* eslint-disable testing-library/no-wait-for-empty-callback */
/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import ExternalAPIComponent from "./ExternalAPIComponent";

describe("ExternalAPIComponent", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    } as Response);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders loading message initially", async () => {
    render(<ExternalAPIComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => {});
  });
});
