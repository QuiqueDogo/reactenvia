import React from "react";
import t from "tcomb-form-native";
import formValidation from "../utils/Validation";
import inputTemplate from "./templates/Input";

export const RegisterStruct = t.struct({
    name: t.String,
    email: formValidation.email,
    pais: t.String,
    telefono:t.Number,
    password: formValidation.password,
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
      password:{
        template: inputTemplate,
        config:{
            text:"Contraseña",
            password: true,
            secureTextEntry: true
        },
      },
      telefono:{
        template: inputTemplate,
        config:{
            text:"Numero Telefono"
        },
      },
      pais:{
        template: inputTemplate,
        config:{
            text:"Pais"
        },
      }
    }
  };
  