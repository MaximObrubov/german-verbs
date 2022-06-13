export type Preposition = "an" | "auf" | "bei" | "für" | "zu" | "nach";

export interface VerbWithPrepostion {
  verb: string,
  preposition: string,
  casus: string,
  meaning: string,
}
