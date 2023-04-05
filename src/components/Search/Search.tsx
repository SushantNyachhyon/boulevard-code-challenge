import type { FC } from 'react';
import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MagnifyingGlass } from '@phosphor-icons/react';

import { Input } from '@/components/Input';
import Styles from './search.module.css';

type SearchProps = {
    classList?: string;
    inputClass?: string;
    iconSize?: number
}

const Search: FC<SearchProps> = (props) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState<string>(searchParams.get('q') || '');

    return (
        <div
            className={`w-full relative ${props.classList}`}>
            <Input
                classList={props.inputClass}
                placeholder={'Search for Images ...'}
                value={query}
                onChange={e => {
                    setQuery(
                        (e.target as HTMLInputElement).value);
                }}
                onKeyUp={e => {
                    if (e.key === 'Enter') {
                        navigate(`/search?q=${query}`, {
                            replace: true
                        });
                    }
                }} />
            <MagnifyingGlass
                className={Styles.searchIcon}
                size={props.iconSize} />
        </div>
    );
};

export default Search;
