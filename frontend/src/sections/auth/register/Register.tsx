import c from '@styles/register.module.css';
import RegisterActions from './RegisterActions.tsx';
import RegisterForm from './RegisterForm.tsx';

// ----------------------------------------------------------------------

export default function Register() {
    return (
        <>
            <h1 className={c.registerHeader}>Register</h1>

            <RegisterForm />

            <RegisterActions />
        </>
    );
}
