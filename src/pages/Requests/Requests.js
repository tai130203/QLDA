import classNames from 'classnames/bind';
import styles from './Requests.module.scss';
import PageHeader from '../components/PageHeader/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import EmployeeItem from '../Employees/EmployeeItem';
import PopperWrapper from '~/components/PopperWrapper/PopperWrapper';
import RequestItem from './RequestItem';

const cx = classNames.bind(styles);

function Requests() {
    return (
        <div className={cx('wrapper')}>
            <PageHeader title="All Requests" />
            <div className={cx('container')}>
                <PopperWrapper
                    title="All Requests"
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
                    <RequestItem />
                    <RequestItem />
                    <RequestItem />
                    <RequestItem />
                    <RequestItem />
                </PopperWrapper>
            </div>
        </div>
    );
}

export default Requests;
