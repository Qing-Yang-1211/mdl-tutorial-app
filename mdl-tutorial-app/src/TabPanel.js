import React from 'react';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import SectionPanel from './SectionPanel';

const TabPanel = ({id, sections}) => {
    const [sectionId, setSectionId] = useState(sections.length !== 0 ? sections[0].id : "none");
    const handleSectionChange = (event, newId) => {
        setSectionId(newId);
    };

    return (
        <>
            {sectionId !== "none" && (
                <Box sx={{ display:'flex', flexDirection: 'row', width: '100%' }}>
                    <Tabs
                        value={sectionId}
                        onChange={handleSectionChange}
                        orientation="vertical"
                        variant="scrollable"
                    >
                        {sections.map(section => 
                            <Tab 
                                value={section.id}
                                label={section.title}
                                wrapped
                                sx={{textTransform:'none'}}
                            />
                        )}
                    </Tabs>
                    <SectionPanel id={sectionId}/>
                </Box>
            )}
        </>
    );
}

export default TabPanel;