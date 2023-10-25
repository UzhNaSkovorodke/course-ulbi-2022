import s from './RegistrationPage.module.css';
import { useLocation } from 'react-router-dom';
import React from 'react';

export const RegistrationPage: React.FC = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <div className={s.body}>
            <section className={s.notFound}>
                <h1>Registration</h1>
            </section>
        </div>
    );
};
