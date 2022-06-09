export interface Skills {
  linguistic: Linguistic;
}

interface Linguistic {
  motherTonguiList: MotherTongue[];
}

interface MotherTongue {
  description: Description;
}

interface Description {
  code: string;
  label: string;
}
