// function welcomeMsg(name = 'Everyone'){
//     let msg = `Welcome ${name}` ;
//     console.log(msg);
// }
// welcomeMsg('raofahadkhan');
// welcomeMsg();



function createIcecream({ scoops = 1, toppings = ['Dark Chocolate'] } = {}){
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    console.log(`your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`) 
    // if we pass array of two elements in toppings it will display it like:
    // smarties and sprinkles
}

createIcecream({});
// createIcecream({ scoops: 2});
// createIcecream({ toppings: ['Strawberry']});
// createIcecream({ scoops:5, toppings : ['vanila']});
// createIcecream({ scoops:5, toppings : ['Sprinkles','Smarties']});
// createIcecream({ scoops:5, toppings : ['Sprinkles','Smarties','Candies']});
// createIcecream();

