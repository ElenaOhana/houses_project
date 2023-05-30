import { HouseModel } from "../../../Models/HouseModel";
import "./AddHouse.css";
import { useForm} from "react-hook-form";
import { TextField, Button} from "@mui/material";
import houseService from "../../../Services/HouseService";
import { useNavigate } from "react-router-dom";
import notificationService from "../../../Services/NotificationService";

function AddHouse(): JSX.Element {

const{register, handleSubmit} =useForm<HouseModel>();
const navigate= useNavigate();

function send(house: HouseModel){
    houseService.addHouse(house)
    .then(()=> {               // אם הצלחתי:
        //alert("House added!");
        notificationService.success("House added!")
        navigate("/houses")
    })
    //.catch((err=> alert(err.message)));// אם לא הצלחתי:
    .catch((err=> notificationService.error(err)));// אם לא הצלחתי:
    
}

return (
        <div className="AddHouse">
            <h2>Add New House</h2>
			<form onSubmit={handleSubmit(send)}>{/* תופס - form */}
                {/* כמו בHTML רגיל <input> tag */}
                <TextField className="Input" label="Number of rooms" type="number" {...register("numOfRooms")}/><br/>
                <TextField className="Input" label="Price" type="number" {...register("price")}/><br/>
                <textarea placeholder="Description" {...register("description")}/><br/>
                <Button type = "submit" variant="outlined">Add</Button>
            </form>
        </div>
    );
}

// FROM PORTFOLIO
 /*    const [clicked, setClicked] = useState(true);
          <Button
              sx={{
                  backgroundColor: clicked ? '#533E85;' : '#76BA99'
                   box-shadow:3;
              }}
              onClick={() => setClicked(!clicked)}
          >
          </Button> */

export default AddHouse;
