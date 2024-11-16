import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { Button, IconButton, TextField } from '@mui/material';
import { otpModal } from './authSlice';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function OtpPage() {

    const { otpOpen } = useSelector((state) => state.authSlice);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(otpModal(false))
    };

    return (
        <React.Fragment>
            <Dialog
                open={otpOpen}
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                maxWidth='xs'
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className='absolute right-0 top-0 p-2'>
                    <IconButton onClick={handleClose} aria-label="delete" size="small">
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                </div>
                <div className='w-[100%] lg:px-8 px-6 py-2 lg:py-14'>
                    <div>
                        <h3 className='mb-3 text-[23px] text-[#056DB6] font-semibold inline-block border-b-2 border-[#FFCC00]'>Enter Otp</h3>
                    </div>
                    <div>
                        <TextField onChange={(e) => setUserNumber(e.target.value)} fullWidth id="standard-basic" variant="standard" required autoComplete="false"/>
                    </div>
                    <div>
                        <Button fullWidth variant="contained" className='bg-[#FFCC00] text-[#000000] mt-3'>Continue</Button>
                    </div>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
