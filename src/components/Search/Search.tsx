import { FC } from 'react';
import { useState, useRef, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MagnifyingGlass } from '@phosphor-icons/react';

import { Recent } from '@/services/recent.service';
import SearchDropDown from './SearchDropDown';
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
    const [query, setQuery] = useState(searchParams.get('q') || '');
    const [isVisible, setIsVisible] = useState(false);
    const inputEl = useRef<HTMLInputElement>(null);
    const searchContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                inputEl.current &&
                !inputEl.current.contains(event.target as Node) &&
                searchContainer.current &&
                !searchContainer.current.contains(event.target as Node)
            ) {
                setIsVisible(false);
            }
        };

        const handleSearchKey = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === '/') {
                inputEl.current &&
                    inputEl.current.focus();
            }
            if (e.key === 'Escape') {
                inputEl.current &&
                    inputEl.current.blur();
                setIsVisible(false);
            }
        };

        window.addEventListener('keyup', handleSearchKey);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('keyup', handleSearchKey);
        };
    }, [inputEl]);

    return (
        <div
            className={`w-full relative ${props.classList}`}>
            <Input
                classList={props.inputClass}
                placeholder={'Search for Images ... ' +
                    'Press (Ctrl + /) to focus'}
                value={query}
                onChange={e => {
                    setQuery(
                        (e.target as HTMLInputElement).value);
                }}
                onKeyUp={async e => {
                    if (e.key === 'Enter') {
                        await Recent.storeRecentSearch(query);
                        setIsVisible(false);
                        navigate(`/search?q=${query}`, {
                            replace: true
                        });
                    }
                }}
                onFocus={() => {
                    setIsVisible(true);
                }}
                ref={inputEl} />
            <MagnifyingGlass
                className={Styles.searchIcon}
                size={props.iconSize} />
            <SearchDropDown
                visible={isVisible}
                ref={searchContainer} />
        </div>
    );
};

export default Search;
