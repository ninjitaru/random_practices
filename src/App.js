import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Container>
          <Board column={2}><h1>Todo</h1></Board>
          <Board column={3}><h1>Hello</h1></Board>
          <Board column={4}><h1>Done</h1></Board>
          <Task row={2}></Task>
          <Task row={3}></Task>
          <Task row={4}></Task>
          <Sprint row={2} column={2}>
            {Array.from(Array(10).keys()).map(index=><SprintItem key={index}>{`item ${index}`}</SprintItem>)}
          </Sprint>
          <Sprint row={2} column={3}>
          {Array.from(Array(2).keys()).map(index=><SprintItem key={index}>{`item ${index}`}</SprintItem>)}
          </Sprint>
          <Sprint row={3} column={3}>
            {Array.from(Array(5).keys()).map(index=><SprintItem key={index}>{`item ${index}`}</SprintItem>)}
          </Sprint>
          <Sprint row={2} column={4}>
            {Array.from(Array(1).keys()).map(index=><SprintItem key={index}>{`item ${index}`}</SprintItem>)}
          </Sprint>
          <Sprint row={4} column={4}>
            {Array.from(Array(7).keys()).map(index=><SprintItem key={index}>{`item ${index}`}</SprintItem>)}
          </Sprint>
        </Container>
      </div>
    );
  }
}

export default App;

const Container = styled.div`
  display: grid;
  grid-template-columns: 120px repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const Board = styled.div`
  grid-column: ${props => props.column ? props.column : '1'};
  grid-row: 1 / 10;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 8px;
`;

const Task = styled.div`
  grid-column: 1 / 6;
  grid-row: ${props => props.row ? props.row : '1'};
  box-sizing: border-box;
  border: 1px dashed black;
  border-radius: 8px;
`;

const Sprint = styled.div`
  grid-column: ${props => props.column ? props.column : '1'};
  grid-row: ${props => props.row ? props.row : '1'};
  box-sizing: border-box;
  border: 1px solid teal;
  border-radius: 8px;
  padding: 10px;
  margin: 6px;

  display: flex;
  flex-flow: column;
  position: relative;
`;

const SprintItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: 1px solid gray;
  border-radius: 4px;
  margin-bottom: 6px;
  line-height: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;
