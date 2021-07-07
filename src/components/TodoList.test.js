import React from 'react';
import {render,screen} from '@testing-library/react';
import TodoList from './TodoList';

describe('<TodoList/>',()=>{
    const sampleTodos = [
        {
          id: 1,
          text: 'TDD 배우기',
          done: true
        },
        {
          id: 2,
          text: 'react-testing-library 사용하기',
          done: true
        }
      ];

      test("renders todos properly",()=>{
          render(<TodoList todos={sampleTodos}></TodoList>);
          screen.getByText(sampleTodos[0].text);
          screen.getByText(sampleTodos[1].text);
      });

});