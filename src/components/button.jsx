const Button = (prop) => {
    return (
        <>
            <div className={`footer-${prop.stepNum}`}>
                <span>go back</span>
                <button className='next-step'>next step</button>
            </div>
        </>
    )
}

export default Button
