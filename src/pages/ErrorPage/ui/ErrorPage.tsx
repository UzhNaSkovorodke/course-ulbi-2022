import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.ErrorPage, [className ?? ''])}>
      <p>Произошла непредвиденная ошибка</p>
      <Button onClick={reloadPage}>Обновить страницу</Button>
    </div>
  )
}
