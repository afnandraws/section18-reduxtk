import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{show && counter}</div>
      <div>
        <button
          onClick={() => {
            dispatch(counterActions.increment(1));
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            dispatch(counterActions.increment(5));
          }}
        >
          Increment by 5
        </button>

        <button
          onClick={() => {
            dispatch(counterActions.decrement(1));
          }}
        >
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
