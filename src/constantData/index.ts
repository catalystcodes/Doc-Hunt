import ArrowBack from "../components/atoms/icons/arrowback";
import DocIcon from "../components/atoms/icons/docIcon";
import HelpCenterIcon from "../components/atoms/icons/helpCenterIcon";
import MedicalIcon from "../components/atoms/icons/medicalOrder";
import PnpIcon from "../components/atoms/icons/p&pIcon";
import PaymentIcon from "../components/atoms/icons/paymentIcon";
import SettingIcon from "../components/atoms/icons/settingIcon";
import TestBookingIcon from "../components/atoms/icons/testBookingIcon";
import { RootStackParams } from "../utils/types";

export const drawerItems: {
  icon: any;
  name: string;
  path: keyof RootStackParams;
}[] = [
  {
    icon: require("../assets/mydoctorpics.png"),
    name: "My Doctors",
    path: "myDoctorPage",
  },
  {
    icon: require("../assets/medicalrecordspics.png"),
    name: "Medical Records ",
    path: "medicalRecordPage",
  },
  {
    icon: require("../assets/paymentpics.png"),
    name: "Payments",
    path: "paymentPage",
  },
  {
    icon: require("../assets/medcineorderpics.png"),
    name: "Medicine Orders",
    path: "medicineOrderPage",
  },
  {
    icon: require("../assets/testbookingpics.png"),
    name: "Test Bookings",
    path: "testBookingPage",
  },
  {
    icon: require("../assets/pppics.png"),
    name: "Privacy & Policy",
    path: "privacyAndPolicyPage",
  },
  {
    icon: require("../assets/helpcenterpics.png"),
    name: "Help Center",
    path: "helpCenterPage",
  },
  {
    icon: require("../assets/settingspics.png"),
    name: "Settings",
    path: "settingPage",
  },
];

export const settingMenuItems: {
  icon: any;
  title: string;
  path: keyof RootStackParams | "";
}[] = [
  {
    icon: require("../assets/changePasswordIcon.png"),
    title: "Change Password",
    path: "",
  },
  {
    icon: require("../assets/notificationIcon.png"),
    title: "Notifications",
    path: "",
  },
  {
    icon: require("../assets/statIcon.png"),
    title: "Statistics",
    path: "",
  },
  {
    icon: require("../assets/aboutUs .png"),
    title: "About us",
    path: "",
  },
];

export const userInfo = [
  {
    userName: "Abdullah Mamun",
    userPhoneNumber: "01303-527300",
  },
];

export const detailsOfDoc = [
  {
    icon: require("../assets/doc1.png"),
    name: "Dr. Fillerup Grab",
    area: "Medicine Specialist",
    rate: require("../assets/star.png"),
  },
  {
    icon: require("../assets/doc1.png"),
    name: "Dr. Blessing",
    area: "Dentist Specialist",
    rate: require("../assets/star.png"),
  },
  {
    icon: require("../assets/doc1.png"),
    name: "Dr. Muhammad .M",
    area: "Oncology Specialist",
    rate: require("../assets/star.png"),
  },
];

export const featureDocDetails = [
  {
    icon: require("../assets/Dr. Crick.png"),
    name: "Dr. Crick",
    payPerHour: "$ 25.00/ hours",
    rating: 3.7,
  },
  {
    icon: require("../assets/Dr. Lachinet.png"),
    name: "Dr.Lachinet",
    payPerHour: "$ 22.00/ hours",
    rating: 3.0,
  },
  {
    icon: require("../assets/Dr. Strain.png"),
    name: "Dr. Strain",
    payPerHour: "$ 29.00/ hours",
    rating: 2.9,
  },
  {
    icon: require("../assets/Dr. Lachinet.png"),
    name: "Dr.Catalyst",
    payPerHour: "$ 22.00/ hours",
    rating: 4.0,
  },
];

export const favoriteDocDetails = [
  {
    icon: require("../assets/Dr. Shouey bigIcon.png"),
    name: "Dr. Crick",
    area: "Medicine Specialist",
  },
  {
    icon: require("../assets/Dr. Christenfeld N bigIcon.png"),
    name: "Dr.Lachinet",
    area: "Dentist Specialist",
  },
  {
    icon: require("../assets/Dr. Christenfeld N bigIcon.png"),
    name: "Dr. Strain",
    area: "Dentist Specialist",
  },
  {
    icon: require("../assets/Dr. Shouey bigIcon.png"),

    name: "Dr.Catalyst",
    area: "Oncology Specialist",
  },
];

export const detailsOfCategoryCard = [
  {
    avatar: require("../assets/Dr. Mistry Brick.png"),
    name: "Dr. Fillerup Grab",
    area: "Medicine Specialist",
    rate: 3.4,
    view: 2003,
  },
  {
    avatar: require("../assets/Dr. Ether Wall.png"),
    name: "Dr. Mistry Brick",
    area: "Medicine Specialist",
    rate: 3.4,
    view: 2003,
  },
  {
    avatar: require("../assets/Dr. Mistry Brick.png"),
    name: "Dr. Ether Wall",
    area: "Medicine Specialist",
    rate: 3.4,
    view: 2003,
  },
  {
    avatar: require("../assets/Dr. Ether Wall.png"),
    name: "Dr. Catalyst M",
    area: "Oncology Specialist",
    rate: 3.4,
    view: 2003,
  },
  {
    avatar: require("../assets/Dr. Mistry Brick.png"),
    name: "Dr. Messi L",
    area: "Dentist Specialist",
    rate: 3.4,
    view: 2003,
  },
];

export const availableTime = [
  {
    time: "10:00AM",
  },
  {
    time: "12:00AM",
  },
  {
    time: "02:00PM",
  },
  {
    time: "03:00PM",
  },
  {
    time: "04:00PM",
  },
];

export const docDetailCard = [
  {
    avatar: require("../assets/Dr. Pediatrician.png"),
    name: "Dr. Pediatrician",
    area: "Medicine Specialist",
    rate: "28.00/hr",
    view: 2003,
  },
];

export const docProgress = [
  {
    running: 100,
    onGoing: 500,
    patient: 700,
  },
];

export const myDoctorDetails = [
  {
    image: require("../assets/Dr Tranguilli.png"),
    name: "Dr. Tranquilli",
    specialty: "Specilist medicine",
    yearOfExperience: "6 Years experience ",
    percentage: 87,
    patientStories: 69,
    nextAvailableTime: "10:00",
    likeIcon: require("../assets/notlike.png"),
  },
  {
    image: require("../assets/Dr. Bonebrake.png"),
    name: "Dr. Bonebrake",
    specialty: "Specilist Dentist",
    yearOfExperience: "8 Years experience ",
    percentage: 59,
    patientStories: 82,
    nextAvailableTime: "12:00",
    likeIcon: require("../assets/like.png"),
  },
  {
    image: require("../assets/Dr. Luke Whitesell.png"),
    name: "Dr. Luke Whitesell",
    specialty: "Specilist Cardiology",
    yearOfExperience: "7 Years experience ",
    percentage: 57,
    patientStories: 76,
    nextAvailableTime: "11:00",
    likeIcon: require("../assets/notlike.png"),
  },
  {
    image: require("../assets/Dr. Shoemaker.png"),
    name: "Dr. Shoemaker",
    specialty: "Specilist Patheology",
    yearOfExperience: "5 Years experience ",
    percentage: 87,
    patientStories: 69,
    nextAvailableTime: "12:00",
    likeIcon: require("../assets/like.png"),
  },
];

export const helpCenterMenu = [
  {
    text: "Booking a new Appointment",
  },
  {
    text: "Existing Appointment",
  },
  {
    text: "Online consultations",
  },
  {
    text: "Feedbacks",
  },
  {
    text: "Medicine orders",
  },
  {
    text: "Diagnostic Tests",
  },
  {
    text: "Health plans",
  },
  {
    text: "My account and Practo Drive",
  },
  {
    text: "Have a feature in mind",
  },
  {
    text: "Other issues",
  },
];

export const medicineOrderCardDetails = [
  {
    image: require("../assets/mediOrder1.png"),
    details: "Guide to medicine order",
  },
  {
    image: require("../assets/medicOrder2.png"),
    details: "Prescription related issues",
  },
  {
    image: require("../assets/medicOrder3.png"),
    details: "Order Status",
  },
  {
    image: require("../assets/medicOrder4.png"),
    details: "Order delivery",
  },
  {
    image: require("../assets/medicOrder5.png"),
    details: "Payments & Refunds",
  },
  {
    image: require("../assets/medicOrder6.png"),
    details: "Order returns",
  },
];

export const allRecordCardDetails = [
  { date: "27 FEB", name: "Abdullah mamun", Prescription: 1 },
  { date: "27 FEB ", name: "Abdullah shuvo", Prescription: 1 },
  { date: "01 MAR", name: "Shruti Kedia", Prescription: 1 },
];
