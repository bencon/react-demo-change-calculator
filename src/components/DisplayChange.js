import React from 'react';

function DisplayChange(props) {
    const totalChange = props.provided - props.cost;

    if (totalChange < 0) {
        return (
            <div>
                Please provide adequate money!
            </div>
        );
    }

    let changeDollarsRemaining =  Math.floor(totalChange);
    let changeCentsRemaining =  Math.round((totalChange - changeDollarsRemaining) * 100);

    const billsTen = Math.floor(changeDollarsRemaining / 10);
    changeDollarsRemaining -= billsTen * 10;
    const billsFive = Math.floor(changeDollarsRemaining / 5);
    changeDollarsRemaining -= billsFive * 5;
    const billsOne = changeDollarsRemaining;

    const quarters = Math.floor(changeCentsRemaining / 25);
    changeCentsRemaining -= quarters * 25;
    const dimes = Math.floor(changeCentsRemaining / 10);
    changeCentsRemaining -= dimes * 10;
    const nickels = Math.floor(changeCentsRemaining / 5);
    changeCentsRemaining -= nickels * 5;
    const pennies = Math.round(changeCentsRemaining);

    const allDenominations = [];
    allDenominations.push({denonimation: '$10 bill', quantity:billsTen});
    allDenominations.push({denonimation: '$5 bill', quantity:billsFive});
    allDenominations.push({denonimation: '$1 bill', quantity:billsOne});
    allDenominations.push({denonimation: 'quarter', quantity:quarters});
    allDenominations.push({denonimation: 'dime', quantity:dimes});
    allDenominations.push({denonimation: 'nickel', quantity:nickels});
    allDenominations.push({denonimation: 'penny', quantity:pennies});

    const filteredDenominations = allDenominations.filter((item) => {
        return item.quantity > 0;
    }).map((item) => {
        if (item.quantity > 1) {
            if (item.denonimation === 'penny') {
                item.denonimation = 'pennies';
                return item;
            }
            item.denonimation = `${item.denonimation}s`;
        }
        return item;
    });

    return (
        <React.Fragment>
            <br />
            <br />
            Change Returned:
            <ul>
                {
                    filteredDenominations.map(function(item, index){
                        return (
                            <li key={index}>
                                {`${item.quantity} ${item.denonimation}`}
                            </li>
                        );
                    })
                }
            </ul>
        </React.Fragment>
   );
}

export default DisplayChange;
