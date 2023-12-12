import s from './Alarm.module.scss'

export const Alarm = ({ textError }: { textError: string }) => {
  return (
    <section className={s.body}>
      <h1 className={s.errorTitle}>Предупреждение</h1>
      <div>
        <p className={s.errorText}>{textError}</p>
      </div>
    </section>
  )
}
