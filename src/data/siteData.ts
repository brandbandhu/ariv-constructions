import datwaylerImg from "@/assets/images/DATWAYLER PHARMA/DATWAYLER PHARMA-1.png";
import balasahebImg from "@/assets/images/Balasheb Deoras Rugnalay/Balasheb Deoras Rugnalay-4.png";
import nichinoImg from "@/assets/images/NICHINO INDIA PRIVATE LIMITED/NICHINO INDIA PRIVATE LIMITED-5.png";
import srimsImg from "@/assets/images/SRIMS Medical College Sambhajinagar/SRIMS Medical College Sambhajinagar-4.png";
import moninImg from "@/assets/images/Monin Hyderabad/Monin Hyderabad-5.png";
import bridgestoneImg from "@/assets/images/Bridgestone Chakan/Bridgestone Chakan-1.png";
import thermaxImg from "@/assets/images/thermax-shirwal.jpg";
import embassyImg from "@/assets/images/embassy-horizon.jpg";
import asianPaintsImg from "@/assets/images/asian-paints.jpg";
import carlsbergImg from "@/assets/images/carlsberg-mysore.jpg";
import bergerImg from "@/assets/images/berger-jejuri.jpg";
import bktImg from "@/assets/images/bkt-aurangabad.jpg";
import jFoodImg from "@/assets/images/j-food-pune.jpg";
import bajajImg from "@/assets/images/bajaj-auto.jpg";
import microsoftImg from "@/assets/images/microsoft-hayatabad.jpg";

export interface Project {
  name: string;
  location: string;
  value: string;
  valueNum: number;
  year?: string;
  image: string;
  status: "Ongoing" | "Completed";
}

export const getProjectSlug = (projectName: string) =>
  projectName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const projects: Project[] = [
  { name: "Datwayler Pharma", location: "Maharashtra", value: "1.8 CR", valueNum: 180, year: "Ongoing", image: datwaylerImg, status: "Ongoing" },
  { name: "Balasaheb Deoras Rugnalay", location: "Maharashtra", value: "7 CR", valueNum: 700, year: "Ongoing", image: balasahebImg, status: "Ongoing" },
  { name: "Nichino India Pvt Ltd", location: "Maharashtra", value: "2 CR", valueNum: 200, year: "Ongoing", image: nichinoImg, status: "Ongoing" },
  { name: "SRIMS Medical College", location: "Sambhajinagar", value: "3.5 CR", valueNum: 350, image: srimsImg, status: "Completed" },
  { name: "Monin Hyderabad", location: "Hyderabad", value: "1.1 CR", valueNum: 110, image: moninImg, status: "Completed" },
  { name: "Bridgestone Chakan", location: "Chakan", value: "1 CR", valueNum: 100, year: "2011", image: bridgestoneImg, status: "Completed" },
  { name: "Thermax Shirwal", location: "Shirwal", value: "1.95 CR", valueNum: 195, year: "2012", image: thermaxImg, status: "Completed" },
  { name: "Embassy Horizon", location: "Chakan", value: "95 Lakhs", valueNum: 95, year: "2015", image: embassyImg, status: "Completed" },
  { name: "Asian Paints", location: "Maharashtra", value: "2.8 CR", valueNum: 280, year: "2016", image: asianPaintsImg, status: "Completed" },
  { name: "Carlsberg Mysore", location: "Mysore", value: "85 Lakhs", valueNum: 85, year: "2017", image: carlsbergImg, status: "Completed" },
  { name: "Berger Paints Jejuri", location: "Jejuri", value: "90 Lakhs", valueNum: 90, year: "2018-2019", image: bergerImg, status: "Completed" },
  { name: "BKT Aurangabad", location: "Aurangabad", value: "1.25 CR", valueNum: 125, year: "2019-2020", image: bktImg, status: "Completed" },
  { name: "J Food Products", location: "Pune", value: "1 CR", valueNum: 100, year: "2020-2021", image: jFoodImg, status: "Completed" },
  { name: "Bajaj Auto Pvt Ltd", location: "Chakan", value: "1.9 CR", valueNum: 190, year: "2021-2022", image: bajajImg, status: "Completed" },
  { name: "Microsoft Hayatabad", location: "Telangana", value: "85 Lakhs", valueNum: 85, year: "2021-2022", image: microsoftImg, status: "Completed" },
];

export const services = [
  {
    title: "Turnkey Solution",
    description: "Managing every aspect of the construction process from inception to completion for seamless and timely delivery.",
    icon: "Building2" as const,
  },
  {
    title: "Project Management",
    description: "Experienced project managers ensuring quality control and adherence to timelines at every construction phase.",
    icon: "ClipboardCheck" as const,
  },
  {
    title: "Heavy Machinery Rental",
    description: "Offering a wide range of state-of-the-art heavy machinery and earth movers for various construction needs.",
    icon: "Truck" as const,
  },
  {
    title: "Design & Build",
    description: "Providing integrated design and construction services to enhance efficiency and reduce costs.",
    icon: "PenTool" as const,
  },
];

export const machinery = [
  { name: "RMC Plant CP30", count: 1 },
  { name: "Concrete Pump", count: 1 },
  { name: "Excavator (210/130)", count: 3 },
  { name: "Concrete Mixer", count: 6 },
  { name: "Excavator Breaker", count: 3 },
  { name: "Tipper", count: 5 },
  { name: "JCB", count: 2 },
];

export const staff = [
  { role: "Site Engineers", count: 4 },
  { role: "Quality Management", count: 2 },
  { role: "Design Capabilities", count: 1 },
  { role: "Safety Management", count: 3 },
  { role: "Office Staff", count: 4 },
  { role: "Mechanical Capabilities", count: 1 },
  { role: "Site Supervisor/Foremen", count: 2 },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Fleet", path: "/fleet" },
  { name: "Safety", path: "/safety" },
  { name: "Contact", path: "/contact" },
];
