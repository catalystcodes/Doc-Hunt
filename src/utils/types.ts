import { SvgProps } from "react-native-svg";

export type RootStackParams = {
  onboarding: undefined;
  signUp: undefined;
  login: undefined;

  bottomTab: undefined;
  popularDocFullPage: undefined;
  favoriteDocPage: undefined;
  drawerTab: undefined;
  myDoctorPage: undefined;
  medicalRecordPage: undefined;
  paymentPage: undefined;
  medicineOrderPage: undefined;
  testBookingPage: undefined;
  privacyAndPolicyPage: undefined;
  helpCenterPage: undefined;
  settingPage: undefined;
  addRecordPage: undefined;
  allRecord: undefined;
  appOnboarding: undefined;
};

export type HomeStackParams = {
  homepage: undefined;
  appointmentPage: undefined;
  appointmentSchedulePage: undefined;
  location: undefined;
  medicineOrderMainPage: undefined;
  docdetails: undefined;
};

export type MainStackParams = {
  favoriteDocPage: undefined;
  appointmentPage: undefined;
  appointmentSchedulePage: undefined;
  docdetails: undefined;
};

export type OnboardingStackParams = {
  replace(arg0: string): unknown;
  navigate(arg0: string): unknown;
  login: undefined;
};

export interface IconWithCustomProps extends SvgProps {
  isSelected?: boolean;
}
