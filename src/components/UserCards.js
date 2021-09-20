import React, {useState,useMemo} from 'react';
import "./UserCards.css"
import TinderCard from 'react-tinder-card';
import IconButton from '@material-ui/core/IconButton';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import RestoreSharpIcon from '@material-ui/icons/RestoreSharp';
import StarsSharpIcon from '@material-ui/icons/StarsSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';


function UserCards() {
    const db = [
        {
            name: "Gio Landicho",
            img:
             "https://lh3.googleusercontent.com/-kUsj50teDjk/YMWl9al0woI/AAAAAAAAJfI/TU1uTXvpZncqe6axZvNiy6WdPErGqBhtQCEwYBhgLKtQDABHVOhzXLl1cP-eQAxqQjh48S70tST9X-jV-G4L-KjNJ08aZ6JFocSvKEQ5oSttz7VWr11ujTU1jVg3g6XMSx9NuUg9-Z8euX6z0Eqm6sRbkVNTXCOs35dN5K_kqY8fr-Shz6r9MbU0-QUNsp-Sp3FSJe0ZidGMlatHKZ1Gn1t1SupY1pafICngPLSdRNn_xwyNnlQzx8kJxho5FNdEgiCIBoS0FMZtnSk03G4qp1Su0DWqb06gGYFUhx01eveQnqmXnCJNSA_lBjOQ-hNo0v-CLnhdtBt_WanNOO4daY1vA95_K-3TaCopvWegMGseV0hWk5f3ouhHIBQ2UpdvX7mn8q2YcnIMlUpTNwkHpJTYvX4AQmhqQPgRk8KQI4WIKJ6f_0lGHE-zMqoq4L_natVh-tv3DlC5W_q6eAzIrxXBkxu9OIwF5wcoOIaSTIqFtV-_Lk0nuntVLywEK2rrrqwh-pnkO4p_HbSWcqYfIrd4P_x03df1PiHb_Owdhztc1Pzid5DacDGDGqgg0Nej17BOrYvGIUWHTg3dE47Qd_W4yIpGBJQDVaLzybocYpZmmKQcR_R04SrKti8DUnUvijL0NVWPS7FN_fblK_YLndwXjFlLwMIj35YgG/w280-h280-p/2021-06-12.jpg"
        },
        {
            name: "Ryan Timoteo",
            img: 
            "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.18169-1/p160x160/12919895_1268593126488691_4604949701823797814_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=t6af0YREx9oAX_diR2p&_nc_ht=scontent-sjc3-1.xx&oh=0142e773a6e1bd7dd2ec425cb8ae49cb&oe=613DF6DD"
        }
    ];
    
    let charactersState = db

    const [lastDirection, setLastDirection] = useState();
    const [people, setPeople] = useState(db);

    const alreadyRemoved = [];

    const childRefs = useMemo(() => 
        Array(db.length).fill(0).map(i => 
            React.createRef()), []);


    const onSwipe = (dir, name)=>{
        setLastDirection(dir)
        alreadyRemoved.push(name)
        if(dir === "right"){
            console.log(`You liked ${name}`)
        }
        if(dir ==="left"){
            console.log(`You disliked ${name}`)
        }
        else return;
    }
    const remove = (name)=>{
        console.log(`removed ${name}`)
        charactersState = charactersState.filter(character => character.name !== name)
        setPeople(charactersState)
    }

    const swipe = (dir) => {
        const cardsLeft = people.filter(person => !alreadyRemoved.includes(person.name))
        if(cardsLeft.length){
            const toBeRemoved = cardsLeft[cardsLeft.length - 1].name;
            const index = db.map(person => person.name).indexOf(toBeRemoved);
            alreadyRemoved.push(toBeRemoved)
            childRefs[index].current.swipe(dir);
        }
    }

    return (
        <div className="container">
            <div className='user-cards'>
                <div className='user-card-container'>
                    {people.map((person, index) =>(
                        <TinderCard
                        ref={childRefs[index]}
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up','down']}
                        onSwipe={(dir) => onSwipe(dir, person.name)}
                        onCardLeftScreen={()=> remove(person.name)}>
                        <div
                        style={{ backgroundImage: `url(${person.img})`}} className='card'>
                            <h3>{person.name}</h3>
                        </div>
                        </TinderCard>
                    ))}
                </div>
            </div>
            <div className='divider'>
            {lastDirection ? <h1 className="swipe-info">You swiped {lastDirection}</h1>: <h1></h1>}
            </div>
            <div className="footer">
                <IconButton color="inherit" onClick={() => swipe('left')}>
                    <CancelSharpIcon 
                    style={{ color: "red", fontSize: 60}}/>
                </IconButton>
                <IconButton color="inherit">
                    <RestoreSharpIcon style={{ color: "black", fontSize: 60}}/>
                </IconButton >
                <IconButton color="inherit">
                    <StarsSharpIcon style={{ color: "#00FFFF", fontSize: 60}}/>
                </IconButton>
                <IconButton color="inherit" onClick={() => swipe('right')}>
                    <FavoriteSharpIcon style={{ color: "#FF00FF", fontSize: 60}}/>
                </IconButton>
            </div>
        </div>
    )
}

export default UserCards
