import dayjs from "dayjs";

// plugins
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

// locale
import "dayjs/locale/pt-br";

// setup global
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);

dayjs.locale("pt-br");

// timezone default (optional)
dayjs.tz.setDefault("America/Sao_Paulo");

export { dayjs };

// reusable helpers

export const formatDate = (date: dayjs.ConfigType, format = "DD/MM/YYYY") => {
  return dayjs(date).format(format);
};

export const formatDateTime = (date: dayjs.ConfigType) => {
  return dayjs(date).format("DD/MM/YYYY HH:mm");
};

export const fromNow = (date: dayjs.ConfigType) => {
  return dayjs(date).fromNow();
};

export const isTodayDate = (date: dayjs.ConfigType) => {
  return dayjs(date).isToday();
};

export const isYesterdayDate = (date: dayjs.ConfigType) => {
  return dayjs(date).isYesterday();
};

export const diffInDays = (
  start: dayjs.ConfigType,
  end: dayjs.ConfigType = new Date(),
) => {
  return dayjs(end).diff(dayjs(start), "day");
};

export const formatRange = (
  start: dayjs.ConfigType,
  end?: dayjs.ConfigType,
) => {
  const startFormatted = dayjs(start).format("MMM YYYY");

  if (!end) return `${startFormatted} - Present`;

  const endFormatted = dayjs(end).format("MMM YYYY");

  return `${startFormatted} - ${endFormatted}`;
};
