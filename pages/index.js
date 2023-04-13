import { Suspense } from "react";
import ApiCall from "./apicall";
import Loading from "./loading";
import { useState, useEffect } from "react";

const Home = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("api/fetchpost")
  // .then((response) => response.json())
  // .then((data) => console.log(data.rows)) 
  // .catch((error) => console.log(error));
  // }, []);
  return (
    <Suspense fallback={<p> Loading </p>}>
      <ApiCall />
    </Suspense>
    
  )
}

export default Home;