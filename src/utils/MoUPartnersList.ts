export interface MoUPartner {
  name: string;
  location: string;
  image?: string; // Optional logo URL
  type: string; // Type of partner (e.g., school, organization)
  date: string; // Date of MoU signing
  programs: string; // Programs offered under the MoU
  students?: number; // Optional number of students involved
}

export const moUPartners: MoUPartner[] = [
  {
    name: "SOS Hermann Gmeiner Secondary School",
    location: "Itahari",
    date: "November 24, 2024",
    programs: "Young Robotics Scientist Program",
    image: "🏫",
    type: "Private",
  },
  {
    name: "Shree Shanti Bhagwati Secondary School  ",
    location: "Letang-4, Morang",
    date: "May 30, 2024",
    programs: "Teleoperated Robots Workshop",
    image: "🏫",
    type: "community-based government institution",
  },

  {
    name: "Shree Janata Secondary School",
    location: "Itahari",
    date: "November 24, 2024",
    programs: "Robotics Camp 2081",
    image: "🏫",
    type: "Public",
  },
  {
    name: "Shree Satyanarayan Secondary School",
    location: "Biratnagar",
    date: "June 7, 2024",
    programs: "Young Robotics Scientist Program",
    image: "🏫",
    type: "Public",
  },
  {
    name: "Shree Public High School ",
    location: "Dharan",
    date: "June 14, 2024",
    programs: "Robotics Camp 2081",
    image: "🏫",
    type: "Private",
  },
  {
    name: "Eureka Residential Secondary School",
    location: "Dharan",
    date: "July 3, 2024",
    programs: "Robotics Camp 2081",
    image: "🏫",
    type: "Private",
  },
  {
    name: "SOS Hermann Gmeiner Secondary School ",
    location: "Itahari",
    date: "November 24, 2024",
    programs: "Young Robotics Scientist Program",
    image: "🏫",
    type: "Private",
  },
  {
    name: "Shree Shanti Bhagwati Secondary School  ",
    location: "Letang-4, Morang",
    date: "May 30, 2024",
    programs: "Teleoperated Robots Workshop",
    image: "🏫",
    type: "community-based government institution",
  },

  {
    name: "Shree Janata Secondary School",
    location: "Itahari",
    date: "November 24, 2024",
    programs: "Robotics Camp 2081",
    image: "🏫",
    type: "Public",
  },
  {
    name: "Shree Satyanarayan Secondary School",
    location: "Biratnagar",
    date: "June 7, 2024",
    programs: "Young Robotics Scientist Program",
    image: "🏫",
    type: "Public",
  },
  {
    name: "Shree Public High School",
    location: "Dharan",
    date: "June 14, 2024",
    programs: "Robotics Camp 2081",
    image: "🏫",
    type: "Private",
  },
  {
    name: "Eureka Residential Secondary School",
    location: "Dharan",
    date: "July 3, 2024",
    programs: "Robotics Camp 2081",
    image: "🏫",
    type: "Private",
  },
];
