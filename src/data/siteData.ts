import datwaylerImg from "@/assets/images/DATWAYLER PHARMA/DATWAYLER PHARMA-1.png";
import balasahebImg from "@/assets/images/Balasheb Deoras Rugnalay/Balasheb Deoras Rugnalay-4.png";
import nichinoImg from "@/assets/images/NICHINO INDIA PRIVATE LIMITED/NICHINO INDIA PRIVATE LIMITED-5.png";
import srimsImg from "@/assets/images/SRIMS Medical College Sambhajinagar/SRIMS Medical College Sambhajinagar-4.png";
import moninImg from "@/assets/images/Monin Hyderabad/Monin Hyderabad-5.png";
import bridgestoneImg from "@/assets/images/Bridgestone Chakan/Bridgestone Chakan-1.png";
import thermaxImg from "@/assets/images/thermax-shirwal.jpg";
import embassyImg from "@/assets/images/Embassy-Horizon Industrial Park Chakan/Embassy-Horizon Industrial Park Chakan-1.png";
import asianPaintsImg from "@/assets/images/Asian Paints - Infrastructure Work/Asian Paints - Infrastructure Work-3.png";
import carlsbergImg from "@/assets/images/carlsberg-mysore.jpg";
import bergerImg from "@/assets/images/Berger Paints Jejuri/Berger Paints Jejuri-3.png";
import bktImg from "@/assets/images/BKT Aurangabad/BKT Aurangabad-3.png";
import jFoodImg from "@/assets/images/J food Products Sortapwadi Pune/J food Products Sortapwadi Pune-1.png";
import bajajImg from "@/assets/images/bajaj-auto.jpg";
import microsoftImg from "@/assets/images/Microsoft Hayatabad Telangana/Microsoft Hayatabad Telangana-2.png";
import serviceTurnkeyImg from "@/assets/images/hero-construction-1.jpg";
import serviceProjectMgmtImg from "@/assets/images/hero-construction-2.jpg";
import serviceMachineryImg from "@/assets/images/machine .png";
import serviceDesignBuildImg from "@/assets/images/about-hero.jpg";
import serviceStructureImg from "@/assets/images/fabrication.png";

export interface Project {
  name: string;
  location: string;
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
  { name: "Datwayler Pharma", location: "Maharashtra", year: "Ongoing", image: datwaylerImg, status: "Ongoing" },
  { name: "Balasaheb Deoras Rugnalay", location: "Maharashtra", year: "Ongoing", image: balasahebImg, status: "Ongoing" },
  { name: "Nichino India Pvt Ltd", location: "Humnabad Karnataka", year: "Ongoing", image: nichinoImg, status: "Ongoing" },
  { name: "SRIMS Medical College", location: "Sambhajinagar", image: srimsImg, status: "Completed" },
  { name: "Monin Hyderabad", location: "Hyderabad", image: moninImg, status: "Completed" },
  { name: "Bridgestone Chakan", location: "Chakan", year: "2011", image: bridgestoneImg, status: "Completed" },
  { name: "Thermax Shirwal", location: "Shirwal", year: "2012", image: thermaxImg, status: "Completed" },
  { name: "Embassy Horizon", location: "Chakan", year: "2015", image: embassyImg, status: "Completed" },
  { name: "Asian Paints", location: "Maharashtra", year: "2016", image: asianPaintsImg, status: "Completed" },
  { name: "Carlsberg Mysore", location: "Mysore", year: "2017", image: carlsbergImg, status: "Completed" },
  { name: "Berger Paints Jejuri", location: "Jejuri", year: "2018-2019", image: bergerImg, status: "Completed" },
  { name: "BKT Aurangabad", location: "Aurangabad", year: "2019-2020", image: bktImg, status: "Completed" },
  { name: "J Food Products", location: "Pune", year: "2020-2021", image: jFoodImg, status: "Completed" },
  { name: "Bajaj Auto Pvt Ltd", location: "Chakan", year: "2021-2022", image: bajajImg, status: "Completed" },
  { name: "Microsoft Hayatabad", location: "Telangana", year: "2021-2022", image: microsoftImg, status: "Completed" },
];

export const services = [
  {
    title: "Turnkey Solution",
    description: "Managing every aspect of the construction process from inception to completion for seamless and timely delivery.",
    icon: "Building2" as const,
    image: serviceTurnkeyImg,
  },
  {
    title: "Project Management",
    description: "Experienced project managers ensuring quality control and adherence to timelines at every construction phase.",
    icon: "ClipboardCheck" as const,
    image: serviceProjectMgmtImg,
  },
  {
    title: "Heavy Machinery Rental",
    description: "Offering a wide range of state-of-the-art heavy machinery and earth movers for various construction needs.",
    icon: "Truck" as const,
    image: serviceMachineryImg,
  },
  {
    title: "Design & Build",
    description: "Providing integrated design and construction services to enhance efficiency and reduce costs.",
    icon: "PenTool" as const,
    image: serviceDesignBuildImg,
  },
  {
    title: "Structural Work",
    description: "Delivering reliable structural and custom structural solutions with precision engineering and quality workmanship.",
    icon: "Building2" as const,
    image: serviceStructureImg,
  },
];

export const machinery = [
  { name: "RMC Plant CP30", count: 1 },
  { name: "Concrete Pump", count: 1 },
  { name: "Excavator (210/130)", count: 4 },
  { name: "Concrete Mixer", count: 6 },
  { name: "Excavator Breaker", count: 3 },
  { name: "Tippers", count: 10 },
  { name: "JCB", count: 2 },
  { name: "Roller", count: 1 },
  { name: "Grader", count: 1 },
];

export const staff = [
  { role: "Site Engineers", count: 5 },
  { role: "Quality Management", count: 2 },
  { role: "Design Capabilities", count: 1 },
  { role: "Safety Management", count: 3 },
  { role: "Office Staff", count: 4 },
  { role: "Mechanical Capabilities", count: 3 },
  { role: "Site Supervisor / Foremen", count: 5 },
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



