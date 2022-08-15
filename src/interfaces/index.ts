import type { CardType } from "types";

export interface ISchedule {
  days: string;
  hours: string;
}

export interface ICard {
  content?: string | undefined;
  schedules?: ISchedule[] | undefined;
  title: string;
  type: CardType;
}
