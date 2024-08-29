import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
let CardPlayer=({el})=>{
   return(
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.url} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
        Team :{el.team}
        </Card.Text>
        <Card.Text>
        Nationality :{el.nationality}
        </Card.Text>
        <Card.Text>
        JerseyNumber :{el.JerseyNumber}
        </Card.Text>
        <Card.Text>
        Age : {el.age}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
   )
}
  CardPlayer.defaultProps ={
    el :{
        "name" : "kinedi",
        "team" : "FC",
        "nationality" : "Japonais",
        "jerseyNumber": 25,
        "age" :30 ,
        "url" :"https://www.odishafc.com/uploads/image/ODISHA%20FC-650b1bbf271d73.27925739lx(nt39i.png" ,
    }
}
export default CardPlayer


          
          