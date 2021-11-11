import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import UserList from "./components/UserList";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <SearchBox />
      <UserList />
      <Footer />
    </React.Fragment>
  );
}
export default App;
