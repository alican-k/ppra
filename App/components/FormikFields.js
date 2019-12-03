import { Input, Button } from './ui'
import { withField, withSubmit } from '../lib'

/*
 * Input and Button component can be used both as a stand-alone component and as a Formik field.
 * If it will be used as a Formik field, use these enhanced components.
*/

export default {
    Input: withField(Input),
    Submit: withSubmit(Button)
}
