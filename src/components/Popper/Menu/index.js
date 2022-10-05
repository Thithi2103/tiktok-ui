import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '../../Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItems key={index} data={item}></MenuItems>);
    };
    return (
        <Tippy
            delay={[0, 1000]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
