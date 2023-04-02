import { useState } from "react";
// FileName : Form.js
// Created By : Sanjay
// Created On : 27-Mar-2023
// Last Updated On :  27-Mar-2023
// Purpose : To display the Form Us page


const Form = () => {

    // state to biund the form data
    const [objFormData, setFormData] = useState({
        strName: '',
        strEmail: '',
        strPhoneNo: '',
        strMsg: ''
    })

    //save data 
    const saveData = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <div className="container formOuter pt-4 mt-4">
                <h1 className="heading mt-2">
                    <span className="cp">Stay</span>
                    <span className="cs"> Connected</span>
                </h1>
                <hr className="hr" style={{ "height": "10px !important" }} />
                <form className='mt-4'>
                    <div class="mb-3">
                        <div class="row">
                            <div class="col-4">
                                <label
                                    for="exampleInputname"
                                    class="form-label"
                                >
                                    Name
                                </label>
                            </div>
                            <div class="col-8">
                                <input
                                    className="form-control inputField"
                                    type="name"
                                    id="exampleInputname"
                                    aria-describedby="nameHelp"
                                    value={objFormData.strName}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row">
                            <div class="col-4">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                    value={objFormData.strEmail}
                                >
                                    Email address
                                </label>
                            </div>
                            <div class="col-8">
                                <input
                                    className="form-control inputField"
                                    type="email"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row">
                            <div class="col-4">
                                <label
                                    for="exampleInputNumber"
                                    class="form-label"
                                    value={objFormData.strPhoneNo}
                                >
                                    Phone Number
                                </label>
                            </div>
                            <div class="col-8">
                                <input
                                    className="form-control inputField"
                                    type="number"
                                    id="exampleInputNumber"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row">
                            <div class="col-4">
                                <label
                                    for="exampleInputNumber"
                                    class="form-label"
                                    value={objFormData.strMsg}
                                >
                                    Message
                                </label>
                            </div>
                            <div class="col-8">
                                <div class="form-floating">
                                    <textarea
                                        className="inputField h-100"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea"
                                    >
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row">
                            <div class="col-4">
                            </div>
                            <div class="col-4">
                                <button
                                    // type="submit"
                                    class="btn btn-primary mb-4"
                                    onClick={(event) => saveData(event)}
                                >
                                    Submit
                                </button>
                            </div>
                            <div class="col-4"></div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;