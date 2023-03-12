import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from 'yup-password';
YupPassword(yup) // extend yup

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

export default function RegisterPages() {
  const schema = yup.object().shape({
    fullName: yup.string().required('ป้อนชื่อ-สกุลของคุณ'),
    email: yup.string().required('ป้อนอีเมล').email('รูปแบบอีเมลไม่ถูกต้อง'),
    password: yup.string().required('ป้อนรหัสผ่าน')
        .min(6,'รหัสผ่าต้องอย่างน้อยหกตัวอักษร')
        .minSymbols(1,"ต้องมีอักขพิเศษอย่างน้อย 1 ตัว")
        .minUppercase(1,"ต้องมีตัวพิมใหญ่อย่างน้อย 1 ตัว"),
  })
    
  type FormData = yup.InferType<typeof schema>;



  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode:"all",
  });
  const onSubmit = (data: FormData) => console.log(data);

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
            ลงทะเบียนผู้ใช้ใหม่
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
                  {...register('fullName')}
                  error={errors.fullName ? true : false}
                  helperText={errors.fullName && errors.fullName.message}
                  fullWidth
                  label="FullName"
                  autoFocus
                />
              </Grid>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ลงทะเบียน
            </Button>
            <Grid container justifyContent="center" spacing={3}>
              <Grid item>
                <Typography variant="body2" component={RouterLink} to="/">
                  กลับหน้าหลัก
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" component={RouterLink} to="/login">
                  ไปหน้า Log in
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
