import classNames from 'classnames/bind';
import styles from './Documents.module.scss';

import PageHeader from '../components/PageHeader/PageHeader';
import DocumentItem from '~/components/DocumentItem/DocumentItem';

const cx = classNames.bind(styles);

function Documents() {
    return (
        <div className={cx('wrapper')}>
            <PageHeader title="All Documents" />
            <div className={cx('container')}>
                <DocumentItem className={cx('doc-item')} />
                <DocumentItem className={cx('doc-item')} />
                <DocumentItem className={cx('doc-item')} />
                <DocumentItem className={cx('doc-item')} />
                <DocumentItem className={cx('doc-item')} />
                <DocumentItem className={cx('doc-item')} />
                <DocumentItem className={cx('doc-item')} />
            </div>
        </div>
    );
}

export default Documents;
