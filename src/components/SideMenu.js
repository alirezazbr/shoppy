import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Box, IconButton } from '@mui/material';
import {  AutoAwesomeMosaic, LocalOffer, Inventory, Assessment, Settings } from '@mui/icons-material';

const sideMenuItems = {
    mosaic: ({ style }) => <AutoAwesomeMosaic sx={style} />,
    local: ({ style }) => <LocalOffer sx={style} />,
    inventory: ({ style }) => <Inventory sx={style} />,
    assesment: ({ style }) => <Assessment sx={style} />,
    Settings: ({ style }) => <Settings sx={style} />,
}

const SideMenu = () => {
    const [activeItem, setActiveItem] = useState('inventory');

    return (
        <BoxElement display="flex" flexDirection="column">
            {
                Object.keys(sideMenuItems).map((item) => (
                    <IconBtn aria-label={item} onClick={() => setActiveItem(item)} sx={{ background: (activeItem === item) ? '#fff' : 'transparent' }}>
                        {sideMenuItems[item]({ style: { fontSize: '30px' } })}
                    </IconBtn>
                ))
            }
        </BoxElement>
    );
};

const BoxElement = styled(Box)({
    width: '75px',
    height: 'calc(100% - 64px)',
    position: 'fixed',
    marginTop: '64px',
    zIndex: 9999,
    padding: '5px',
    flexGrow: 1,
    background: '#fafafa',
});

const IconBtn = styled(IconButton)({
    borderRadius: '3px',
    height: '65px',
    color: '#160e4d',
    marginBottom: '5px',

    '&:hover': {
        background: '#fff',
    }
});

export default SideMenu;
