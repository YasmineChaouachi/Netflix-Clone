import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
// Import css
import "./Home.css";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODYyYmIzMjFjNTg3ZTZhODFiNTU5NCIsImlhdCI6MTY2OTgyMTAyNX0.tzRqhdPFy_h3lqmu2-04NKT1Mrn-mwalJZTpXqZp1HE"
          },
        }
        );

        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (

        <List list={list}/>
      ))}


    </div>
  );
};

export default Home;
