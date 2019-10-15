import React from "react";
import t from "tcomb-form-native";
import formValidation from "../utils/Validation";
import inputTemplate from "./templates/inputVerify";

export const VerifyStruct = t.struct({
    empresa: t.String,
    calle: t.String,
    numero: t.String,
    codigoPostal: t.String,
    colonia: t.String,
    ciudad: t.String,
    Estado: t.String,
    enviosMes: t.String,
    info: t.String,

  });

var _ = require('lodash');

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.fieldset = {
  flexDirection: 'column',
  alignItems: 'center',
};
stylesheet.formGroup.normal.flex = 1;
stylesheet.formGroup.error.flex = 1;
  
 export const VerifyOptions = {
    fields:{
      empresa:{
          template: inputTemplate,
          config:{
              placerHolder: "Hola"
          }
      },
      calle:{
          template: inputTemplate,
          label:"Dirrecion",
          config:{
              placerHolder: "Hola"
          }
      },
      numero:{
          template: inputTemplate,
          config:{
              placerHolder: "Hola"
          }
      },
      codigoPostal:{
          template: inputTemplate,
          config:{
              placerHolder: "Hola"
          }
      },
      colonia:{
          template: inputTemplate,
          config:{
              placerHolder: "Hola"
          }
      },
      ciudad:{
          template: inputTemplate,
          config:{
              placerHolder: "Hola"
          }
      },
      Estado:{
          template: inputTemplate,
          config:{
              placerHolder: "Hola"
          }
      },
      enviosMes:{
          template: inputTemplate,
          config:{
              placerHolder: "Hola"
          }
      },
      info:{
          template: inputTemplate,
          config:{
              placerHolder: "Hola"
          }
      },
  },
  stylesheet:stylesheet
} 