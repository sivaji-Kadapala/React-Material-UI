import React from 'react';

// import './App.css';


import ButtonDemo from './component/Button/ButtonDemo';
import CheckBoxDemo from './component/CheckBox/CheckBoxDemo';
import GriDemo from './component/Grid/GriDemo';
import Layout from './component/Layout/Layout';
import LayoutContainer from './component/Layout/LayoutContainer';
import MenuDemo from './component/menu/MenuDemo';
import RadioButtonDemo from './component/RadioButtonDemo/RadioButtonDemo';
import RedirectDemo from './component/Router/RedirectDemo';
import Routing from './component/Router/Routing';

import SelectDemo from './component/Select/SelectDemo';
import RangeSlider from './component/Slider/RangeSlider';
import Slider from './component/Slider/SliderDemo';
import SwitchDemo from './component/Switch/SwitchDemo';
import TabsDemo from './component/Tabs/TabsDemo';
import TextFieldDemo from './component/TextField/TextFieldDemo';
import ClassCounter from './component/UseState/ClassCounter';


import NameChange from './component/UseState/NameChange';
import PreviousState from './component/UseState/PreviousState';
import CounterThree from './component/UseState/CounterThree';
import UseEffectDemo from './component/useEffect/UseEffectDemo';
import Form from './component/Form/Form';
import PureComponentDemo from './component/pureComponents/PureComponentDemo';
import UseEffectAfterRender from './component/useEffect/UseEffectAfterRender';
import ConditionalRunClass from './component/useEffect/ConditionalRunClass';
import ConditionalRunFunction from './component/useEffect/ConditionalRunFunction';
import Greet from './component/useEffect/Greet';
import MouseContainer from './component/useEffect/MouseContainer';
import IntervalHookCounter from './component/useEffect/IntervalHookCounter';
import Fetch from './component/useEffect/Fetch';
import UseContext from './component/useContext/UseContext';

// import HooksOnce from './component/useEffect/HooksOnce';
// import ContexDemo from './component/ContextAPI/ContexDemo';
// import ListDemo from './component/Lists/ListDemo'

// step 1:const UserContext=React.createContext();
// step2:consumer

function App() {
  
  return (
    <div className="App">
      <h1 >React Material-UI</h1>
  
     <ButtonDemo/>
    <CheckBoxDemo/>
    <RadioButtonDemo/>
    <Slider/>
    <RangeSlider/>
    <SelectDemo/>
    <TextFieldDemo/>
    <SwitchDemo/>
    <Layout/>
    <LayoutContainer/>
    <GriDemo/>
    <TabsDemo/>
    <MenuDemo/>
    <h1 style={{color:"red"}}>Router</h1>
    <Routing/>
    <RedirectDemo/>
    {/* Form */}
    <h1 style={{color:"red"}}>Form</h1>
     <Form/>
      <h1 style={{color:"red"}}>UseState</h1>
    <NameChange/>
    <ClassCounter/>
    <PreviousState/>
   <CounterThree/>
   <h1 style={{color:"red"}}>Pure Components</h1>
    <PureComponentDemo/>
   {/* UseEffects */}
    <h1 style={{color:"red"}}>UseEffect</h1>
   <Greet/>
    <h1 style={{color:"red"}}>UseEffect After Render</h1>
   <UseEffectDemo/>
  <UseEffectAfterRender/>
  <h1 style={{color:"red"}}>UseEffect conditionally run effect</h1>

  <ConditionalRunClass/>
  
  <ConditionalRunFunction/>
   <h1 style={{color:"red"}}>Run effects only once</h1>
   {/* <HooksOnce/> */}
   {/* <ContexDemo/> */}
{/* <ListDemo /> */}
<h1 style={{color:"red"}}>useEffect with cleanup</h1>
<MouseContainer/>
<h1 style={{color:"red"}}>useEffect with incorrect dependency</h1>
<IntervalHookCounter/>
<h1 style={{color:"red"}}>useEffect with data fetching and using axios</h1>
<Fetch/>
<h1 style={{color:"red"}}>useContext</h1>
<UseContext/>

    </div>
  );
}

export default App
