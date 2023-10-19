import { classNames } from 'shared/lib/classNames/classNames';
import c from './NotFoundPage.module.scss';

interface INotFoundPage {
className?: string
}

export const NotFoundPage = ({ className }: INotFoundPage) => (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(c.notFoundPage, {}, [className])}>NOT FOUND</div>
);
