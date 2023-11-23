// import "./FooterItem.css"

const FooterItem = (props) => {
    const { text, isLowercaseText } = props

    return(
        <div className='common-footer'>
            <div className='text'>
                { isLowercaseText ? text.toLowerCase() : text }
            </div>
       </div>
    );
}

export default FooterItem;
