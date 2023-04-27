import classNames from 'classnames/bind';
import styles from './PopperWrapper.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRotateRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PopperWrapper({ fields, children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <span>All Employee</span>
                <input placeholder="search user" />
                <button className={cx('plus-btn')}>
                    <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />
                </button>
                <button className={cx('reload-btn')}>
                    <FontAwesomeIcon className={cx('reload-icon')} icon={faRotateRight} />
                </button>
            </div>
            <div className={cx('content')}>
                <div className={cx('label')}>
                    {fields.map((item, index) => (
                        <div className={cx('label-item', `flex-${item.ratio}`)}>{item.name}</div>
                    ))}
                </div>

                <div className={cx('employee-list')}>{children}</div>
            </div>
        </div>
    );
}

export default PopperWrapper;
