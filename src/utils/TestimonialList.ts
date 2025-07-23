export interface Testimonial {
  name: string;
  role: string;
  school: string;
  image: string; // URL or emoji for the testimonial giver's image
  rating: number; // Rating out of 5
  text: string; // The testimonial text
  highlight: string; // Key highlight from the testimonial
}
const testimonials: Testimonial[] = [
  {
    name: "Er. Binam Shrestha",
    role: "Founder & CEO",
    school: "Utthan Robotics",
    image: "👨‍💼",
    rating: 5,
    text: "Utthan Robotics has transformed our approach to technology education. The hands-on workshops and expert guidance have significantly improved our students' problem-solving abilities and technical skills.",
    highlight: "Transformative impact on tech education",
  },
  {
    name: "Mrs. Shruti Shrestha",
    role: "Finance Associate",
    school: "Utthan Robotics",
    image: "👩‍💼",
    rating: 5,
    text: "The partnership with Utthan Robotics has been exceptional. Our students are now more confident in robotics and AI concepts. The curriculum is well-structured and age-appropriate.",
    highlight: "Exceptional partnership and curriculum",
  },
];

export { testimonials };
