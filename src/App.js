import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Home from "./component/pages/Home";
import Treatment from "./component/pages/Treatment";
import Navbar from "./component/Navbar/Navbar";
import Vaccine from "./component/pages/Vaccine";
import Pcrinfo from "./component/pages/Pcrinfo";
import HealthCourse from "./component/pages/HealthCourse";
import Revere from "./component/pages/Revere";
import HealthCheckupFlow from "./component/pages/HealthCheckupFlow";
import Doctor from "./component/pages/Doctor";
import Staff from "./component/pages/Staff";
import Practitioner from "./component/pages/Practitioner";
import Dentist from "./component/pages/Dentist";
import Lab from "./component/pages/Lab";
import Jakarta from "./component/pages/Jakarta";
import Cikarang from "./component/pages/Cikarang";
import Summitmas from "./component/pages/Summitmas";
import Bali from "./component/pages/Bali";
import Suryacipta from "./component/pages/Suryacipta";
import Kiic from "./component/pages/Kiic";
import Axia from "./component/pages/Axia";
import Deltamas from "./component/pages/Deltamas";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/vaccine" element={<Vaccine />} />
        <Route path="/pcr" element={<Pcrinfo />} />
        <Route path="/healthcourse" element={<HealthCourse />} />
        <Route path="/revere" element={<Revere />} />
        <Route path="/healthcheckupflow" element={<HealthCheckupFlow />} />
        <Route path="/doctorlist" element={<Doctor />} />
        <Route path="/stafflist" element={<Staff />} />
        <Route path="/practitioner" element={<Practitioner />} />
        <Route path="/dentist" element={<Dentist />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/jakarta" element={<Jakarta />} />
        <Route path="/cikarang" element={<Cikarang />} />
        <Route path="/summitmas" element={<Summitmas />} />
        <Route path="/bali" element={<Bali />} />
        <Route path="/suryacipta" element={<Suryacipta />} />
        <Route path="/kiic" element={<Kiic />} />
        <Route path="/axia" element={<Axia />} />
        <Route path="/deltamas" element={<Deltamas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
