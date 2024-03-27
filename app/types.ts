export type ColumnType = "string" | "number" | "date";

export interface Column {
  name: string;
  type: ColumnType;
  stringType?: string;
  numberMin?: number;
  numberMax?: number;
  dateFrom?: string;
  dateTo?: string;
}