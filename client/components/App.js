import React, { Component } from 'react';
import { categories } from '../../testdata';
import Gameboard from './Gameboard';
import Category from './Category';
import Scoreboard from './Scoreboard';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: categories,
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
  }
  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }
  render() {
    return (
      <div id={'app'}>
        <Gameboard>
        What is Reactor 2?
        {/* Gameboard */}
        {/* Scoreboard */}
        {/* Response */}
      </div>
    );
  }
}
