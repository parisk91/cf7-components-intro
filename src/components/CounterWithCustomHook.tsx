// import CounterButton from "./CounterButton.tsx";
//
// const CounterWithCustomHook = () => {
//
//     // custom hook function
//
//     return (
//         <>
//             <div className="space-y-4 pt-12">
//                 <h1 className="text-center"> Count is {state.count}</h1>
//                 <div className="text-center space-x-4">
//                     <CounterButton onClick={increaseCount} label="Increase" />
//                     <CounterButton onClick={decreaseCount} disabled={state.count === 0} label="Decrease" />
//                     <CounterButton onClick={resetCount} disabled={state.count === 0} label="Reset" addClass="bg-cf-dark-red text-black" />
//                 </div>
//             </div>
//             <p className="text-center mt-8  py-4">Last change: {state.lastAction || "-"} at {state.time|| "-"}</p>
//         </>
//     )
// }
//
// export default CounterWithCustomHook;