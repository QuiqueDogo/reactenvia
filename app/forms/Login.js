import React from "react";
import t from "tcomb-form-native";
import formValidation from "../utils/Validation";
import inputTemplate from "./templates/Input";

export const LoginStruct = t.struct({
    email: t.String,
    password: formValidation.password,
  });
  
 export const LoginOptions = {
    fields:{
      email:{
        template: inputTemplate,
        config:{
          placeholder:"Correo Electronico",
        },
      },
      password:{
        template:inputTemplate,
        config:{
          placeholder:"Contraseña",
          password: true,
          secureTextEntry: true
        },
      }
    }
  };
  