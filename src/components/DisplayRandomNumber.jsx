function DisplayRandomNumber () {
    function generateRandomNumber (){
        return Math.floor(Math.random() * 1000 + 1);
    }
    return (
        <>
            <div>The random number is: {generateRandomNumber()} </div>
        </>
    )
}

export default DisplayRandomNumber