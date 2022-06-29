export interface Skills {
  linguistic: Linguistic;
}

interface Linguistic {
  motherTongueList: MotherTongue[];
}

interface MotherTongue {
  description: Description;
}

interface Description {
  code: string;
  label: string;
}
