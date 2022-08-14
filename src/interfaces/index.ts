import type { BannerItemType } from "types";

export interface ISchedule {
  days: string;
  hours: string;
}

export interface IBannerItem {
  content?: string | undefined;
  schedules?: ISchedule[] | undefined;
  title: string;
  type: BannerItemType;
}
