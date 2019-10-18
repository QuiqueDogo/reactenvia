import React from "react";
import t from "tcomb-form-native";
import formValidation from "../utils/Validation";
import inputTemplate from "./templates/Input";

export const RegisterStruct = t.struct({
    name: t.String,
    email: formValidation.email,
  });
  
 export const RegisterOptions = {
    fields:{
      name:{
        template: inputTemplate,
        config:{
            text:"Nombre Completo"
        }
      },
      email:{
        template: inputTemplate,
        config:{
            text:"Correo Electronico",
        },
        error: "Correo Electronico Invalido"
      },
    }
  };
  