import { format, parseISO } from "date-fns";

export const formattedDate = (value: string) => format(parseISO(value), "dd/MM/Y");