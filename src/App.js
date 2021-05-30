
import './App.css';


import ButtonDemo from './component/Button/ButtonDemo';
import CheckBoxDemo from './component/CheckBox/CheckBoxDemo';
import GriDemo from './component/Grid/GriDemo';
import Layout from './component/Layout/Layout';
import LayoutContainer from './component/Layout/LayoutContainer';
import MenuDemo from './component/menu/MenuDemo';
import RadioButtonDemo from './component/RadioButtonDemo/RadioButtonDemo';
import SelectDemo from './component/Select/SelectDemo';
import RangeSlider from './component/Slider/RangeSlider';
import Slider from './component/Slider/SliderDemo';
import SwitchDemo from './component/Switch/SwitchDemo';
import TabsDemo from './component/Tabs/TabsDemo';
import TextFieldDemo from './component/TextField/TextFieldDemo';
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
    </div>
  );
}

export default App;
