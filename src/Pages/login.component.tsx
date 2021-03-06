import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LoginEntity, createEmptyLogin } from "../Model/login";

interface PropsForm {
  onLogin: (login: LoginEntity) => void;
}

const useFormStyles = makeStyles((theme) =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  })
);

export const LoginComponent: React.FC<PropsForm> = (props) => {
  const { onLogin } = props;
  const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
    createEmptyLogin()
  );

  const classes = useFormStyles();

  const onTextFieldChange = (fieldId:string) => (e:any):any => {
    setLoginInfo({
      ...loginInfo,
      [fieldId]: e.target.value,
    });
  };

  return (
    <div className={classes.formContainer}>
      <TextField
        label="Name"
        margin="normal"
        value={loginInfo.login}
        onChange={onTextFieldChange("login")}
      />
      <TextField
        label="Password"
        type="password"
        margin="normal"
        value={loginInfo.password}
        onChange={onTextFieldChange("password")}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onLogin(loginInfo)}
      >
        Login
      </Button>
    </div>
  );
};
