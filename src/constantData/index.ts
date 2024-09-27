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
