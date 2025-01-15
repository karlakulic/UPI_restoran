import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { UserProvider } from './providers/UserContext.tsx';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <UserProvider>
            <App/>
        </UserProvider>
    </StrictMode>
);
