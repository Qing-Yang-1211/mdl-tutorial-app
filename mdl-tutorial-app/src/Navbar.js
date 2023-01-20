import React from 'react';
import { useState } from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';

const IntroSections = [
    {title: "What is MDL?", id: generateUniqueID()}, 
    {title: "A Well-Crafted Data Set", id: generateUniqueID()}, 
    {title: "Operations", id: generateUniqueID()}, 
    {title: "Aggregation Functions", id: generateUniqueID()}, 
    {title: "Metrics", id: generateUniqueID()},
]

const tabs = [
    {title: "Home", id: generateUniqueID(), sections: []}, 
    {title: "Intro to MDL", id: generateUniqueID(), sections: IntroSections}, 
    {title: "Defining the Data Source", id: generateUniqueID(), sections: []}, 
    {title: "Writing MDL Expressions", id: generateUniqueID(), sections: []}, 
    {title: "Common Errors", id: generateUniqueID(), sections: []},
]

const NavBar = () => {
    const [tabId, setTabId] = useState(tabs.length !== 0 ? tabs[0].id : "none");
    const handleTabChange = (event, newId) => {
        setTabId(newId);
    };
    const getTabById = (id) => {
        return tabs.find((tab) => {
            return tab.id === id;
        })
    }

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
            <TabPanel id={tabId} sections={getTabById(tabId).sections}/>
        </>
    );
}

export default NavBar;