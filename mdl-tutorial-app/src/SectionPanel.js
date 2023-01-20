import React from 'react';
import Box from '@mui/material/Box';


const SectionPanel = ({id}) => {
    return (
        <Box sx={{ marginLeft: 5 }}>
            <h4>{id}</h4>
        </Box>
    );
}

export default SectionPanel;