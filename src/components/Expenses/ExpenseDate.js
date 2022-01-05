import Card from '../UI/Card';
import './ExpenseDate.css';

function ExpenseDate (props) {
    const month = new Date(props.date).toLocaleString('en-IN', {month: 'long'})
    const day = new Date(props.date).toLocaleString('en-IN', {day: '2-digit'})
    const year = new Date(props.date).toLocaleString('en-IN', {year: 'numeric'})
    return (
        <Card className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__month">{day}</div>
            <div className="expense-date__month">{year}</div>
        </Card>
    )
}

export default ExpenseDate;