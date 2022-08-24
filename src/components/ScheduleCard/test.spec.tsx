import { render, screen } from "@testing-library/react";
import ScheduleCard from ".";

describe("ScheduleCard Component", () => {
  it("should render the ScheduleCard component", () => {
    render(
      <ScheduleCard label="Lorem Ipsum" theme="neutral">
        <ul>
          <li>Item</li>
        </ul>
      </ScheduleCard>
    );

    expect(ScheduleCard).toBeTruthy();
  });

  it("should have a level three heading", () => {
    render(
      <ScheduleCard label="Lorem Ipsum" theme="neutral">
        <ul>
          <li>Item</li>
        </ul>
      </ScheduleCard>
    );

    const heading: HTMLElement = screen.getByRole("heading", { level: 3 });

    expect(heading).toBeInTheDocument();
  });
});
