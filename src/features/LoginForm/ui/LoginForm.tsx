import { Input } from '@shared/ui/Input/Input.tsx'
import { InputPassword } from '@shared/ui/InputPassword/InputPassword.tsx'
import { Button } from '@shared/ui/Button/Button.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import s from './LoginPage.module.scss'
import axios, { AxiosRequestConfig } from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { getDay } from '@shared/lib/getDate/getDate.ts'

type DataType = {
  email: string
  password: string
  username: string
}

export const LoginForm = ({
  setIsOpenRegistry,
  setIsOpenAuth,
  setIsOpenAlarm,
}: {
  setIsOpenRegistry: Dispatch<SetStateAction<boolean>>
  setIsOpenAuth: Dispatch<SetStateAction<boolean>>
  setIsOpenAlarm: Dispatch<SetStateAction<boolean>>
}) => {
  const {
    register,
    handleSubmit,
    //setValue,
    clearErrors,
    formState: { errors },
  } = useForm<DataType>()

  const submitHandler: SubmitHandler<DataType> = async (data) => {
    interface loginRequestConfig extends AxiosRequestConfig {
      username: string
      password: string
      email: string
    }

    const axiosRequestData: loginRequestConfig = data
    try {
      const resp = await axios.post('http://localhost:4998/login', axiosRequestData)
      if (resp.status === 200) {
        //localStorage.setItem('userid', `${resp.headers[]}`);
        const { email, username, userid, tokens } = JSON.parse(resp.headers.user_dto)

        document.cookie = `refresh=${tokens.refreshToken}; path=/; expires=" + ${getDay()};`
        clearErrors()
        // setValue('username', '')
        // setValue('password', '')
        // setValue('email', '')
      }
    } catch (e) {
      setIsOpenAlarm(true)
    } finally {
      setIsOpenAuth(false)
    }
  }
  const onBottomBtnClickHandler = () => {
    clearErrors()
    setIsOpenAuth(false)
    setIsOpenRegistry(true)
  }

  return (
    <section className={s.form}>
      <div className={s.form_header}>
        <h1>Auth</h1>
      </div>

      <div>
        <form className={s.form_body} onSubmit={handleSubmit(submitHandler)}>
          <label className={s.form_label}>
            <Input
              {...register('username', { required: true })}
              className={s.form_input}
              placeholder={'username'}
              isError={Boolean(errors.username)}
              warningText={'Введите имя пользователя'}
            />
          </label>
          <label className={s.form_label}>
            <InputPassword
              {...register('password', { required: true })}
              className={s.form_input}
              placeholder={'password'}
              isError={Boolean(errors.password)}
              warningText={'Введите пароль'}
            />
          </label>
          <label className={s.form_label}>
            <Input
              {...register('email', { required: true })}
              className={s.form_input}
              placeholder={'email'}
              isError={Boolean(errors.email)}
              warningText={'Введите email'}
            />
          </label>
          <Button type={'submit'} className={s.form_submit}>
            Отправить
          </Button>
        </form>

        <div className={s.form_footer}>
          <Button onClick={onBottomBtnClickHandler}>Create new account</Button>
        </div>
      </div>
    </section>
  )
}
