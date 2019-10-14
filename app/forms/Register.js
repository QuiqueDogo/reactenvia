import React from "react";
import t from "tcomb-form-native";
import formValidation from "../utils/Validation";

export const RegisterStruct = t.struct({
    name: t.String,
    email: formValidation.email,
    password: formValidation.password,
    
  });
  
 export const RegisterOptions = {
    fields:{
      name:{
        label:"Nombre (*)"
      },
      email:{
        label:"Correo Electronico"
      },
      password:{
        label:"Contraseña"
      },
    }
  };
  