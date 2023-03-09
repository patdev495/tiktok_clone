import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    console.log(images.logo);
    return (
        <div className={cx('header')}>
            <div className={cx('wrapper')}>
                <img className={cx('logo')} src={images.logo.default} alt="tiktok" />
                <div className={cx('search')}>
                    <input className={cx('input')} placeholder="Search account and video" />
                    <img src={images.search.default} alt="search" />
                    <span className={cx('horizontal')}></span>
                    <FontAwesomeIcon icon={faCircleXmark} className={cx('close-icon')} />
                    <FontAwesomeIcon icon={faSpinner} className={cx('loading-icon')} />
                </div>

                <div className="action"></div>
            </div>
        </div>
    );
}

export default Header;
