let todos=[];
let input=prompt("What would you like to do?");
while(input!=='Quit')
{
    input=prompt("What would you like to do?");
    if(input==='List')
    {
        console.log('******');
        for(let i=0;i<todos.length;i++)
        {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('******');
    }
    else if(input==='New')
    {
        const newtodo=prompt("Ok, what is the new todo?");
        todos.push(newtodo);
        console.log(`${newtodo} has been added to the list!`);
    }
    else if(input==='Delete')
    {
        const index=parseInt(prompt("Enter an index to delete it!"));
        if(!Number.isNaN(index))
        {
            const deleted =todos.splice(index,1);
            console.log(`Ok, ${deleted[0]} has been deleted from the list!`);
        }
        else
        {
            console.log("You have entered an unknown index!!");
        }
    }
}
console.log("Ok, You quit!");