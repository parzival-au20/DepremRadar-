import { createContext, useReducer, useState } from "react";


export const DataContext = createContext({
    data: [],
    getData: ( {selectedResource} ) => {},
});

function DataContextProvider( {children} ){
    const [data, setData] = useState([])

    function getData(selectedResource){
        setData()
    }

    const value ={
        data:data,
        getData:getData,
    }
    return (<DataContext.Provider value={value}>{children}</DataContext.Provider>);
}

export default DataContextProvider;