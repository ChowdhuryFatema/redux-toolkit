import Navbar from "./components/layout/Navbar";
import { Button } from "./components/ui/button";
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
   <>
   <Navbar />
    <div style={{width: '50%', margin: '180px auto'}}>
      <h1 style={{textAlign: 'center', fontSize: '80px'}}>Counter with Redux</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
        <Button
        onClick={() => handleIncrement(5)}>Increment</Button>
        <div style={{fontSize: '50px', margin: '0 20px'}}>{count}</div>
        <Button onClick={() => handleDecrement()}>Decrement</Button>
      </div>
    </div>
   </>
  );
};

export default App;