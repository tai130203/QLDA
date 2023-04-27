import classNames from 'classnames/bind';
import styles from './DocumentItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function DocumentItem({ className }) {
    return (
        <div className={cx('wrapper', { [className]: className })}>
            <div className={cx('header')}>
                <span className={cx('header-icon')}>
                    <img
                        src="https://drive-thirdparty.googleusercontent.com/32/type/application/vnd.openxmlformats-officedocument.presentationml.presentation"
                        alt="icon"
                    />
                </span>
                <span className={cx('header-title')}>Leave Request Template</span>
            </div>
            <div className={cx('body')}>
                <img
                    className={cx('document-img')}
                    src="https://lh3.googleusercontent.com/fife/APg5EOac0dAUx_ujt_woAM1ykx-Qw-zbP9ezI5U_zuUOXBvP0yjqYBBohRgeNRPjAK6XAlRnclBXBcfnI1wvGpiyG6cOLm8WfQ0inYspjSQedbINGYJVUc7pR22eqC-ooKcVIr-osQ7zYh6HeRoQZvM-nJ2-EVBIwCJUHy94xAq7B3eM5lAlXjIEPF5FPd_-P-WQYwCodHF1zFzyxQ42-cjdNQdJ6g6H5w_dv7WEyBcNZGxXaRd5pJVoWQ_ZgQ1vqOVNDHifNpv3rXq7gQuaw0cnMnfUlSuXZrR050tuK5G1YfjuQE6sWVurMoQ_8reEE-4PFrPPw4ESy9xi-LRcOANESiX0oDsu4-6R3SW9LgB-3XDt8nyXB64BI25pHevu8o7UuP0ZxONWWnYiOUzy7J_01_G73CqRV1jndcQQxl1FVkl_csFj2T7xWyt4PKLoQimmGMv9tAV56O3TgbeJ28pPao1VPObqzCffTTZELiUuu-rNk2t58A63CwxZ36cnG5GzPiP_breGNm6ws4tVBSBr7JEWSlnRjhX8pPkzTBZ_jDzaMh4hbH1be4OAZt6xTRTvOfWYry9jtmefUWa7n8DLpaZAI5BSHAsPFYIZlxXan1eA0bBRqmtb3ccLcXog1fSREjULPHp37ArF1mJqehLT0oanjQzoVdP9RXOSQzZSwWv8vjy7jDE-4_V7HIAj2VgqKkb5WbAS0jGKI472F9cRtRuqGXnSdvg_NqCLFJIQ54ZcRfZV7pILcwoSKgdq4Xkz6Wxl14c1-qdFhpXJsHA_k7J4iFwuekR9zGK6qo2_IRuO0KhmpNLwKpYCA61RAgTw9y63OjSR46qj7DsOyc83QMEthOdGnYSxNJhC-4Yz7tJyuDe7U1-lYcW7a28iGuKICoFlVrJ7D3RSLEzk7umQU0MYRq_WDhgwLEdB7VuUQguowg2GnXZxiF5XflJVH4dh5374hXmtTKgMr5zNwyK7qaKN3ygx50RQpKqa9vZIQsHYqM3p1iaJpMrpE5A1C1rjBdOT1ufSa-g_2FYwHWTlKx-hFy2Guya_LH44hzy0H5sGqtzOkScaKXL4103lSZgzdFNEVQSHpmHAWw-5SFJWuv_wGFv2C5uJ7IwFiVjMQEvUYPxoRDDnDSXI5vyCsHbv-QvwoXPLIQwUTxpV63Syr_i38_sOLYCLWy8rBLbg9mH3oDRou_fQQ1tYvpqf03WMfcTEf_eOKO6uaPlcMt3aNo9_bxLb-woSdDiufZMcFsomQnM-c9cGwX4BibVgTePpEnou0r4fVrVUajrESrbHILHaevTwCP3GZ_jHco-M3XRu-5e3evHLdKlPs8qDqwCj2G6hLvrp2qHk7GMw5AmMUgYrqBcMk3FC7t2kwcTaYrwsVVom_Yv_MGrfy8F1YDbmcPYI7wkC9cfN3SaPOzloOmIwh6d5Gqs1dxUBeHGdfeLjAzzheWMX9QC90nE7jwQUcx22kcRqNISoPL76AZnDGGosEsheMo1L0dDSlETvf5XPoiihdGZ4v60MZSqR5w0GDPlKjIHp12CEIlaPdFvDXI9Gpf2IeWnx5xPACRbKR311yR3O8I6EuHF6bXQBu2HfgCvczyQ=w275-h261-p-k-nu"
                    alt="img"
                />
            </div>
        </div>
    );
}

export default DocumentItem;
