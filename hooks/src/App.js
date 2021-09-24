import logo from './logo.svg';
import './App.css';
import UsestateHook from './UseState/UsestateHook';
import UsestateTwo from './UseState/UsestateTwo';
import UseStateObjects from './UseState/UseStateObjects';
import UsestatewithArray from './UseState/UsestatewithArray';
import UseEffectHook from './UseEffect/UseEffectHook';
import CondictionalUseEffect from './UseEffect/CondictionalUseEffect';
import HookExample2 from './UseEffect/HookExample2';
import EffectwithCleanup from './UseEffect/EffectwithCleanup';
import EffectCleanup from './UseEffect/EffectCleanup';
import EffectWithdep3 from './UseEffect/EffectWithdep3';
import FetchWithEffect from './UseEffect/FetchWithEffect';
import FetchindID from './UseEffect/FetchindID';
import FetchDatawithClick from './UseEffect/FetchDatawithClick';
import Context1 from './UseContext/Context1';
import Context2 from './UseContext/Context2';
import UseReducer from './UseReducer/UseReducer';
import UseReducerwithObject from './UseReducer/UseReducerwithObject';
import UseReducerWithMultipleObj from './UseReducer/UseReducerWithMultipleObj';
import MultipleReducer from './UseReducer/MultipleReducer';
import FetchDataWithUseState from './UseReducer/FetchingDataWith-Reducer/FetchDataWithUseState';
import FretchWithUseREducer from './UseReducer/FetchingDataWith-Reducer/FretchWithUseREducer';
import UsecallBack from './UseCallBack/UsecallBack';
import UseMemo from './UseMemo/UseMemo';
import FocusInput from './UseRef/FocusInput';
import RefInsideComponent from './UseRef/RefInsideComponent';

// there are 3 steps of creating context variable 
// 1--> create context variable and export it
// 2--> wrap the component inside provider
// 3--> import the context component in the desired file and wrap inside useContext and use it 

// // create  two context  variable 
// export const Context = React.createContext();

// export const ChannelContext= React.createContext();


//  export const usercontext1 = React.createContext();

// export const usercontext2 = React.createContext();



function App() {
  return (
    <div className="App">
        {/* <UsestateHook/> */}
        {/* <UsestateTwo/> */}
        {/* <UseStateObjects/> */}
        {/* <UsestatewithArray/> */}
        {/* <UseEffectHook/> */}
        {/* <CondictionalUseEffect/> */}
        {/* <HookExample2/> */}
        {/* <EffectwithCleanup/> */}
        {/* <EffectCleanup/> */}
        {/* <EffectWithdep3/> */}
        {/* <FetchWithEffect/> */}
        {/* <FetchindID/> */}
        {/* <FetchDatawithClick/> */}
      
        {/* <Context.Provider value={'Manoj'}>
         <ChannelContext.Provider value={'Mishra'}>
           <Context1/>
        </ChannelContext.Provider> 
        </Context.Provider> */}

        {/* <UseReducer/> */}

        {/* <UseReducerwithObject/> */}
        {/* <UseReducerWithMultipleObj/> */}

        {/* <MultipleReducer/> */}
        {/* <FetchDataWithUseState/> */}

        {/* <FretchWithUseREducer/> */}

        {/* <UsecallBack/> */}
        {/* <UseMemo/> */}
        {/* <FocusInput/> */}

        <RefInsideComponent/>

       




    </div>
  );
}

export default App;
