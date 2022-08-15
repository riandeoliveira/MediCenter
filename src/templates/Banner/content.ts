import type { ICard } from "interfaces";

const cards: ICard[] = [
  {
    title: "Emergency Case",
    content:
      "If you need a doctor urgently outside of medicenter opening hours, call emergency appointment number for emergency service.",
    type: "summary",
  },
  {
    title: "Doctors Timetable",
    content:
      "Here at medicenter we have individual doctor's lists. Click read more below to see services and current timetable for our doctors.",
    type: "summary",
  },
  {
    title: "Opening Hours",
    schedules: [
      {
        days: "Monday - Thursday",
        hours: "8.00 - 17.00",
      },
      {
        days: "Friday",
        hours: "9.00 - 18.00",
      },
      {
        days: "Saturday",
        hours: "9.30 - 17.30",
      },
    ],
    type: "schedule",
  },
];

export default cards;
