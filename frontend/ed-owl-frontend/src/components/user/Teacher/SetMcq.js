import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionForm from './QuestionForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function SetMcq() {

  const {module_id} = useParams();
  const [quizData, setQuizData] = useState([]);

  const handleSaveQuestion = (newQuestion) => {
    setQuizData([...quizData, newQuestion]);

    try{

    }
    catch{
        
    }
  };

  console.log(quizData);


  return (
    <Row style={{height:'800px'}} >
        <Col><QuestionForm onSave={handleSaveQuestion} /></Col>
        <Col style={{backgroundColor:'#fff', margin:'20px 30px',borderRadius:'15px',height:'auto'}} >
        <div className="col" style={{ marginTop: '20px' }}>
        <h2>Questions:</h2>
        <ul>
          {quizData.map((question, index) => (
            <li key={index}>
              <h3>Q{index+1}-{question.question}</h3>
              <ul>
                {question.answers.map((answer, answerIndex) => (
                  <li key={answerIndex}>
                    {answer === question.correctAnswer ? (
                      <strong>{answer}</strong>
                    ) : (
                      <span>{answer}</span>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
        </Col>
      
      
      </Row>
  );
}

export default SetMcq;
