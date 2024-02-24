import './Notification.css'

const Notification = ({ message }) => {
    return ( 
        <div className='succes-notification'>
            {message}
        </div>
     );
}
 
export default Notification;