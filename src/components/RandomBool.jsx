function RandomBool () {

    const timestamp = new Date();
    const hour = timestamp.getHours();
    const dayOrNight = hour > 12;
    return (
        <>
<div>{(dayOrNight) ? 'Good afternoon World' : 'Good morning World'}</div>
        </>
    ) 
}

export default RandomBool