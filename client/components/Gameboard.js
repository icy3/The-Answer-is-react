import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';

const Gameboard = props => {
  if(props.currentQuestion.question){
  return (
    <div data-testid="gameboard" id='question'>
      {/* was a question clicked? and the 'question' was changed from the ternary operator for simplicity*/}
      {/* Yes? Show clue */}
      {/* No? Show Categories */}
    </div>
  );
}else{
return(
  <div data-testid="gameboard" id='gameboard'>
      <categories
      categories ={props.categories}
      selectQuestion={props.selectQuestion}
      currentQuestion={props.currentQuestion}
      answeredQuestions={props.answeredQuestions}/>
    </div>
  );
}
}
Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;