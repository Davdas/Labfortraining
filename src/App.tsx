import InfoUser from "./tableComponent/InfoUser";
import Separator from "./tableComponent/Separator";
import { AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";

import "./App.css";
import WeatherApp from "./weatherApp/WeatherApp";

function App() {
  return (
    <>
      <div className="container">
        <Separator text={"Dati Utente"} icon={<AiOutlineUserAdd />} />
        <div className="user-container">
          <InfoUser
            text={"nome"}
            label={"Davide"}
            icon={<HiOutlineUserCircle />}
          />
          <InfoUser
            text={"cognome"}
            label={"Mancini"}
            icon={<HiOutlineUserCircle />}
          />
          <InfoUser
            text={"email"}
            label={"davide_mancini82@yahoo.it"}
            icon={<AiOutlineMail />}
          />
          <InfoUser
            text={"indirizzo"}
            label={"Via Inzago 24"}
            icon={<FaRegAddressCard />}
          />
          <Separator text={"Dati Lavoro"} icon={<MdWorkOutline />} />
          <InfoUser
            text={"ore lavoro"}
            label={"300"}
            icon={<HiOutlineUserCircle />}
          />
          <InfoUser
            text={"azieda"}
            label={"Mancini s.r.l"}
            icon={<FaRegBuilding />}
          />
          <InfoUser
            text={"email"}
            label={"mancinisrl@yahoo.it"}
            icon={<AiOutlineMail />}
          />
          <InfoUser
            text={"indirizzo"}
            label={"Via Roma 100"}
            icon={<FaRegAddressCard />}
          />
        </div>
      </div>

      <WeatherApp />
    </>
  );
}

export default App;
