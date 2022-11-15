import logo from './logo.svg';
import './App.css';
import React from "react";
import Axios from "axios";

const App = () => {
  const [data, setData] = React.useState({msg: "hisdfsadffdssdfadsffdsfdsa"});

  React.useEffect(() => {
    Axios.get("/be")
      .then((res) => {
        setData(res.data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {data.msg}
    </div>
  );
}

export default App;
