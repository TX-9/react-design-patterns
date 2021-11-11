export const LargeProductListeItem = ({ product }) => {
    const {name, price, description, rating} = product;

    return (
        <>
        <h3>{name}</h3>
        <h3>{price}</h3>
        <h3>{description}</h3>
        <h3>{rating}</h3>
        </>
    );
};