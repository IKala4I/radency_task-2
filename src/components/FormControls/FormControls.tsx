import {Field, WrappedFieldProps} from "redux-form"
import {WrappedFieldMetaProps} from 'redux-form/lib/Field'
import {FC} from 'react'
import styles from './FormControls.module.css'
import {FieldValidatorType} from '../../utils/validators'

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: FC<FormControlPropsType> = ({meta: {touched, error}, children}: any) => {
    const hasError = touched && error
    return (
        <div className={(hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span className={styles.errorSpan}>{error}</span>}
        </div>
    )
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props

    return (
        <FormControl {...props}>
            <textarea className={`${styles.field} ${styles.textarea}`} {...input} {...restProps} />
        </FormControl>
    )
}


export const Select: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    const {options}: any = restProps

    return (
        <FormControl {...props}>
            <select className={styles.field} {...input}>
                {options.map((option: any) => (
                    <option value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </FormControl>
    )
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props

    return (
        <FormControl {...props}>
            <input className={styles.field} {...input} {...restProps} />
        </FormControl>
    )
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         validators: Array<FieldValidatorType>,
                                                         component: FC<WrappedFieldProps>,
                                                         props = {}, text = "") {

    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>

export const categoryOptions = [
    {value: 'Task', label: 'Task'},
    {value: 'Idea', label: 'Idea'},
    {value: 'Quote', label: 'Quote'},
    {value: 'Random Thought', label: 'Random Thought'},
]
