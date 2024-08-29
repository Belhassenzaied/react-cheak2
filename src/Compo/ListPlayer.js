import players from "../players"
import CardPlayer from "./CardPlayer"

const ListPlayer=()=>{
   return(
    <div id ="listP">
    {
        players.map((el,i,t)=> < CardPlayer el={el}/>)
    }
</div>
   )
}
export default ListPlayer