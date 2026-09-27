export interface FitLog {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
}

export type logType = FitLog;