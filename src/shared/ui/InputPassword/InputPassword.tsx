import { Input, type InputProps } from '@shared/Input/Input.tsx';
import { forwardRef, useState } from 'react';
import { Icon } from '@shared/Icon';
import s from './InputPassword.module.css';
interface IInputPassword extends InputProps {}

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
    function InputPassword(props: IInputPassword, ref) {
        const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

        return (
            <Input
                {...props}
                ref={ref}
                type={isShowPassword ? 'text' : 'password'}
                post={
                    <Icon
                        className={s[`${isShowPassword ? `show` : `hide`}`]}
                        onClick={() => {
                            setIsShowPassword((prevState) => !prevState);
                        }}
                        name={'ShowEye'}
                    />
                }
            />
        );
    }
);
