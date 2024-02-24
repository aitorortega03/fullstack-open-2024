import './Notification.css'

const Notification = ({ message, messageType }) => {

    const messageTypeClasses = Object.freeze({
        success: 'succes-notification',
        error: 'error-notification'
    })

    return ( 
        <div className={`${messageTypeClasses[messageType]}`}>
            {message}
        </div>
     );
}
 
export default Notification;