import React from "react";
import "./css/pages.css";
import { LinkContainer } from "react-router-bootstrap";

function Home({questions}) {
  
  return (
    <div className="pages">
      <h1>This is Home.</h1>
      <br />
      <div className="home-question-links">
      {
        questions.map(q => (
          <LinkContainer to={`/question${q}`}>
            <h3>Question No. {q}</h3>
          </LinkContainer>
        ))
      }
      </div>
      
      
    </div>
  );
}

export default Home;
