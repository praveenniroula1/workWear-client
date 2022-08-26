import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRegistration from "./pages/admin-register/AdminRegistration";
import LoginPage from "./pages/login/LoginPage";
import EmailVerification from "./pages/admin-register/EmailVerification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/products/Product";
import { PrivateRouter } from "./components/Private-Router/PrivateRouter";
import Category from "./pages/categories/Category";
import { PaymentMethod } from "./pages/payment-method/PaymentMethod";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Private router */}
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route
            path="/Product"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          />
          <Route
            path="/Category"
            element={
              <PrivateRouter>
                <Category />
              </PrivateRouter>
            }
          />
          <Route
            path="/payment-method"
            element={
              <PrivateRouter>
                <PaymentMethod />
              </PrivateRouter>
            }
          />

          {/* Public router */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<AdminRegistration />} />
          <Route path="/admin/verify-email" element={<EmailVerification />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
