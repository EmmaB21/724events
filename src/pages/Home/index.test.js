import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    // Correction orthographe "Personel"
    await screen.findByText("Personnel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />);
    const eventsList = screen.getByTestId("events-list");
    expect(eventsList).toBeDefined();
  })
  it("a list a people is displayed", () => {
    render(<Home />);
    const peopleList = screen.getByTestId("people-list");
    expect (peopleList).toBeDefined();
  })
  it("a footer is displayed", () => {
    render(<Home />);
    const footer = screen.getByTestId("footer");
    expect (footer).toBeDefined();
  })
  it("an event card, with the last event, is displayed", () => {
    render(<Home />);
    const lastEventCard = screen.getByTestId("last-event-card");
    expect (lastEventCard).toBeDefined();
  })
});
