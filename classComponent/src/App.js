import logo from './logo.svg';
import './App.css';
import Fcomponent from './Components/Functionalcomponents'
import Welcome from './Components/ClassComponent'
import Hello from './Components/Hello'
import Message from './State/Message';
import Count from './State/Count';
import Fevent from './EventHandling/FunctionalEvent'
import Cevent from './EventHandling/ClassEvent'
import BindHandler from './BindingEventHandler/BindHandler'
import Parent from './props/ParentComponent'
import ConRendering from './ConditionalRendering/ConRendering'
import Itemlist from './ListingItems/Itemlist'
import Stylesheet from './StylingInReact/Stylesheet';
import Formhandling from './FormsHandling/Formhandling';
import LifeCycleA from './LifeCycleMethos/LifeCycleA';
import PureComp from './PureComponent/PureComp';
import ParentComponent from './PureComponent/ParentComponent';
import CreateRef from './REFInReact/CreateRef';
import CallbackRef from './REFInReact/CallbackRef';
import ParentRefComponent from './REFInReact/REFinClassComponent/ParentRefComponent';
import Refparent from './ForwardingRef/Refparent';
import Portal from './React-Portal/Portal';
import Eroor from './ErrorBoundary/Eroor';
import Errorboundary from './ErrorBoundary/Errorboundary';
import ClickCounter from './HigherOrderComponent/ClickCounter';
import Hovercounter from './HigherOrderComponent/Hovercounter';
import RenderProps from './RenderProps/RenderProps';
import ComponentA from './ContextApi/ComponentA';
import { Provider } from './ContextApi/Context';
import ComponentC from './ContextApi/ComponentC';
import GetHttpRequest from './ReactHttp/GetHttpRequest';
import PostHttpRequest from './ReactHttp/PostHttpRequest';

function App() {
  // if we want to pass the name as props to hello functionalcomponent file just add the name  and inside hello and class function just pass the name as
  // pass as arguments and cal them
  return (
    <div className="App">
       {/* < Fcomponent name='FUNCtional' />
       <Welcome name='CLASS'/> */}
       {/* <Hello name="Pravas" heroname='sahoo' >
       <p>HI i am a children</p>
       </Hello> */}

       {/* <Message/> */}
       {/* <Count/> */}
       {/* <Fevent/>
       <Cevent/> */}

       {/* <BindHandler/> */}
       {/* <Parent/> */}
       {/* <ConRendering/> */}
       {/* <Itemlist/> */}
      {/* <Stylesheet/> */}
      {/* <Formhandling/> */}
      {/* <LifeCycleA/> */}
      {/* <PureComp/> */}
      {/* <ParentComponent/> */}
      {/* <CreateRef/> */}
      {/* <CallbackRef/> */}
      {/* <ParentRefComponent/> */}
      {/* <Refparent/> */}
      {/* <Portal/> */}
      {/* <Errorboundary>
      <Eroor heroname='batman'/>
      </Errorboundary>
      <Errorboundary>

      <Eroor heroname='superman'/>
      
      </Errorboundary> */}
      {/* <ClickCounter/>
      <Hovercounter  name='sss'/> */}
      {/* now render the element according to the render props */}

     {/*  here count and incrementcount recived as props from clickcounter & hovercounter  */}
      {/* if we dont want to pass the render() method the we have to wrap the function inside 
      RenderProps  and replace the render with children because it is passed props as children*/}
    {/* <RenderProps >
      {(count,IncrementCount)=>(
          <ClickCounter count={count} IncrementCount={IncrementCount} />
      )} 
      </RenderProps>

    <RenderProps> 
      {(count,IncrementCount)=>(
          <Hovercounter count={count} IncrementCount={IncrementCount} />
      )} 
      </RenderProps> */}

    {/* if i want to pass the name to component c which is under a->b->->c then one way is passing props at every level 
    the other way of passing props is using of Context Api*/}
     {/* <Provider value="manoj"> */}
     {/* <ComponentA/> */}
     {/* </Provider> */}

     {/* <GetHttpRequest/> */}
     <PostHttpRequest/>

      
    </div>
  );
}

export default App;
