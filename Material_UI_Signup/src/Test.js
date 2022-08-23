import React from 'react';
import { Box } from '@mui/system';


function test(props) {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Button onClick={() => setOpen(true)}>Open Dialogue</Button>
            <Modal open={open} close={() => setOpen(false)}>
                <Box>
                    <Typography></Typography>
                </Box>
            </Modal>
            
        </div>
    );
}

export default test;