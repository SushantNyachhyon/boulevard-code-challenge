import type { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import Header from '@/components/Header/Header';
import { routes } from '@/routes';

const App: FC = () => {
    const element = useRoutes(routes);

    return (
        <>
            <Header />
            {element}
        </>
    );
};

export default App;
