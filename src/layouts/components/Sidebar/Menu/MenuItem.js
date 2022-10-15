import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeicon }) {
    return (
        <NavLink
            className={({ isActive }) => cx('menu-item', { active: isActive })}
            to={to}
            children={({ isActive }) => {
                const currentActive = isActive ? activeicon : icon;
                return (
                    <>
                        {currentActive}
                        <span className={cx('title')}>{title}</span>
                    </>
                );
            }}
            end
        />
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeicon: PropTypes.node.isRequired,
};

export default MenuItem;
