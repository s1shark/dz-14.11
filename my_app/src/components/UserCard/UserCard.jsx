import './userCard.css'

const UserCard = ({ model, ios, color, price }) => {

    return (
        <div className='common-user-card'>
            <div>{ `Model : ${model}` }</div>
            <div>{ `IOS : ${ios}` }</div>
            <div>{ `Color : ${color}` }</div>
            <div>{ `Price : ${price}$` }</div>
        </div>
    )
};

export default UserCard;
