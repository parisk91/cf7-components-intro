import './App.css'
import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponnt.tsx";
import {ArrowFunctionalComponent} from "./components/ArrrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {

  return (
    <>
        <ClassComponent />
        <FunctionalComponent/>
        <ArrowFunctionalComponentWithProps title="Is an arrow componet with props"/>
        <ArrowFunctionalComponent/>
        <ArrowFunctionalComponentWithPropsType
            title="Is a props with type"
            description="this is a description"/>
    </>
  )
}

export default App
