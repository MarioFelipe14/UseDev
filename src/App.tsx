import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import ScrollToTop from "./common/utils/ScrollToTop";
import Header from "./components/Header";
import FooterConfig from "./components/Footer/FooterConfig";
import { ToastProvider } from "./contexts/toast/ToastContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Router>
          <ScrollToTop />
          <Header onSearch={() => { }} />
          <AppRoutes />
          <FooterConfig />
        </Router>
      </ToastProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
