import classNames from 'classnames/bind';
import styles from './Employees.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function EmployeeItem({ className }) {
    return (
        <div className={cx('employee-row', { [className]: className })}>
            <div className={cx('col-item', 'img-item')}>
                <img
                    className={cx('employee-avatar')}
                    src="https://einfosoft.com/templates/admin/kuber/source/light/assets/images/user/user1.jpg"
                    alt="avatar"
                />
            </div>
            <div className={cx('col-item')}>John Doe</div>
            <div className={cx('col-item')}>Java</div>
            <div className={cx('col-item')}>Developer</div>
            <div className={cx('col-item')}>C.E.</div>
            <div className={cx('col-item')}>1234567890</div>
            <div className={cx('col-item')}>test@email.com</div>
            <div className={cx('col-item')}>2/25/2018</div>
            <div className={cx('col-item')}>
                <button className={cx('action-btn', 'edit-btn')}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>

                <button className={cx('action-btn', 'remove-btn')}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>
    );
}

export default EmployeeItem;
