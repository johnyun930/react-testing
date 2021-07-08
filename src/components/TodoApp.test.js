import React from 'react';
import TodoApp from './TodoApp';
import {render,screen} from '@testing-library/react';

describe('<TodoApp/>',()=>{
    it('renders TodoForm and Todolist',()=>{
        render(<TodoApp/>);
        screen.getByText('등록');
        screen.getByTestId('TodoList');
    });

    it('renders two defaults todos',()=>{
        render(<TodoApp/>);
        screen.getByText('TDD 배우기');
        screen.getByText('react-testing-library 사용하기');
    })
})