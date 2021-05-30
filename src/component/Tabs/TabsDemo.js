import React from 'react'
import {Tabs,Tab,AppBar}from '@material-ui/core'
function TabsDemo() {
    const [value,setValue] = React.useState(0)
    const handleTabs=(e,val)=>{
        console.log(val);
        setValue(val)
    }
    return (
        <div>
            <h1>Material-UI | Tabs</h1>
            <AppBar position="static" >
                <Tabs value={value} onChange={handleTabs}>
                    <Tab label="item1"/>
  <Tab label="item2"/>

  <Tab label="item3"/>

                 
                </Tabs>
            </AppBar>
<TabPanel value={value} index={0}>Item-1</TabPanel>
<TabPanel value={value} index={1}>Item-2</TabPanel>
<TabPanel value={value} index={2}>Item-3</TabPanel>

        </div>
    )
}
function TabPanel(props)

{
    const {children,value,index}=props
    return(
        <div>
           {
               value===index&&<h1>{children}</h1>
           }
        </div>
    )
}
export default TabsDemo
