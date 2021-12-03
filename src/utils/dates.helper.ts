import moment from "moment";

export const readableDate = (date: any) => {
  return moment(date).format("MMM DD, YYYY");
};
