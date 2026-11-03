export type Tech = {
  id: string;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Language"
    | "Styling"
    | "DevOps";

  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner-Friendly" | "Intermediate";
  badge: string;
};