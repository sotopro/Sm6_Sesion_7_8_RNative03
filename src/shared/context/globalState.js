import React, { createContext, useReducer } from 'react';

import { appReducer } from './appReducer';

const initialState = {
    employees: [
        {
            id: 1,
            name: 'Daniel',
            location: 'Lima',
            designation: 'Lead Developer'
        }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const addEmployee = (employee) => {
        dispatch({
            type: 'ADD_EMPLOYEE',
            payload: employee
        })
    }
    const editEmployee = (employee) => {
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: employee
        })
    }
    const removeEmployee = (id) => {
        dispatch({
            type: 'REMOVE_EMPLOYEE',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider
            value={{
                employees: state.employees,
                addEmployee,
                editEmployee,
                removeEmployee
            }}
        >
            {children}
        </GlobalContext.Provider>
    )

}