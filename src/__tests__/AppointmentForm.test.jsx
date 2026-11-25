import { render, screen, fireEvent } from "@testing-library/react";
import AppointmentForm from "../components/AppointmentForm";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

const renderForm = () => {
  return render(
    <MemoryRouter>
      <AppointmentForm />
    </MemoryRouter>,
  );
};

describe("AppointmentForm Accessibility & Validation", () => {
  it("renders all required form fields", () => {
    renderForm();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /request appointment/i }),
    ).toBeInTheDocument();
  });

  it("applies aria-invalid to the name input when submitted empty", () => {
    renderForm();
    const nameInput = screen.getByLabelText(/full name/i);

    expect(nameInput).not.toHaveAttribute("aria-invalid", "true");
    fireEvent.click(
      screen.getByRole("button", { name: /request appointment/i }),
    );
    expect(nameInput).toHaveAttribute("aria-invalid", "true");
  });

  it("shifts focus to the first invalid input upon failed submission", () => {
    renderForm();
    const nameInput = screen.getByLabelText(/full name/i);

    fireEvent.click(
      screen.getByRole("button", { name: /request appointment/i }),
    );
    expect(nameInput).toHaveFocus();
  });

  it("renders an aria-live region for screen reader announcements", () => {
    renderForm();
    const liveRegion = document.querySelector("[aria-live]");
    expect(liveRegion).toBeInTheDocument();
  });

  it("clears validation errors when valid data is entered", () => {
    renderForm();
    const nameInput = screen.getByLabelText(/full name/i);

    fireEvent.click(
      screen.getByRole("button", { name: /request appointment/i }),
    );
    expect(nameInput).toHaveAttribute("aria-invalid", "true");

    fireEvent.change(nameInput, {
      target: { name: "name", value: "Thandi Ndlovu" },
    });
    expect(nameInput).toHaveAttribute("aria-invalid", "false");
  });
});
