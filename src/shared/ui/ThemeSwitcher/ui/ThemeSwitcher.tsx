import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Icon } from '@shared/ui/Icon'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button theme={ThemeButton.CLEAR} className={classNames('', [className ? className : ''])}>
      {theme === Theme.LIGHT ? (
        <Icon width={'32'} height={'32'} onClick={toggleTheme} name={'ThemeLight'} />
      ) : (
        <Icon width={'32'} height={'32'} onClick={toggleTheme} name={'ThemeDark'} />
      )}
    </Button>
  )
}
