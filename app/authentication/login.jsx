"use client"
import * as React from 'react';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Slide, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginModel, otpModal } from './authSlice';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import OtpPage from './otp';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function Login() {
    const [userNumber, setUserNumber] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const username = "TNCTutopiaEcommApiUser";
    const password = "TNCTutopiaecomApi@32145@";
    const { openLogin } = useSelector((state) => state.authSlice);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(openLoginModel(false))
    };

   
        const userLogin = async () =>{
            setIsSubmitting(true);
            try{
                const res = await fetch(`https://dwecommapi.tutopiacrm.in/api/v1/verify_mobile?mobileno=${userNumber}&vendor_id=0`,{
                  method: 'POST',
                  headers: {
                    'Authorization': 'Basic ' + btoa(username + ":" + password),
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      phone: userNumber
                  }),
                })
                const data = await res.json();
                if(data?.register_required != true ){
                    dispatch(otpModal(true));
                }else{
                    alert('number not match')
                }

            }catch(e){
                alert('error')
            }finally {
                setIsSubmitting(false);
            }
        }

    return (
        <div>
            <Dialog
                open={openLogin}
                TransitionComponent={Transition}
                keepMounted
                fullWidth={true}
                maxWidth='md'
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className='absolute right-0 top-0 p-2'>
                    <IconButton onClick={handleClose} aria-label="delete" size="small">
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                </div>
                <div className='flex flex-wrap gap-y-4 h-[30rem]'>
                    <div className='w-[100%] lg:w-[40%] bg-[#056DB6] p-5'>
                        <Image src='/assets/img/tutopia-logo.jpg' alt='' width={152} height={45} />
                        <p className='text-white px-2'>By continuing, you agree to Tutopia’s Terms of Use and Privacy Policy.</p>
                    </div>
                    <div className='w-[100%] lg:w-[60%] lg:px-8 px-6 py-2 lg:py-14'>
                        <div>
                            <h3 className='mb-3 text-[23px] text-[#056DB6] font-semibold inline-block border-b-2 border-[#FFCC00]'>Login Now!</h3>
                        </div>
                        <div>
                            <TextField onChange={(e)=> setUserNumber(e.target.value)} fullWidth id="standard-basic" label="Enter your mobile number" variant="standard" required/>
                            <small>By continuing, you agree to Tutopia's Terms of Use and Privacy Policy.</small>
                        </div>
                        <div>
                            <Button onClick={userLogin} fullWidth variant="contained" className='bg-[#FFCC00] text-[#000000] mt-3'>
                            {
                                isSubmitting ? 
                                <>
                                    <span className='flex items-center justify-center gap-2'>
                                        <CircularProgress size='1rem' />
                                        <span className="text-[#FFFFFF]">submiting...</span>
                                    </span>
                                </> 
                                :
                                "Submit"
                            }
                            </Button>
                        </div>
                        <Button onClick={()=> dispatch(otpModal(true))}>
                            button
                        </Button>
                    </div>
                </div>
            </Dialog>
            <OtpPage/>
        </div>
    )
}

export default Login