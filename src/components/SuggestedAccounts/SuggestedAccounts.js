import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import PropTypes from 'prop-types';
import AccountItem from "./AccountItem";
import { useState, useRef } from "react";

const cx = classNames.bind(styles);

function SuggestedAccounts( {label}) {
    const [result, setResult] = useState();

    const clickRef = useRef()

    const handleClick = ( ) => {
        const bb = (<AccountItem/>)
        setResult(bb)
        
    }
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem/>
            <AccountItem/>
            <AccountItem/>
            <AccountItem/>
            <p ref={clickRef} className={cx('more-btn')} onClick={handleClick}>See all</p>
            {result}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}

export default SuggestedAccounts;