import './App.css'
import Layout from "./components/Layout.tsx";

// import ToDo from "./components/Todo/ToDo.tsx";
import OnlineStatus from "./components/OnlineStatus.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionComponentWithState from "./components/FunctionComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import NameChanger from "./components/NameChanger.tsx";
//import FunctionalComponent from "./components/FunctionalComponnt.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponnt.tsx";
// import {ArrowFunctionalComponent} from "./components/ArrrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {

  return (
    <>
        {/*<ClassComponent />*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithProps title="Is an arrow componet with props"/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithPropsType*/}
        {/*    title="Is a props with type"*/}
        {/*    description="this is a description"/>*/}
        <Layout>
            {/*<h1 font-bold>This is a title</h1>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ClassComponentWithState />*/}
            {/*<FunctionComponentWithState/>*/}
            {/*<Counter/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterWithMoreStates/>*/}
            {/*<CounterAdvanced/>*/}
            {/*<CounterWithCustomHook/>*/}
            {/*<CounterWithReducer/>*/}
            {/*<ToDo/>*/}
            <OnlineStatus/>
        </Layout>
    </>
  )
}

export default App
