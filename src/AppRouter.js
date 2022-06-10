import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./views/FormValidation/Form";
import SearchList from "./views/SearchList";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SearchList />} />
        <Route exact path="/form-signup" element={<Form />} />
      </Routes>
    </Router>
  )
}
export default AppRouter;