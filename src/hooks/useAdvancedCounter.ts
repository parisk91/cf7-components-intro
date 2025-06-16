// // import {useState} from "react";
// //
// // type CounterState = {
// //     count: number;
// //     lastAction: string;
// //     time: string;
// // }
// //
// // export const useAdvancedCounter = () => {
// //     const [state, setState] = useState<CounterState>({
// //         count:0,
// //         lastAction: "",
// //         time: "",
// //     })
// //
// //     const getCurrentTime = () => new Date().toLocaleDateString("en-US");
// //
// //     const getCount = () => new Date().toLocaleTimeString()
// //
// //     const increase = () => {
// //         setState({
// //             count :state.count = 1,
// //             lastAction: "Inrcrease",
// //             time: getCurrentTime
// //         })
// //     }
// //
// //     const increase = () => {
// //         if (state.count > 0) {
// //             ({
// //                 count :state.count = -1,
// //                 lastAction: "Decrease",
// //                 time: getCurrentTime
// //             })
// //         }
// //     }
// //
// //     const decrease = () => {
// //         if (state.count > 0) {
// //             ({
// //                 count :state.count = -1,
// //                 lastAction: "Decrease",
// //                 time: getCurrentTime
// //             })
// //         }
// //     }
// //
// //     const reset = () => {
// //         if (state.count > 0) {
// //             ({
// //                 count :state.count = -1,
// //                 lastAction: "Decrease",
// //                 time: getCurrentTime
// //             })
// //         }
// //     }
// //
// //     return {
// //         count: state.count,
// //         lastAction: state.lastAction,
// //         time: state.time,
// //         increase,
// //         decrease,
// //         reset
// //     }
// // }
// //
// export default useAdvancedCounter;
// //
