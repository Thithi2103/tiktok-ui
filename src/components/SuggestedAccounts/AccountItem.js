import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountsPreview/AccountPreview';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex={-1} {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy  interactive delay={[800, 0]} offset={[-10, 0]} placement="bottom" render={renderPreview}>
                <Link className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1665954000&x-signature=c9gUdN5EWoDHYDbnJWr8iY9%2BY1A%3D"
                        alt=""
                    />

                    <div className={cx('info')}>
                        <h4 className={cx('nickname')}>
                            <span>hoangdinhthi</span>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <span className={cx('username')}>Hoang Dinh Thi</span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

export default AccountItem;
