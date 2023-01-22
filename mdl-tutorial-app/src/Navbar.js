import React from 'react';
import { useState } from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';

const tabs = [
    {title: "Home", id: generateUniqueID()}, 
    {title: "Intro to MDL", id: generateUniqueID()}, 
    {title: "Defining the Data Source", id: generateUniqueID()}, 
    {title: "Writing MDL Expressions", id: generateUniqueID()}, 
    {title: "Common Errors", id: generateUniqueID()},
]

const IntroSections = [
    {title: "What is MDL?", id: generateUniqueID()}, 
    {title: "A Well-Crafted Data Set", id: generateUniqueID()}, 
    {title: "Operations", id: generateUniqueID()}, 
    {title: "Aggregation Functions", id: generateUniqueID()}, 
    {title: "Metrics", id: generateUniqueID()},
]

const NavBar = () => {
    const [tabId, setTabId] = useState(tabs.length !== 0 ? tabs[0].id : "none");
    const handleTabChange = (event, newId) => {
        setTabId(newId);
    };

    return (
        <>
            <Box sx={{ display:'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', width: '100%' }}>
                <h1>Microsoft ExP</h1>
                {tabId !== "none" && (<Box sx={{ width: '100%' }}>
                    <Tabs
                        value={tabId}
                        onChange={handleTabChange}
                        variant="fullWidth"
                    >
                        {tabs.map(tab => 
                            <Tab 
                                value={tab.id}
                                label={tab.title}
                                wrapped
                                sx={{textTransform:'none'}}
                            />
                        )}
                    </Tabs>
                </Box>)}
            </Box>
            {tabId === tabs[0].id && (<h4>Home Start Button</h4>)}
            {tabId === tabs[1].id && <TabPanel id={tabId} sections={IntroSections}/>}
        </>
    );
}

export default NavBar;