// FileName : Card.js
// Created By : Sanjay
// Created On : 27-Mar-2023
// Last Updated On :  27-Mar-2023
// Purpose : To display the Cards page

const Card = (props) => {
    // functions
    return (
        <>
            <div class="card cardComp">
                <div class="card-body">
                    <h5 class="cardTitle spacing">{props.title_prop}</h5>
                    <p class="cardContent spacing">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn button">{props.btn_pop} {">>>"}</a>
                </div>
            </div>
        </>
    );
}

export default Card;
