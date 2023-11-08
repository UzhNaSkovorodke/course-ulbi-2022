import { Input } from '@shared/ui/Input/Input.tsx'
import { InputPassword } from '@shared/ui/InputPassword/InputPassword.tsx'
import { Button } from '@shared/ui/Button/Button.tsx'
import { useForm } from 'react-hook-form'
import s from './LoginPage.module.scss'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitHandler = () => {
    alert('submit!')
  }

  return (
    <section className={s.form}>
      <div className={s.form_header}>
        <h1>DOGGEE</h1>
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
              {...register('email')}
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
          <Button onClick={() => {}}>create new account</Button>
        </div>
      </div>
    </section>
  )
}
