import {
    Routes,
    Route
  } from "react-router-dom";
  import Listing from 'pages/Listing';
  import Form from 'pages/Form';
  import Index from 'pages/Index';
  import Navbar from "components/Navbar";
  import Footer from "components/Footer";
  
  function App() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
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