//HOC doesn't start with a capital letter
export const printProps = Component => {
    return (props) => {
        console.log(props);
        
        return <Component {...props} />
    };
}