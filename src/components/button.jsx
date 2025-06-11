const Button = (props) => {
    return (
        <>
            <div className={`footer-${props.stepNum}`}>
                <span>go back</span>
                <button className='next-step'>{props.text}</button>
            </div>
        </>
    )
}

export default Button
