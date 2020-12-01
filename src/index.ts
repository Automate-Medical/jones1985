type sex = "Male" | "Female";

export function vo2Max({ sex, height, age }: { sex: sex, height: number, age: number }): number {
  switch (sex) {
    case "Male":
      return 0.046 * height - 0.021 * age - 4.31;
    case "Female":
      return 0.046 * height - 0.021 * age - 0.62 - 4.31;
  }
}