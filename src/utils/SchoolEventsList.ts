export interface SchoolEvent {
  school: string;
  location: string;
  date: string;
  participants: number;
  image: string;
  status: string;
}

export const schoolEvents: SchoolEvent[] = [
  {
    school: "Aarambha Vidya Mandir",
    location: "Itahari",
    date: "March 15-17, 2025",
    participants: 300,
    image: "🏫",
    status: "Completed",
  },
  {
    school: "Barhakhestra NP School",
    location: "Itahari",
    date: "March 20-22, 2025",
    participants: 200,
    image: "🌟",
    status: "Completed",
  },
  {
    school: "Babylon International School",
    location: "Itahari",
    date: "April 5-7, 2025",
    participants: 150,
    image: "🏫",
    status: "Completed",
  },
];
