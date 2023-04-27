import classNames from 'classnames/bind';
import styles from './Employees.module.scss';
import PageHeader from '../components/PageHeader/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import EmployeeItem from './EmployeeItem';
import PopperWrapper from '~/components/PopperWrapper/PopperWrapper';

const cx = classNames.bind(styles);

function Employees() {
    return (
        <div className={cx('wrapper')}>
            <PageHeader title="All Employee" />
            <div className={cx('container')}>
                <PopperWrapper
                    title="All Employees"
                    fields={[
                        { name: 'Image', ratio: 3 },
                        { name: 'Name', ratio: 10 },
                        { name: 'Leave Type', ratio: 10 },
                        { name: 'Leave From', ratio: 10 },
                        { name: 'Leave To', ratio: 10 },
                        { name: 'No Of Days', ratio: 10 },
                        { name: 'Status', ratio: 10 },
                        { name: 'Reason', ratio: 10 },
                        { name: 'Actions', ratio: 10 },
                    ]}
                >
                    <EmployeeItem className={cx('employee-item', 'border-top')} />
                    <EmployeeItem className={cx('employee-item', 'border-top')} />
                    <EmployeeItem className={cx('employee-item', 'border-top')} />
                    <EmployeeItem className={cx('employee-item', 'border-top')} />
                    <EmployeeItem className={cx('employee-item', 'border-top')} />
                    <EmployeeItem className={cx('employee-item', 'border-top')} />
                    <EmployeeItem className={cx('employee-item', 'border-top')} />
                </PopperWrapper>
            </div>
        </div>
    );
}

export default Employees;
