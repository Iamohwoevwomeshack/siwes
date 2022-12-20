import {Routes, Route} from "react-router-dom";
import "./styles.css";

// PATH

import Home from "./Home";
import Benefit from "./Benefit";
import Courses from "./Courses";
import Siwes from "./Siwes";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import CompanyLogin from "./CompanyLogin";
import CompanyRegister from "./CompanyRegister";
import LecturerSignUp from "./LecturerSignUp";
import LecturerSignIn from "./LecturerSignIn";
import Contact from "./Contact";
import ComputerScienceCL from "./ComputerScienceCL";
import MathematicsCL from "./MathematicsCL";
import PhysicsCL from "./PhysicsCL";
import ChemistryCL from "./ChemistryCL";
import StudentProfile from "./StudentProfile";
import CompanyProfile from "./CompanyProfile";
import RecentPost from "./RecentPost";
import LecturerProfile from "./LecturerProfile";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-features" element={<Benefit />} />
        <Route path="/study-programs" element={<Courses />} />
        <Route path="/about" element={<Siwes />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/company-sign-in" element={<CompanyLogin />} />
        <Route path="/company-sign-up" element={<CompanyRegister />} />
        <Route path="/lecturer-register" element={<LecturerSignUp />} />
        <Route path="/lecturer-sign-in" element={<LecturerSignIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/computer-science" element={<ComputerScienceCL />} />
        <Route path="/mathematics" element={<MathematicsCL />} />
        <Route path="/physics" element={<PhysicsCL />} />
        <Route path="/chemistry" element={<ChemistryCL />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/recent-post" element={<RecentPost />} />
        <Route path="/lecturer-profile" element={<LecturerProfile />} />
      </Routes>
      </>
  );
}

export default App;
