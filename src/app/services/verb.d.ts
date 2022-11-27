export type Preposition = "an" | "auf" | "bei" | "für" | "zu" | "nach";

export interface VerbWithPrepostion {
  verb: string,
  preposition: string,
  casus: string,
  meaning: string,
  examples?: string[],
}

export interface VerbIrregular {
  verb: string,
  past: string,
  perf: string,
  meaning: string,
  additional?: string,
}
