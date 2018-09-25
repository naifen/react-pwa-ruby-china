import { timeSince } from "../dateTimeUtils";

const assertionData = {
  "1 second": 1000,
  "6 seconds": 6 * 1000,
  "1 minute": 60 * 1000,
  "2 minutes": 60 * 2 * 1000,
  "1 hour": 60 * 60 * 1000,
  "3 hours": 60 * 60 * 3 * 1000,
  "1 day": 60 * 60 * 24 * 1000,
  "5 days": 60 * 60 * 24 * 5 * 1000,
  "1 week": 60 * 60 * 24 * 7 * 1000,
  "2 weeks": 60 * 60 * 24 * 7 * 2 * 1000,
  "1 month": 60 * 60 * 24 * 7 * 5 * 1000,
  "2 months": 60 * 60 * 24 * 7 * 10 * 1000,
  "1 year": 60 * 60 * 24 * 7 * 4.35 * 15 * 1000,
  "2 years": 60 * 60 * 24 * 7 * 4.35 * 25 * 1000
};

it("returns formatted time ago string from a given time", () => {
  for (let dataString in assertionData) {
    expect(timeSince(Date.now() - assertionData[dataString])).toEqual(
      dataString
    );
  }
});
