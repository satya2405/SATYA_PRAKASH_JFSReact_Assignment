import React from "react";
import Table from "react-bootstrap/Table";
import "../css/pages.css";
import "../css/question.css"

function Question2() {
  var personDetails = [
    {id:1, name:"Charlie", job:"Janitor"},
    {id:2, name:"Mac", job:"Bouncer"},
    {id:3, name:"Dee", job:"Aspiring actress"},
    {id:4, name:"Dennis", job:"Bartender"},
    {id:5, name:"Priyanka", job:"UI/UX Designer"},
  ]
  return (
    <div className="pages">
        <h1>Question No. 2</h1>
        <Table striped hover responsive="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
  {/********************************Table data creation******************************************/}
      {
        personDetails.map(person=>(
          <tr>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.job}</td>
          </tr>
        ))
      }
      </tbody>
    </Table>
    </div>
  );
}

export default Question2;
