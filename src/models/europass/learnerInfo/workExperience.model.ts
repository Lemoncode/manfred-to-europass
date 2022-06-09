export interface WorkExperience {
  period: Period;
  position: Position;
}

export interface Period {
  from: YearMonth;
  to: YearMonth;
  current: boolean;
}

interface YearMonth {
  year: string;
  month: string;
}

interface Position {
  code: string;
  label: string;
}
