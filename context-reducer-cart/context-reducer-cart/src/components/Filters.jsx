import {Button, Form} from "react-bootstrap"
import Rating from './Rating'
import {useState} from "react"
const Filters = () => {

  const [rate, setRate] = useState(3)
  return (
    <div className="filters"> 
    <span className="title"> Filter Products </span>
    <span>
        <Form.Check 
        inline
        label="Ascending"
        name="group1"
        type="radio"
        ud={'inline-1'}
        />
    </span>
    <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`} />
    </span>

    <span>
        <Form.Check
          inline
          label="Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`} />
    </span>

    <span>
        <Form.Check
          inline
          label="fast Delievery"
          name="group1"
          type="checkbox"
          id={`inline-4`} />
    </span>
<span>
    <label style={{paddingLeft: 10}}>Rating:</label>
    <Rating  rating = {rate} style={{cursor: "pointer" }}
    onClick={(i) => setRate(i+1)}
    ></Rating>
</span>

<Button variant="light">Clear Filters</Button>
    </div>
  )
}

export default Filters