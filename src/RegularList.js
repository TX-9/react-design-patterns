export const RegularList = ({ 
    items, 
    resourceName, 
    itemComponent: ItemComponent}) => {
        return (
            <>
            {items.map((item, idx) => (
                /* 
                [resourceName] has nothing to do with Array but use value as key
                {...{ [resourceName]: item }} becomes,
                person: {name: 'John Doe', age: 54, hairColor: 'brown', hobbies: Array(3)}
                */
                <ItemComponent key={idx} {...{ [resourceName]: item }} />
            ))}
            </>
        )


};