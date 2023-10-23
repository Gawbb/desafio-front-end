import MultiStepForm from "./componentes/MultiStepForm/MultiStepForm";
import { AppProvider } from "./contexts/app-context";

function App() {
  return (
    <AppProvider>
      <MultiStepForm />
    </AppProvider>
  );
}

export default App;
