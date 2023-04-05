import type { FC } from 'react';
import { useMatch, Link } from 'react-router-dom';
import { Search } from '@/components/Search';

import Styles from './header.module.css';

const Header: FC = () => {
    const matched = useMatch('/');

    return !matched
        ? (
            <header
                className={`${Styles.header} ${!matched && Styles.active}`}>
                <div className='app-container'>
                    <div className={Styles.headerContainer}>
                        <Link to="/" className={Styles.logoText}>
                            Boulevard
                        </Link>
                        <Search iconSize={18} />
                    </div>
                </div>
            </header>
        )
        : <></>;
};

export default Header;
