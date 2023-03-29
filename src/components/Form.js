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
                                    type="name"
                                    class="form-control"
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

                                    type="email"
                                    class="form-control"
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
                                    type="number"
                                    class="form-control"
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
                                        class="form-control"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea"
                                    >
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 form-check">
                        <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                        />
                        <label
                            class="form-check-label"
                            for="exampleCheck1"
                        >
                            Check me out
                        </label>
                    </div>
                    <button t
                        ype="submit"
                        class="btn btn-primary mb-4"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default Form;