import "./gesture-handler";
import AppManager from "./src/components/organisms/AppManager";
import AppRoutes from "./src/AppRoutes";

export default function App() {
  return (
    <AppManager>
      <AppRoutes />
    </AppManager>
  );
}
