import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from 'yup-password';
YupPassword(yup) // extend yup
import toast from "react-hot-toast";
import { login } from "../services/auth.service";
import LoadingButton from '@mui/lab/LoadingButton'; 
import { useAppDispatch } from "../redux-toolkit/hook";
import { getCurrentAccountThunk } from "../redux-toolkit/auth/auth-thunk";



function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://www.krooh.xyz">
        www.krooh.xyz ครูภาณุเมศ ชุมภูนท์
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LoginPage() {

 const navigate = useNavigate();
 const dispatch = useAppDispatch();

  const schema = yup.object().shape({
   
    email: yup.string().required('ป้อนอีเมล').email('รูปแบบอีเมลไม่ถูกต้อง'),
    password: yup.string().required('ป้อนรหัสผ่าน')
        .min(6,'รหัสผ่าต้องอย่างน้อยหกตัวอักษร')
        .minSymbols(1,"ต้องมีอักขพิเศษอย่างน้อย 1 ตัว")
        .minUppercase(1,"ต้องมีตัวพิมใหญ่อย่างน้อย 1 ตัว"),
  })
    
  type FormData = yup.InferType<typeof schema>;



  const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode:"all",
  });
  const onSubmit = async(data: FormData) =>{
     console.log(data);
     try {
        const userCredential = await login(data.email,data.password!);
        if(userCredential.user != null){
          dispatch(getCurrentAccountThunk(userCredential.user.uid))
          toast.success("เข้าระบบสำเร็จ");
          navigate('/dashboard');
          
        }

     } catch (error:any) {
       if(error.code === "auth/wrong-password"){
         toast.error("รหัสผ่านไม่ถูกต้อง");
       }
       else if(error.code === "auth/user-not-found"){
        toast.error("ไม่พบผู้ใช้นี้ในระบบ");
      }
       else {
        toast.error(error.message);
       }
       
     }
    };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            เข้าสู่ระบบ
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  {...register('email')}
                  error = {errors.email ? true : false}
                  helperText={errors.email && errors.email.message}
                  fullWidth                
                  label="Email Address"  
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register('password')}
                  error = {errors.password ? true : false}
                  helperText={errors.password && errors.password.message}
                  fullWidth   
                  type="password"
                  label="Password"
                 
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={isSubmitting}
              loadingIndicator="กำลังเข้าระบบ รอสักครู่..."
            >
              เข้าสู่ระบบ
            </LoadingButton>
            <Grid container justifyContent="center" spacing={3}>
              <Grid item>
                <Typography variant="body2" component={RouterLink} to="/">
d                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" component={RouterLink} to="/register">
                  ไปหน้า ลงทะเบียนผู้ใช้ใหม่
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
}
