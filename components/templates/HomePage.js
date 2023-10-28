import Banner from "../modules/home/Banner";
import Attribues from "../modules/home/Attribues";
import Definition from "../modules/home/Definition";
import Companies from "../modules/home/Companies";
import Instructions from "../modules/home/Instructions";
import Guid from "../modules/home/Guid";
import Restriction from "../modules/home/Restriction";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Attribues /> 
      <Definition />
      <Companies />  
      <Instructions /> 
      <Guid /> 
      <Restriction />
    </div>
  );
};

export default HomePage;
