import CounterButton from "./CounterButton.tsx";
// import {useCounter} from "../hooks/useCounter.ts";
import {useCounterWithReducer} from "../hooks/useCounterWithReducer.tsx";

const CounterWithReducer = () => {

    // custom hook function
    // const {count, increase, decrease, reset} = useCounter();
    const { count, lastAction, time, increase, decrease, reset} = useCounterWithReducer();

    return (
        <>
            <div className="space-y-4 pt-12">
                <h1 className="text-center"> Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increase} label="Increase" />
                    <CounterButton onClick={decrease} disabled={count === 0} label="Decrease" />
                    <CounterButton onClick={reset} disabled={count === 0} label="Reset" addClass="bg-cf-dark-red text-black" />
                </div>
            </div>
            <p className="text-center mt-8  py-4">Last change: {lastAction || "-"} at {time|| "-"}</p>
        </>
    )
}

export default CounterWithReducer;