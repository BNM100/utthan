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
    name: "Dr. Priya Sharma",
    role: "Principal",
    school: "Delhi Public School",
    image: "👩‍🏫",
    rating: 5,
    text: "Utthan Robotics has revolutionized how our students approach technology. The hands-on workshops and expert guidance have significantly improved our students' problem-solving abilities and technical skills.",
    highlight: "Revolutionary approach to tech education",
  },
  {
    name: "Rajesh Kumar",
    role: "Science Teacher",
    school: "Kendriya Vidyalaya",
    image: "👨‍🔬",
    rating: 5,
    text: "The partnership with Utthan Robotics has been exceptional. Our students are now more confident in robotics and AI concepts. The curriculum is well-structured and age-appropriate.",
    highlight: "Well-structured curriculum",
  },
  {
    name: "Sarah Johnson",
    role: "STEM Coordinator",
    school: "Ryan International",
    image: "👩‍💼",
    rating: 5,
    text: "Outstanding support and innovative teaching methods. The MoU has opened new possibilities for our students. We've seen remarkable improvement in their technical creativity and innovation.",
    highlight: "Innovative teaching methods",
  },
  {
    name: "Col. Vikram Singh",
    role: "Administrator",
    school: "Army Public School",
    image: "👨‍✈️",
    rating: 5,
    text: "Discipline meets innovation with Utthan Robotics. Their systematic approach to robotics education aligns perfectly with our values. Students are excelling in national competitions.",
    highlight: "Systematic approach to education",
  },
  {
    name: "Ms. Anita Patel",
    role: "Academic Director",
    school: "DAV Public School",
    image: "👩‍🎓",
    rating: 5,
    text: "The quality of training and resources provided by Utthan Robotics is exceptional. Our partnership has enhanced our school's reputation in STEM education significantly.",
    highlight: "Enhanced STEM reputation",
  },
];

export { testimonials };
