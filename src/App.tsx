import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


const App = () => {

  const dispatch = useAppDispatch();
  const {count} = useAppSelector((state) => state.counter);

  const handleIncrement = (amoutn: number) => {
    dispatch(increment(amoutn))
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div style={{width: '50%', margin: '180px auto'}}>
      <h1 style={{textAlign: 'center', fontSize: '80px'}}>Counter with Redux</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
        <button style={{cursor: 'pointer', fontSize: '40px', padding: '10px 20px', borderRadius: '8px'}} onClick={() => handleIncrement(5)}>Increment</button>
        <div style={{fontSize: '50px', margin: '0 20px'}}>{count}</div>
        <button style={{cursor: 'pointer', fontSize: '40px', padding: '10px 20px', borderRadius: '8px'}}  onClick={() => handleDecrement()}>Decrement</button>
      </div>
    </div>
  );
};

export default App;