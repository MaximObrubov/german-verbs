export type Preposition = "an" | "auf" | "bei" | "für" | "zu" | "nach";

export interface VerbWithPrepostion {
  verb: string,
  preposition: string,
  casus: string,
  meaning: string,
  // TODO: not a right place to decide wheater the verb is opened on a list page
  isShown?: boolean
}
