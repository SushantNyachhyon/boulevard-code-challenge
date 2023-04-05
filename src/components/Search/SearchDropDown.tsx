import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Recent } from '@/services/recent.service';
import Styles from './search.module.css';

type DropDownProps = {
    visible?: boolean;
}

const SearchDropDown = forwardRef<HTMLDivElement, DropDownProps>(
    (props, ref) => {
        const navigate = useNavigate();

        return props.visible ? (
            <div
                ref={ref}
                className={Styles.dropDownContainer}>
                <span
                    className='text-sm text-gray-600'>
                    {'Search for you image typing the keywords.'
                        + ' Once done hit "Enter" key.'}
                </span>
                <span
                    className={Styles.dropDownHeader}>
                    Recent Searches:
                </span>
                <div className={Styles.recentContainer}>
                    {
                        Recent.getRecentSearch()
                            ? Recent.getRecentSearch().map(item => (
                                <a
                                    href="#"
                                    onClick={e => {
                                        e.preventDefault();
                                        navigate(`/search?q=${item}`, {
                                            replace: true
                                        });
                                    }}
                                    className={Styles.recentItem}
                                    key={item}>
                                    {item}
                                </a>
                            ))
                            : (<span
                                className={Styles.dropDownHeader}>
                                No Recent Searches
                            </span>)
                    }
                </div>
            </div>
        ) : <></>;
    });

export default SearchDropDown;
