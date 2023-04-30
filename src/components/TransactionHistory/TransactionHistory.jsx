import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.trasactions}>
      <thead className={css.head}>
        <tr className={css.headRow}>
          <th className={css.headRowItem}>Type</th>
          <th className={css.headRowItem}>Amount</th>
          <th className={css.headRowItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.row}>
            <td className={css.rowItem}>{type}</td>
            <td className={css.rowItem}>{amount}</td>
            <td className={css.rowItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
