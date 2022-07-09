import {
    Routes,
    Route
  } from "react-router-dom";
  import Listing from 'pages/Listing';
  import Form from 'pages/Form';
  import Home from 'pages/Home';
  import Navbar from "components/Navbar";
  import Footer from "components/Footer";
  
  function App() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Listing" element={<Listing />} />
          <Route path="/form">
            <Route path=":movieId" element={<Form />} />
          </Route>
        </Routes>
        <Footer />
      </>
    );
  }
  
  export default App;