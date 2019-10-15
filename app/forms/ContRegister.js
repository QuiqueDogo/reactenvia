import React from "react";
import t from "tcomb-form-native";
import formValidation from "../utils/Validation";
import inputTemplate from "./templates/inputCode";

var _ = require('lodash');

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.fieldset = {
  flexDirection: 'row',
  justifyContent: 'center',
};
stylesheet.formGroup.normal.flex = 1;
stylesheet.formGroup.error.flex = 1;

export const RegisterStruct = t.struct({
    code1: t.Number,
    code2: t.Number,
    code3: t.Number,
    code4: t.Number,
  });

 export const RegisterOptions = {
    fields:{
      code1:{
          template: inputTemplate,
          config:{
            stylesheet: stylesheet
          },
          
      },
      code2:{
          template: inputTemplate
      },
      code3:{
          template: inputTemplate
      },
      code4:{
          template: inputTemplate
      },
    },
    stylesheet:stylesheet
  };
  