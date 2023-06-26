import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/organisms/Navbar/Navbar";
import AddContact from "./components/templates/contacts/Addcontacts";
import Contacts from "./components/templates/contacts/Contacts";
import EditContact from "./components/templates/contacts/EditContact";
import VirtualizeList from "./components/listsVirtualization/List";
import "./styles/App.scss";
import HomePageVirtualized from "./components/HomePageVirtualized/HomePageVirtualized";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Routes>
              <Route path="/" element={<Contacts />} />
              <Route path="/contacts/add" element={<AddContact />} />
              <Route path="/contacts/edit/:id" element={<EditContact />} />
              <Route path="/lists" element={<HomePageVirtualized />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
